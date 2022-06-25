import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { addBooks } from '../redux/features/books/booksSlice';

const HomePage = (props) => {
	const bookList = useSelector((state) => {
		return state.books.bookList;
	});
	return (
		<div>
			<h1 className='font-bold underline'>Blazesoft bookstore test</h1>
			<ul>
				{bookList.map((book) => {
					return (
						<li>
							<div>
								<label>Name: </label>
								<p>{book.name}</p>
							</div>
							<div>
								<label>Price: </label>
								<p>{book.price}</p>
							</div>
							<div>
								<label>Category: </label>
								<p>{book.category}</p>
							</div>
							<div>
								<label>Description: </label>
								<p>{book.description}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default HomePage;
