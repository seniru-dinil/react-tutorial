import React from "react";
import Todo from "./Todo";
import { useTodoContext } from "../contexts/TodoContextProvider";



const TodoList = React.memo(() => {

    const {todos:todoList} = useTodoContext();

    console.log('todolist')
    
    return (
        <div className="max-w-md mx-auto mt-4 p-4">
            {todoList.length === 0 ? (
                <div className="text-center p-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg">No todos yet. Add one to get started!</p>
                </div>
            ) : (
                todoList.map(todo => (
                    <Todo todo={todo} key={todo.id} />
                ))
            )}
        </div>
    )
})

export default TodoList;