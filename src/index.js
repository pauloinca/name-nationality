import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./global/GlobalStyle";
import { NationalityProvider } from "./providers/NationalityProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NationalityProvider>
            <GlobalStyle />
            <App />
        </NationalityProvider>
    </React.StrictMode>
);
