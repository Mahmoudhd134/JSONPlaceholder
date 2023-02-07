import Post from "./PostsState";
import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";

const initialState: Post[] =
    [
        {
            id: nanoid(),
            title: 'This is a test post',
            content: 'bal bla bla',
            reactions: {like: 120, haha: 2, angry: 5, love: 5630, wow: 56, sad: 1}
        }
    ]

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
        }
    }
})

export const {addPost, voteUp} = postsSlice.actions
export default postsSlice.reducer