import type React from "react";

import { createContext, useState } from "react";
import type { TypeTodo } from "../types";

interface TodoContextProviderProps {
  children: React.ReactNode;
}

interface TodoContextTypes {
  todos: TypeTodo[];
  selectedTodo:TypeTodo | undefined;
  addTodo: (todo: TypeTodo) => void;
  deleteTodo: (id: string) => void;
  editTodo: (todo:TypeTodo ) => void;
  setTodo: (todo:TypeTodo | undefined) => void;
}

const TodoContext = createContext<TodoContextTypes>({
    //@ts-ignore
  addTodo: (todo) => {},
  selectedTodo: undefined,
  //@ts-ignore
  deleteTodo: (id) => {},
  //@ts-ignore
  editTodo:(todo) => {},
  //@ts-ignore
  setTodo:(todo) => {},
  todos: [],
});

const TodoContextProvider: React.FC<TodoContextProviderProps> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TypeTodo[]>([]);
  const [selectedTodo,setSelectedTodo] = useState<TypeTodo | undefined>(undefined);

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo: TypeTodo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const editTodo = (todo:TypeTodo) => {        
    setTodos(prev => prev.map(t => t.id === todo.id ? (todo) : t));
  }

  const setTodo = (todo:TypeTodo | undefined) => {
        setSelectedTodo(todo);    
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        selectedTodo,
        setTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export {
  TodoContext
}

export default TodoContextProvider;
