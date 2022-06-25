import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
	books: [
		{
			name: "JK Rowling",
			price: 12,
			category: "fantasy",
			description: "magic wizarding world",
		},
	],
};

export const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		addBooks: (state, action) => {
			state.books.push(action.payload);
			return {
				...state,
			};
		},
		getBooks: (state, action) => {
			return [
				{
					name: "JK Rowling",
					price: 12,
					category: "fantasy",
					description: "magic wizarding world",
				},
			];
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action,
			};
		},
	},
});

export const { addBooks, getBooks } = booksSlice.actions;
export default booksSlice.reducer;
