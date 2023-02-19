import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Quote {
    id: string,
    quote: string,
    author: string
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3500'}),
    tagTypes: ['quotes'],
    endpoints: (builder) => ({
        getTodos: builder.query<Quote[], void>({
            query: () => '/quotes',
            providesTags: (result = [], error, arg) =>
                result.map(({id}) => ({type: 'quotes', id}))
        }),
        getTodo: builder.query<Quote, string>({
            query: (id) => '/quotes/' + id,
            providesTags: (result, error, arg) => [{type: 'quotes', id: arg}]
        }),
        addQuote: builder.mutation<void, Quote>({
            query: (quote) => ({
                url: '/quotes',
                method: 'POST',
                body: quote,
            }),
            invalidatesTags: ['quotes']
        }),
        editQuote: builder.mutation<Quote, Quote>({
            query: (quote) => ({
                url: '/quotes/' + quote.id,
                method: 'PATCH',
                body: quote
            }),
            invalidatesTags: (result, error, arg) => [{type: 'quotes', id: arg.id}]
        })
    })
})

export const {useGetTodosQuery, useAddQuoteMutation, useGetTodoQuery, useEditQuoteMutation} = apiSlice