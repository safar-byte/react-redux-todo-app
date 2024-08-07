import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getTodoAsync =createAsyncThunk('todos/getTodosAsync',async()=>{
//     const resp = await fetch('http://localhost:7000/todos');
//     if(resp.ok){
//         const todos =await resp.json();
//         return {todos}
//     }
// })
export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },
        toggleComplete:(state,action)=>{
            const index = state.findIndex((todo)=>todo.id === action.payload.id)
            state[index].completed = action.payload.completed;
        },
        deleteTodo:(state,action)=>{
            return state.filter((todo) =>todo.id !== action.payload.id)
            
        }
    },
    // extraReducers:builder =>{
    //     builder.addCase(getTodoAsync.fulfilled,(state,action)=>{
    //         return action.payload.to
    //     });
    // }
});
export const { addTodo ,toggleComplete,deleteTodo} =todoSlice.actions;

export default todoSlice.reducer