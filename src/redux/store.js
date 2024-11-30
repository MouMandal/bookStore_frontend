import { configureStore } from '@reduxjs/toolkit'
import booksApi from './features/books/booksApi'
import ordersApi from './order/orderApi'

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware,ordersApi.middleware),
})