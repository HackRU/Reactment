import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function main(useServiceWorker) {
    ReactDOM.render(<App />, document.getElementById("root"));
    if (useServiceWorker) {
        serviceWorker.register();
    } else {
        serviceWorker.unregister();
    }
}

main(false);
