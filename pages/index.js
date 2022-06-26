import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import BookCard from "../components/BookCard";
import Button from "../components/Button";
import Popup from "../components/Popup";
import { addBooks } from "../redux/features/books/booksSlice";

const HomePage = () => {
	const [popupToggle, setPopupToggle] = useState(false);

	const handlePopupToggle = () => {
		setPopupToggle(!popupToggle);
	};

	const bookList = useSelector((state) => {
		return state.books.bookList;
	});

	return (
		<div>
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
			<Popup isOpen={popupToggle} />
			<ul>
				{bookList.map((book) => {
					return <BookCard book={book} />;
				})}
			</ul>
		</div>
	);
};

export default HomePage;
