import React, { useState } from "react";

const Popup = ({ isOpen }) => {
	return (
		<div className={`${isOpen ? "block" : "hidden"}`}>
			<p>this is a pop up</p>
		</div>
	);
};

export default Popup;
