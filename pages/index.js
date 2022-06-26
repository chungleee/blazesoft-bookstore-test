import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Popup from "../components/Popup";
import TextArea from "../components/TextArea";
import { addBook } from "../redux/features/books/booksSlice";

const HomePage = () => {
	const dispatch = useDispatch();
	const [popupToggle, setPopupToggle] = useState(false);
	const [bookForm, setBookForm] = useState({
		bookName: "",
		bookPrice: "",
		bookCategory: "",
		bookDescription: "",
	});

	const handlePopupToggle = () => {
		setPopupToggle(!popupToggle);
	};

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
			name: bookForm.bookName,
			price: bookForm.bookPrice,
			category: bookForm.bookCategory,
			description: bookForm.bookDescription,
		};
		dispatch(addBook(newBook));
		handleFormReset();
		handlePopupToggle();
	};

	const bookList = useSelector((state) => {
		return state.books.bookList;
	});

	return (
		<div>
			<Popup isOpen={popupToggle}>
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
								handlePopupToggle();
							}}
						>
							Close popup
						</Button>
					</div>
				</form>
			</Popup>
			<h1 className='font-bold underline text-center'>
				Blazesoft bookstore test
			</h1>

			<div>
				<Button
					onClick={() => {
						handlePopupToggle();
					}}
					className='bg-green-500 text-white text-center p-2'
				>
					Add a book
				</Button>
			</div>
			<ul>
				{bookList.map((book) => {
					return <BookCard key={book.id} book={book} />;
				})}
			</ul>
		</div>
	);
};

export default HomePage;
