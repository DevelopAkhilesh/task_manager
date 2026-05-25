import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
const TodoList = ({todos,updateTodo,deleteTodo,toggleTodo}) => {
    

  return (
    <>
    <ul>
        {
          todos.map((todo)=>
          <TodoItem
            key = {todo.key}
            todo = {todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            />)  
        }
    </ul>
     
    </>
  )
}

export default TodoList
