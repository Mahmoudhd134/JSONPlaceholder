import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Post from "../../DTOs/Posts/PostDto";
import EditPostDto from "../../DTOs/Posts/EditPostDto";
import axios from 'axios'

const initialState: Post[] = []

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    console.log('inside fetchPosts function')
    try {
        const response = await axios.get<{ userId: number, id: number, title: string, body: string }[]>
        ('https://jsonplaceholder.typicode.com/posts')
        return response.data
    } catch (e) {
        //@ts-ignore
        return e?.message
    }
})

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.push(action.payload)
        },
        voteUp: (state, action: PayloadAction<{ id: string, vote: string }>) => {
            const {id, vote} = action.payload
            const post = state.find(p => p.id == id)!
            post.reactions[vote as keyof typeof post.reactions] += 1
        },
        edit: (state, action: PayloadAction<EditPostDto>) => {
            const post = state.find(p => p.id == action.payload.id)!
            post.title = action.payload.title
            post.content = action.payload.content
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<{ userId: number, id: number, title: string, body: string }[]>) => {
                console.log('inside case fetchPosts.fulfilled function')
                if (state.length != 0)
                    return

                action.payload.map<Post>(p => ({
                    id: p.id.toString(),
                    title: p.title,
                    content: p.body,
                    userId: p.userId,
                    reactions: {like: 0, haha: 0, angry: 0, love: 0, wow: 0, sad: 0}
                })).forEach(p => state.push(p))
            })
    }
})

export const {addPost, voteUp, edit} = postsSlice.actions
export default postsSlice.reducer