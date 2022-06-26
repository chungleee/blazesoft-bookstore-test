import React, { useState } from "react";
import Button from "./Button";

const Popup = ({ children, isOpen, handlePopupToggle }) => {
	return (
		<div
			className={`h-full w-full bg-slate-200 absolute flex justify-center items-center ${
				isOpen ? "block" : "hidden"
			}`}
		>
			<div className='border border-black h-3/5 w-4/5'>
				{children}
				<Button
					className='bg-white p-2'
					onClick={() => {
						handlePopupToggle();
					}}
				>
					Close popup
				</Button>
			</div>
		</div>
	);
};

export default Popup;
