import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:99
}
export const AddSubSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament: (state) =>{
            state.value += 1
        },
        decreament: (state) =>{
            state.value -= 1
        },
        reset:(state)=>{
            state.value=99
        }
    }
    
})

export const {increament, decreament, reset} = AddSubSlice.actions


export default AddSubSlice.reducer