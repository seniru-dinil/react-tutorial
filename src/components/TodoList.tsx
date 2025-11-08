import React from "react";
import Todo from "./Todo";
import { useTodoContext } from "../contexts/TodoContextProvider";



const TodoList = React.memo(() => {

    const {todos:todoList} = useTodoContext();
    
    return (
        <div>
            {todoList.length === 0 ? <p>empty todo list</p> : (
                todoList.map(todo => (
                  <Todo todo={todo} key={todo.id} />
                ))
            )}
        </div>
    )
})

export default TodoList;