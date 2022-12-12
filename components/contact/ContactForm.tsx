import { useState, useEffect } from "react";

import styles from "./ContactForm.module.css";
import Notification from "../ui/Notification";
import { Status } from "../../models/FrontendModels/Status.model";
import { FormModel } from "../../models/FrontendModels/Form.model";

const sendContactData = async (contactDetails: FormModel) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState<null | Status>();
  const [requestError, setRequestError] = useState<null | string>();

  useEffect(() => {
    if (requestStatus === Status.SUCCESS || requestStatus === Status.ERROR) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    setRequestStatus(Status.PENDING);

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus(Status.SUCCESS);
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestError((error as any).message);
      setRequestStatus(Status.ERROR);
    }
  };

  let notification;

  if (requestStatus === Status.PENDING) {
    notification = {
      status: Status.PENDING,
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === Status.SUCCESS) {
    notification = {
      status: Status.SUCCESS,
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === Status.ERROR) {
    notification = {
      status: Status.ERROR,
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message!}
        />
      )}
    </section>
  );
};

export default ContactForm;
