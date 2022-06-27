import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";
import { updateBook } from "../redux/features/books/booksSlice";

const BookCardPopup = ({ book, handleBookCardPopupToggle }) => {
	const dispatch = useDispatch();
	const [bookForm, setBookForm] = useState({
		bookName: book.name,
		bookPrice: book.price,
		bookCategory: book.category,
		bookDescription: book.description,
	});

	const handleOnInputChange = (event) => {
		setBookForm({
			...bookForm,
			[event.target.name]: event.target.value,
		});
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const updatedBook = {
			id: book.id,
			name: bookForm.bookName,
			price: bookForm.bookPrice,
			category: bookForm.bookCategory,
			description: bookForm.bookDescription,
		};
		dispatch(updateBook(updatedBook));
		handleBookCardPopupToggle();
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
						handleBookCardPopupToggle();
					}}
				>
					Close popup
				</Button>
			</div>
		</form>
	);
};

export default BookCardPopup;
