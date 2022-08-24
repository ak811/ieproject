import "./styles.css";
import Input from "./Input";
import Timer from "./Timer";
import { useState } from "react";
import "./styles.scss";
import createNewUser from "./createNewUser";
import validator from "./valaidators";

const emptyState = {
  firstName: "",
  lastName: "",
  email: "",
  result: "Welcome"
};

export default function App() {
  const [state, setState] = useState({
    ...emptyState,
    firstName: "Ali",
    lastName: "Khaleghi"
  });

  return (
    <div className="card" style={{ marginTop: 50 }}>
      <Timer
        onFinish={() => {
          setState({
            ...emptyState,
            result: `Welcome ${state.firstName} ${state.lastName}`
          });
        }}
      />

      <Input
        max={15}
        placeholder="Name"
        value={state.firstName}
        onChange={(newValue) => {
          setState((previousState) => ({
            ...previousState,
            firstName: newValue
          }));
        }}
      />

      <Input
        max={20}
        placeholder="Last Name"
        value={state.lastName}
        onChange={(newValue) => {
          setState((p) => ({
            ...p,
            lastName: newValue
          }));
        }}
      />

      <Input
        max={50}
        placeholder="Email"
        value={state.email}
        onChange={(newValue) => {
          setState((p) => ({
            ...p,
            email: newValue
          }));
        }}
      />

      <button
        className="button"
        onClick={() => {
          // vaidate email
          console.log(state);
          if (
            !validator({
              firstName: state.firstName,
              lastName: state.lastName,
              email: state.email
            })
          ) {
            setState((p) => ({
              ...p,
              result: "Somthing went wrong"
            }));
            return;
          }

          createNewUser({
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email
          }).then((isSuccess) => {
            setState((p) => ({
              ...p,
              result: isSuccess ? "Success" : "Failed"
            }));
          });
        }}
      >
        Create New User
      </button>

      <div className="welcome-message" style={{ marginTop: 30, fontSize: 30 }}>
        <span>{state.result}</span>
      </div>
    </div>
  );
}
