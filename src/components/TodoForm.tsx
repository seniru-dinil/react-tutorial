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
    <form >
      <h1>todo application</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button type="submit" onClick={handleSubmit}>{action}</button>
    </form>
  );
};

export default TodoForm;
