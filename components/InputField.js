import React from "react";

const InputField = ({ label, name, value, onChange, type }) => {
	return (
		<div className='flex'>
			<label>{label}: </label>
			<input type={type} onChange={onChange} name={name} value={value} />
		</div>
	);
};

export default InputField;
