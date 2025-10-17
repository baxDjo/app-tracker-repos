import { useAppDispatch, useAppSelector } from "../App/hooks";
import { PiTrashSimpleBold } from "react-icons/pi";
import { removeTodo } from "../features/todosSlice";


function TodoList() {
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todos.items);
    const handleDeleteTodo = (id: string) => {
        dispatch(removeTodo(id));
    }

    return (
        <>
            {["Vue JS", "React", "Angular"].map((tech) => {
                const id = `tech-${tech.replace(/\s+/g, "-").toLowerCase()}`;
                return (
                    <div key={id} className="flex items-center">
                        <input id={id} type="checkbox" className="checkbox" />
                        <label htmlFor={id} className="ms-2 text-sm font-medium">
                            {tech}

                        </label>
                        <div className="ms-4">
                            <PiTrashSimpleBold />
                        </div>
                    </div>
                );
            })}


        </>
    )
}

export default TodoList;