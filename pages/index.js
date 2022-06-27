import React, { useState } from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import Button from "../components/Button";
import Popup from "../components/Popup";
import BookForm from "../components/BookForm";

const HomePage = () => {
	const [formPopupToggle, setFormPopupToggle] = useState(false);

	const handleFormPopupToggle = () => {
		setFormPopupToggle(!formPopupToggle);
	};

	const bookList = useSelector((state) => {
		return state.books.bookList;
	});

	return (
		<div className='relative w-full'>
			<Popup isOpen={formPopupToggle}>
				<BookForm handleFormPopupToggle={handleFormPopupToggle} />
			</Popup>
			<div className='mx-auto w-4/5'>
				<h1 className='font-bold underline text-center'>
					Blazesoft bookstore test
				</h1>

				<div className='text-center mt-8 mb-8'>
					<Button
						onClick={() => {
							handleFormPopupToggle();
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
		</div>
	);
};

export default HomePage;
