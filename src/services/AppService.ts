import axios from "axios";
import { Message } from "../models/message";

export class AppService {
  static async sendMessage(message: Partial<Message>) {
    return await axios
      .post("http://juliobrazao.xyz:8080/data", message)
      .then((response) => response.data);
  }
}
