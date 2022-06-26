import React from "react";

const TextArea = ({ label, name, value, onChange }) => {
	return (
		<div className='flex'>
			<label>{label}: </label>
			<textarea
				className='resize-none'
				onChange={onChange}
				name={name}
				value={value}
			></textarea>
		</div>
	);
};

export default TextArea;
