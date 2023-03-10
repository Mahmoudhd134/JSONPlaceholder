import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice'
import postsReducer from "../features/Posts/postsSlice";
import usersReducer from '../features/Users/UsersSlice'
import albumsReducer from "../features/Albums/AlbumsSlice";
import {apiSlice} from "../features/Api/apiSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
        albums: albumsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

