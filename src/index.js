import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Table from "./table/Table";
import "./styles.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);

function AppContainer() {
  const [isInFormPage, setIsInFormPage] = useState(true);

  return (
    <div
      style={{
        background: "white",
        paddingBottom: "40px",
        borderRadius: 5,
        maxWidth: 600,
        margin: "0 auto"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "600px",
          margin: "0 auto"
        }}
      >
        <button
          className="tab_button"
          style={{
            width: "50%",
            opacity: isInFormPage ? 1 : 0.5,
            borderBottom: isInFormPage ? "2px solid rgba(253,29,29,1)" : "none"
          }}
          onClick={() => {
            setIsInFormPage(true);
          }}
        >
          Form
        </button>
        <button
          className="tab_button"
          style={{
            width: "50%",
            opacity: !isInFormPage ? 1 : 0.5,
            borderBottom: !isInFormPage ? "2px solid rgba(253,29,29,1)" : "none"
          }}
          onClick={() => {
            setIsInFormPage(false);
          }}
        >
          Table
        </button>
      </div>
      <div style={{ padding: "0 40px" }}>
        {isInFormPage ? <App /> : <Table />}
      </div>
    </div>
  );
}
