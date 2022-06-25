import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addBooks, getBooks } from "../redux/features/books/booksSlice";
import { wrapper } from "../redux/store";

const HomePage = (props) => {
	console.log("State on render", useStore().getState(), props);
	const books = useSelector((state) => {
		console.log("selector state", state);
		return state.books;
	});
	return <h1>Hello leon nextjs works!!!</h1>;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => {
	return async () => {
		const books = await store.dispatch(getBooks());
		return {
			props: {
				books,
			},
		};
	};
});

// export const getServerSideProps = wrapper.getServerSideProps((store) => {
// 	return async () => {
// 		const { books } = await store.getState();
// 		return {
// 			props: {
// 				books: books.books,
// 			},
// 		};
// 	};
// });

export default HomePage;
