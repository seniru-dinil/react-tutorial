import React from "react";
import type { TypeTodo } from "../types/todo";
import { useAlert, useTodo } from "../hooks";

interface TodoProps {
  todo: TypeTodo;  
}


const Todo: React.FC<TodoProps> = React.memo(({ todo}) => {
  
  const {deleteTodo,setTodo}  = useTodo();  
  const {showAlert} = useAlert();

  const handleDelete = (id:string) => {
      deleteTodo(id);
      showAlert({
        title:'todo deleted.',
        message:'Todo deleted success.'
      });
  }
  
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm mb-2 group hover:shadow-md transition-shadow">
      <input 
        type="checkbox" 
        readOnly 
        checked={todo.done}
        className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
      />
      <p className={`flex-1 text-gray-700 ${todo.done ? 'line-through text-gray-400' : ''}`}>
        {todo.ct}
      </p>
      <div className="flex gap-2">
        <button 
          onClick={() => setTodo(todo)}
          className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Edit
        </button>
        <button 
          onClick={() => handleDelete(todo.id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
});

export default Todo;
