import React from 'react';

const BookCard = ({ book }) => {
	return (
		<div>
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
		</div>
	);
};

export default BookCard;
