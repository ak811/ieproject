import axios from "axios";

const BASE_URL = "https://tui4kc.sse.codesandbox.io/";
export { BASE_URL };

// true =>  success | false => failed
export default async function createNewUser({ firstName, lastName, email }) {
  try {
    await axios.post(BASE_URL, {
      firstName,
      lastName,
      email
    });
    return true;
  } catch {
    return false;
  }
}
