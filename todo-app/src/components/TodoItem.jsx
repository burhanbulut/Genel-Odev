import React from 'react'

const TodoItem = ({todo, deleteTodo,id}) => {
  return (
    <div  className='todo-item'>
    <p>{todo}</p>
    <i className="fa-solid fa-trash-can" onClick={() =>{
        deleteTodo(id)
    }}></i>
</div>
  )
}

export default TodoItem