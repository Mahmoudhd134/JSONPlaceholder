import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Post from "../../DTOs/Posts/PostDto";
import EditPostDto from "../../DTOs/Posts/EditPostDto";
import axios from 'axios'
import PostsState from "./PostsState";
import CommentDto from "../../DTOs/Posts/CommentDto";

const initialState: PostsState = {
    posts: [],
    currentShowedNumber: 10
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get<{ userId: number, id: number, title: string, body: string }[]>
        ('https://jsonplaceholder.typicode.com/posts')
        return response.data
    } catch (e) {
        //@ts-ignore
        return e?.message
    }
})

export const fetchPostsById = createAsyncThunk('posts/fetchPostsById', async (id: number) => {
    try {
        const response = await axios.get<{ userId: number, id: number, title: string, body: string }>
        ('https://jsonplaceholder.typicode.com/posts/' + id)
        return response.data
    } catch (e) {
        //@ts-ignore
        return e?.message
    }
})

export const fetchComments = createAsyncThunk('posts/fetchComments', async (postId: number) => {
    try {
        const response = await axios.get<CommentDto[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        return {postId: postId, data: response.data}
    } catch (e) {
        console.error(e)
    }
})

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload)
        },
        voteUp: (state, action: PayloadAction<{ id: string, vote: string }>) => {
            const {id, vote} = action.payload
            const post = state.posts.find(p => p.id == id)!
            post.reactions[vote as keyof typeof post.reactions] += 1
        },
        edit: (state, action: PayloadAction<EditPostDto>) => {
            const post = state.posts.find(p => p.id == action.payload.id)!
            post.title = action.payload.title
            post.content = action.payload.content
        },
        increaseCurrentPostsShowedNumber: (state) => {
            state.currentShowedNumber += 10
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<{ userId: number, id: number, title: string, body: string }[]>) => {
                state.posts = action.payload.map<Post>(p => ({
                    id: p.id.toString(),
                    title: p.title,
                    content: p.body,
                    userId: p.userId,
                    reactions: {like: 0, haha: 0, angry: 0, love: 0, wow: 0, sad: 0},
                    comments: null
                }))
            })
            .addCase(fetchPostsById.fulfilled, (state, action: PayloadAction<{ userId: number, id: number, title: string, body: string }>) => {
                if(state.posts.find(p => p.id == action.payload.id.toString()))
                    return
                state.posts.push({
                    id: action.payload.id.toString(),
                    title: action.payload.title,
                    content: action.payload.body,
                    userId: action.payload.userId,
                    reactions: {like: 0, haha: 0, angry: 0, love: 0, wow: 0, sad: 0},
                    comments: null
                })
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<{ postId: number, data: CommentDto[] } | undefined>) => {
                state.posts.find(p => +p.id == action.payload?.postId)!.comments = action.payload?.data!
            })
    }
})

export const {addPost, voteUp, edit, increaseCurrentPostsShowedNumber} = postsSlice.actions
export default postsSlice.reducer