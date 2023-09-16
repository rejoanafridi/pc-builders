import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "",
	}),
	endpoints: (builder) => ({
		getBooks: builder.query({
			query: () => "/books",
			keepUnusedDataFor: 300,
			providesTags: ["books"],
		}),
		getBook: builder.query({
			query: (bookId) => `/books/${bookId}`,

			providesTags: (result, error, arg) => ["book", { type: "book", id: arg }],
		}),
		addBook: builder.mutation({
			query: (data) => ({
				url: "/books",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["books"],
		}),
		editBook: builder.mutation({
			query: ({ id, data }) => ({
				url: `/books/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: (result, error, arg) => [
				"books",
				{
					type: "book",
					id: arg.id,
				},
			],
		}),
		deleteBook: builder.mutation({
			query: (id) => ({
				url: `/books/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["books"],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useAddBookMutation,
	useGetBookQuery,
	useEditBookMutation,
	useDeleteBookMutation,
} = apiSlice;