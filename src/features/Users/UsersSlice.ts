import {User} from "../../DTOs/UserDtos/User";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

const initialState: User[] = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    } catch (e) {
        console.error(e)
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[] | undefined>) => {
                if(state.length != 0)
                    return
                action.payload?.forEach(u => state.push(u))
            })
    }
})
export default usersSlice.reducer
