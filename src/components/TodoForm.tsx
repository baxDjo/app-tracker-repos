import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch } from "../App/hooks";
import { addTodo } from "../features/todosSlice";

function TodoForm() {

  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleTodoForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value) return;                 // évite alert, UX plus douce
    dispatch(addTodo(value));
    setInputValue("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (

    <form className="text-center mb-3" action="" onSubmit={handleTodoForm}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={inputValue}
        onChange={onChange}
        aria-label="Nouvelle tâche"
        className="input input-bordered mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button className="bg-white text-black font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-100" >Ajouter </button>
    </form>

  )

}

export default TodoForm;