import React from "react";

const InputField = ({ label, name, value, onChange, type, placeholder }) => {
	return (
		<div className='flex justify-between'>
			<label>{label}: </label>
			<input
				style={{ minWidth: "250px" }}
				type={type}
				onChange={onChange}
				name={name}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default InputField;
