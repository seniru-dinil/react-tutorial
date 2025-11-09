import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import AlertContextProvider from "./contexts/AlertContextProvider";
import TodoContextProvider from "./contexts/TodoContextProvider";

const App = () => {

  console.log('app')

  return (
    <AlertContextProvider>
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
    </AlertContextProvider>    
  );
};

export default App;
