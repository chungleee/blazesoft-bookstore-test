import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import booksReducer from "./features/books/booksSlice";

const makeStore = () => {
	return configureStore({
		reducer: {
			books: booksReducer,
		},
	});
};

export const wrapper = createWrapper(makeStore);
