import type React from "react";
import type { TypeTodo } from "../types/todo";
import { createContext, useContext, useState } from "react";

interface TodoContextProviderProps {
  children: React.ReactNode;
}

interface TodoContextTypes {
  todos: TypeTodo[];
  addTodo: (todo: TypeTodo) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextTypes>({
    //@ts-ignore
  addTodo: (todo) => {},
  //@ts-ignore
  deleteTodo: (id) => {},
  todos: [],
});

const TodoContextProvider: React.FC<TodoContextProviderProps> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TypeTodo[]>([]);

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo: TypeTodo) => {
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};



export const useTodoContext = () => {
    const todoContext = useContext(TodoContext);
    return todoContext;
}

export default TodoContextProvider;
