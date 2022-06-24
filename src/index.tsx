import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const main = async () => {
  if (window.location.pathname !== "/virtualized-trips-list/") {
    window.location.pathname = "/virtualized-trips-list/";
    return;
  }

  const { worker } = require("./mocks");
  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: "/virtualized-trips-list/mockServiceWorker.js",
    },
  });

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

main();
