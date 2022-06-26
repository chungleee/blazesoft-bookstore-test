import React from "react";
import Button from "../components/Button";

const BookCard = ({ book }) => {
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

			<Button className='bg-red-500 text-white p-2 text-center'>
				Delete book
			</Button>
		</div>
	);
};

export default BookCard;
