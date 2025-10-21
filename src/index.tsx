import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./router/App";
import "./layout/styles/global.scss";
import YTmusic from "./layout/components/YTmusic";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<YTmusic/>
		</Provider>
	</React.StrictMode>
);
