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
		<div className=''>
			<Popup isOpen={isOpen}>
				<BookCardPopup
					book={book}
					handleBookCardPopupToggle={handleBookCardPopupToggle}
				/>
			</Popup>
			<div
				className='border border-solid border-black mb-4 cursor-pointer flex flex-col'
				onClick={() => {
					handleBookCardPopupToggle();
				}}
			>
				<div className='flex justify-between'>
					<label className='ml-4'>Name: </label>
					<p className='mr-4 font-bold'>{book.name}</p>
				</div>
				<div className='flex justify-between'>
					<label className='ml-4'>Price: </label>
					<p className='mr-4 font-bold'>{book.price}</p>
				</div>
				<div className='flex justify-between'>
					<label className='ml-4'>Category: </label>
					<p className='mr-4 font-bold'>{book.category}</p>
				</div>
				<div className='flex justify-between'>
					<label className='ml-4'>Description: </label>
					<p className='mr-4 font-bold'>{book.description}</p>
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
