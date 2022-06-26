import React from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { deleteBook } from "../redux/features/books/booksSlice";

const BookCard = ({ book }) => {
	const dispatch = useDispatch();
	return (
		<div className='border border-solid border-black mb-4'>
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
	);
};

export default BookCard;
