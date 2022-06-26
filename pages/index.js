import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import BookCard from "../components/BookCard";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Popup from "../components/Popup";
import TextArea from "../components/TextArea";
import { addBooks } from "../redux/features/books/booksSlice";

const HomePage = () => {
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
			[event.target.name]: event.target.value,
		});
	};

	const bookList = useSelector((state) => {
		return state.books.bookList;
	});

	return (
		<div>
			<Popup isOpen={popupToggle} handlePopupToggle={handlePopupToggle}>
				<form>
					<div>
						<label>Name: </label>
						<input
							type='text'
							onChange={handleOnInputChange}
							name='bookName'
							value={bookForm.bookName}
						/>
					</div>
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
					return <BookCard book={book} />;
				})}
			</ul>
		</div>
	);
};

export default HomePage;
