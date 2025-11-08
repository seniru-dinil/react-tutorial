import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContextProvider";

const TodoForm = () => {
  const [input, setInput] = useState<string>("");
  const { addTodo } = useTodoContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (input.trim() === "") {
      return;
    }
    addTodo({ id: new Date().toISOString(), ct: input.trim(), done: false });
    setInput("");
  };

  return (
    <form onClick={handleSubmit}>
      <h1>todo application</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button type="submit">submit</button>
    </form>
  );
};

export default TodoForm;
