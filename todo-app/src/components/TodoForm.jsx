import React from 'react'
import {useState, useEffect} from 'react'

const TodoForm = ({setTodos, todos}) => {
    const [todoValue, setTodoValue] = useState('')

    const handleSubmit = (e) =>{
        setTodos([...todos, todoValue])
    }
  return (
    <form action='' id='todo-form'>
        <input type='text' id='form-input' placeholder='Please Enter Your ToDo'
            onChange={(e) => setTodoValue(e.target.value)} value={todoValue}>
        </input>
        <button onClick={(e) =>{
            e.preventDefault();
            handleSubmit();
            setTodoValue('')
        }}>
            <i className="fa-solid fa-plus"></i>
        </button>
    </form>
  )
}

export default TodoForm