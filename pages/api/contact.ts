import type { NextApiRequest, NextApiResponse } from "next";

import { MongoClient } from "mongodb";

import { HttpMethod } from "../../models/BackendModels/HttpMethod.model";
import { FormModel } from "../../models/FrontendModels/Form.model";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === HttpMethod.POST) {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage: FormModel = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://sone94:BTvDdSHWjRUwJlfQ@project-on-react.a5iz3.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db("my-site");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed." });
      return;
    }

    client.close();

    res.status(201).json({ message: "Successfully stored message!" });
  }
};

export default handler;
