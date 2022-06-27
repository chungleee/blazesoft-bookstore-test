import React from "react";

const TextArea = ({ label, name, value, onChange, placeholder }) => {
	return (
		<div className='flex justify-between'>
			<label>{label}: </label>
			<textarea
				style={{ minWidth: "250px" }}
				placeholder={placeholder}
				className='resize-none'
				onChange={onChange}
				name={name}
				value={value}
			></textarea>
		</div>
	);
};

export default TextArea;
