import type React from "react";
import type { TypeTodo } from "../types/todo";
import { createContext, useContext, useState } from "react";

interface TodoContextProviderProps {
  children: React.ReactNode;
}

interface TodoContextTypes {
  todos: TypeTodo[];
  selectedTodo:TypeTodo | undefined;
  addTodo: (todo: TypeTodo) => void;
  deleteTodo: (id: string) => void;
  editTodo: (todo:TypeTodo) => void;
}

const TodoContext = createContext<TodoContextTypes>({
    //@ts-ignore
  addTodo: (todo) => {},
  selectedTodo: undefined,
  //@ts-ignore
  deleteTodo: (id) => {},
  //@ts-ignore
  editTodo:(todo) => {},
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
        setSelectedTodo(todo);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        selectedTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};



export const useTodoContext = () => {
    const todoContext = useContext(TodoContext);
    if(!todoContext) console.log('todo context is undefined!');
    return todoContext;
}

export default TodoContextProvider;
