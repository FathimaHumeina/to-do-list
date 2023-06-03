import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { NewTodoForm } from './Components/NewTodoForm';
import { TodoList } from './Components/TodoList';

function App() {


  const [todos,setTodos] = useState([]);
  
  function addTodo(title){
    setTodos((currentTodos)=>{
      return[
        ...currentTodos,{id:crypto.randomUUID(),title,completed:false}
      ]})
  }


  function toggleTodo(id,completed){
    setTodos(currentTodos=>{return currentTodos.map(todo=>{
      if(todo.id===id){
        return{...todo,completed}
      }
      return todo
    })})
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
    })
  }

  return (
    <div className="App">
     <NewTodoForm onSubmit={addTodo}/>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
