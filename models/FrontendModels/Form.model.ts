import { ObjectId } from "mongodb";

export interface FormModel {
  id?: ObjectId;
  email: string;
  name: string;
  message: string;
}
