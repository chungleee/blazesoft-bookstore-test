import React, { useState } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/features/books/booksSlice";

const BookForm = ({ handleFormPopupToggle }) => {
	const dispatch = useDispatch();
	const [bookForm, setBookForm] = useState({
		bookName: "",
		bookPrice: "",
		bookCategory: "",
		bookDescription: "",
	});

	const handleOnInputChange = (event) => {
		setBookForm({
			...bookForm,
			[event.target.name]: event.target.value,
		});
	};

	const handleFormReset = () => {
		setBookForm({
			bookName: "",
			bookPrice: "",
			bookCategory: "",
			bookDescription: "",
		});
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const newBook = {
			id: uuidv4(),
			name: bookForm.bookName,
			price: bookForm.bookPrice,
			category: bookForm.bookCategory,
			description: bookForm.bookDescription,
		};
		dispatch(addBook(newBook));
		handleFormReset();
		handleFormPopupToggle();
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<InputField
				type='text'
				onChange={handleOnInputChange}
				label='Name'
				name='bookName'
				value={bookForm.bookName}
			/>
			<InputField
				type='number'
				onChange={handleOnInputChange}
				label='Price'
				name='bookPrice'
				value={bookForm.bookPrice}
			/>
			<InputField
				type='text'
				onChange={handleOnInputChange}
				label='Category'
				name='bookCategory'
				value={bookForm.bookCategory}
			/>
			<TextArea
				label='Description'
				onChange={handleOnInputChange}
				name='bookDescription'
				value={bookForm.bookDescription}
			/>
			<div>
				<Button className='p-2 bg-green-500' type='submit'>
					Submit
				</Button>
				<Button
					className='bg-white p-2'
					type='button'
					onClick={() => {
						handleFormPopupToggle();
					}}
				>
					Close popup
				</Button>
			</div>
		</form>
	);
};
export default BookForm;
