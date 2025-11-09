import { TodoForm, TodoList } from "./components";
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
