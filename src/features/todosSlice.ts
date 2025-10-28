import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../App/store";


type Todo = { id: string; text: string; completed: boolean };
type TodosState = { items: Todo[]; filter: "all" | "active" | "done" };
const initialState: TodosState = { items: [], filter: "all" };

const todoSlice = createSlice({

    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.items.push({ id: crypto.randomUUID(), text: action.payload, completed: false });
            console.log("state in addTodo", state.items);
        },
        removeTodo(state, action: PayloadAction<string>) {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
            console.log("state items", state.items);
        },
        toggleTodo(state, action: PayloadAction<string>) {
            const id = action.payload;
            const todo = state.items.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        setFilter(state, action: PayloadAction<string>) {
            var filter = action.payload;

            if (filter === "all") {
                state.filter = "all";
            }
            else if (filter === "active") {
                state.filter = "active";
            }
            else {
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


const selectTodosState = (state: RootState) => state.todos;

export const selectItems = (state: RootState) => selectTodosState(state).items;
export const selectFilter = (state: RootState) => selectTodosState(state).filter;


export const selectVisibleTodos = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    if (filter === "active") return items.filter(t => !t.completed);
    if (filter === "done")   return items.filter(t =>  t.completed);
    return items; // "all"
  }
);

export default todoSlice.reducer;