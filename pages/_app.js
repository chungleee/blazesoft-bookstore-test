import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../css/globals.css";

const App = ({ Component, props }) => {
	return (
		<Provider store={store}>
			<Component {...props} />
		</Provider>
	);
};

export default App;
