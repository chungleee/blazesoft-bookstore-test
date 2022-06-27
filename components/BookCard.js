import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { deleteBook } from "../redux/features/books/booksSlice";
import BookCardPopup from "./BookCardPopup";
import Popup from "./Popup";

const BookCard = ({ book }) => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const handleBookCardPopupToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<Popup isOpen={isOpen}>
				<BookCardPopup
					book={book}
					handleBookCardPopupToggle={handleBookCardPopupToggle}
				/>
			</Popup>
			<div
				className='border border-solid border-black mb-4 cursor-pointer'
				onClick={() => {
					handleBookCardPopupToggle();
				}}
			>
				<div className='flex'>
					<label>Name: </label>
					<p>{book.name}</p>
				</div>
				<div className='flex'>
					<label>Price: </label>
					<p>{book.price}</p>
				</div>
				<div className='flex'>
					<label>Category: </label>
					<p>{book.category}</p>
				</div>
				<div className='flex'>
					<label>Description: </label>
					<p>{book.description}</p>
				</div>

				<Button
					onClick={() => {
						dispatch(deleteBook(book));
					}}
					className='bg-red-500 text-white p-2 text-center'
				>
					Delete book
				</Button>
			</div>
		</div>
	);
};

export default BookCard;
