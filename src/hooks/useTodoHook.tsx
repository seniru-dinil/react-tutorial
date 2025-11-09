import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";

const useTodo = () => {
    const todoContext = useContext(TodoContext);
    return todoContext;
}

export default useTodo;