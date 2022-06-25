import { createSlice } from '@reduxjs/toolkit';

const bookList = [
	{
		name: 'Harry Potter 1',
		price: 12,
		category: 'fantasy',
		description: 'magic wizarding world',
	},
	{
		name: 'Harry Potter 2',
		price: 12,
		category: 'fantasy',
		description: 'magic wizarding world',
	},
	{
		name: 'Harry Potter 3',
		price: 12,
		category: 'fantasy',
		description: 'magic wizarding world',
	},
];

export const booksSlice = createSlice({
	name: 'books',
	initialState: {
		bookList,
	},
	reducers: {
		addBooks: (state, action) => {
			state.books.push(action.payload);
		},
	},
});

export const { addBooks } = booksSlice.actions;
export default booksSlice.reducer;
