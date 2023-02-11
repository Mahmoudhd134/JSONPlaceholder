import {User} from "../../DTOs/UserDtos/User";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import UserTodoDto from "../../DTOs/UserDtos/UserTodoDto";

const initialState: User[] = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    } catch (e) {
        console.error(e)
    }
})

export const fetchTodos = createAsyncThunk('users/fetchTodos', async (userId: number) => {
    try {
        const response = await axios.get<UserTodoDto[]>(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        return {userId, data: response.data}
    } catch (e) {
        console.error(e)
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        todoComplete: (state, action: PayloadAction<{ userId: number, todoId: number }>) => {
            const {userId, todoId} = action.payload
            const user = state[userId - 1]
            const todo = user.todos.find(t => t.id == todoId)!
            todo.completed = !todo.completed
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[] | undefined>) => {
                if (state.length != 0)
                    return
                action.payload?.forEach(u => state.push(u))
            })
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<{ userId: number, data: UserTodoDto[] } | undefined>) => {
                const {userId, data: todos} = action.payload!
                state.find(u => u.id == userId)!.todos = todos
            })
    }
})
export const {todoComplete} = usersSlice.actions
export default usersSlice.reducer
