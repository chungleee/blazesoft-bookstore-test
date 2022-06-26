import { createSlice } from "@reduxjs/toolkit";

const bookList = [
	{
		id: 1,
		name: "Harry Potter 1",
		price: 12,
		category: "fantasy",
		description: "magic wizarding world",
	},
	{
		id: 2,
		name: "Harry Potter 2",
		price: 12,
		category: "fantasy",
		description: "magic wizarding world",
	},
	{
		id: 3,
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
			console.log("add book action: ", action);
			state.bookList.push({ id: bookList.length + 1, ...action.payload });
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
