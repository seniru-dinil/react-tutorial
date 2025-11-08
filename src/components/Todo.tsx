import React from "react";
import type { TypeTodo } from "../types/todo";
import { useTodoContext } from "../contexts/TodoContextProvider";

interface TodoProps {
  todo: TypeTodo;  
}


const style  = {
    display:'flex',
    alignItems:'center',
    gap:'0.5rem',
    width:'fit-content',
    height:'30px',
    marginBlockStart:'1rem'
}


const Todo: React.FC<TodoProps> = React.memo(({ todo}) => {

  const {deleteTodo,editTodo}  = useTodoContext();

  
  return (
    <div style={style}>
      <p>{todo.ct}</p>
      <input type="checkbox" readOnly checked={todo.done} />
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
      <button onClick={() => editTodo(todo)}>edit</button>
    </div>
  );
});

export default Todo;
