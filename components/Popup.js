import React from "react";

const Popup = ({ children, isOpen }) => {
	return (
		<div
			className={`h-screen w-screen bg-slate-200 absolute flex justify-center items-center top-0 ${
				isOpen ? "block" : "hidden"
			}`}
		>
			<div className='border border-black h-3/5 w-4/5'>{children}</div>
		</div>
	);
};

export default Popup;
