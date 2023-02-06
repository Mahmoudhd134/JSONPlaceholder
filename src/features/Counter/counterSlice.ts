import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CounterState from "./CounterState";

const initialState: CounterState = {
    count: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count += 1
        },

        decrement: state => {
            state.count -= 1
        },

        incrementBy: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }

    }
})

export const {increment, decrement,incrementBy} = counterSlice.actions
export default counterSlice.reducer