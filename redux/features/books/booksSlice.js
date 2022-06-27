import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const bookList = [
	{
		id: uuidv4(),
		name: "Harry Potter 1",
		price: 12,
		category: "fantasy",
		description: "magic wizarding world",
	},
	{
		id: uuidv4(),
		name: "Harry Potter 2",
		price: 12,
		category: "fantasy",
		description: "magic wizarding world",
	},
	{
		id: uuidv4(),
		name: "Harry Potter 3",
		price: 12,
		category: "fantasy",
		description: "magic wizarding world",
	},
];

export const booksSlice = createSlice({
	name: "books",
	initialState: {
		bookList,
	},
	reducers: {
		addBook: (state, action) => {
			state.bookList.push({
				...action.payload,
			});
		},
		deleteBook: (state, action) => {
			const updatedBooklist = state.bookList.filter((book) => {
				return book.id !== action.payload.id;
			});
			return {
				...state,
				bookList: updatedBooklist,
			};
		},
	},
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
