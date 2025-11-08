import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContextProvider";

const App = () => {

  console.log('app')

  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>    
  );
};

export default App;
