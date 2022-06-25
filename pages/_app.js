import React from "react";
import { wrapper } from "../redux/store";

const App = ({ Component, props }) => {
	return <Component {...props} />;
};

export default wrapper.withRedux(App);
