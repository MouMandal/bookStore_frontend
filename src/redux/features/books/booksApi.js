import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getbaseUrl from '../../../utils/baseUrl'


const baseQuery = fetchBaseQuery({
    baseUrl: `${getbaseUrl()}/api/books`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            Headers.set('Authorization', `Bearer ${token}`)
        }
        return Headers;
    }
})
const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['Books'],

    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => "/",
            providesTags: ["Books"],
        }),

        fetchBookId: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Books", id }],
        }),

        addBook: builder.mutation({
            query: (newBook) => ({
                url: "/create-book",
                method: "POST",
                body: newBook,
            }),
            invalidatesTags: ["Books"]
        }),

        updateBook: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/update/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json',
                }
            }),
            invalidatesTags: ["Books"]
        }),

        deleteBook: builder.mutation({
            query: ( id ) => ({
                url: `/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"]
        })
    }),
})


export const { useFetchAllBooksQuery, useFetchBookIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } = booksApi
export default booksApi;