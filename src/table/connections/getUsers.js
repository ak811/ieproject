import axios from "axios";
import { BASE_URL } from "../../createNewUser";

export default async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}users`);
    return response.data;
  } catch {
    return [];
  }
}
