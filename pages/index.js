import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import BookCard from '../components/BookCard';
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
					return <BookCard book={book} />;
				})}
			</ul>
		</div>
	);
};

export default HomePage;
