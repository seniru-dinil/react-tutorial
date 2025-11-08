import { useEffect, useState } from "react";
import { useTodoContext } from "../contexts/TodoContextProvider";

const TodoForm = () => {
  const { addTodo ,selectedTodo ,editTodo ,setTodo} = useTodoContext();
  const [input, setInput] = useState<string>('');
  const [action,setAction] = useState<'add' | 'edit'>('add');
  

  useEffect(()=>{
      if(selectedTodo){
        setAction('edit');
        setInput(selectedTodo.ct);
      }else{
        setInput('');
        setAction('add');
      }
  },[selectedTodo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();    
    if (input.trim() === "") {
      return;
    }

    if(action === 'add'){
    addTodo({ id: new Date().toISOString(), ct: input.trim(), done: false });
    setInput("");
    }else if(action === 'edit' && selectedTodo){
      editTodo({
        id:selectedTodo.id,
        done:selectedTodo.done,
        ct:input
      });
      setTodo(undefined);
    }
    
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo Application</h1>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo..."
        />
        <button 
          type="submit" 
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors capitalize"
        >
          {action}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
