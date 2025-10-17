import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type Todo = { id: string; text: string; completed: boolean };
type TodosState = { items: Todo[]; filter: "all" | "active" | "done" };
const initialState: TodosState = { items: [], filter: "all" };

const todoSlice = createSlice({
     
    name : 'todoSlice',
    initialState,
    reducers: {
    addTodo(state, action: PayloadAction<string>) {
            state.items.push({ id: crypto.randomUUID(), text: action.payload, completed: false });
    },
    removeTodo(state, action: PayloadAction<string>){
        const itemId = action.payload;
        state.items.filter(item => item.id !== itemId);
    },
    toggleTodo(state, action: PayloadAction<number>){
        var currentTodo = state.items.at(action.payload)?.completed;
        currentTodo = !currentTodo;
    },

    setFilter(state, action: PayloadAction<string>){
        var filter = action.payload;
        if (filter == "all"){
            state.filter = "all";
        }
        else if(filter == "active"){
            state.filter = "active";
        }
        else{
            state.filter = "done";
        }
    }

    }

})

export const {
    addTodo,
    removeTodo,
    toggleTodo,
    setFilter,
} = todoSlice.actions;

export const selectSongs = (state: { todoSlice: TodosState }) => state.todoSlice.items;
export const selectFilteredSongs = (state: { todoSlice: TodosState }, filter: string) => { state.todoSlice.filter !== filter };

export default todoSlice.reducer;