import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {useState} from 'react'

function App() {
  const [todos,setTodos] = useState(['React', 'JavaScript'])

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id))
  }

  return (
    <>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
