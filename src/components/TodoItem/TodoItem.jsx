import React, { useState } from 'react'

const TodoItem = ({ updateTodo,deleteTodo,toggleTodo,todo}) => {
    const [isEdit,setIsEdit]=useState(false);
    const [editText,setEditText]=useState("");

    function handleSave(){
        updateTodo(todo.id,editText);
        setIsEdit(false)
    }
    function handleCancel(){
        setEditText(todo.task)
       setIsEdit(false)
    }
  return (
    <>
    <li>
    { isEdit?(<div>
        <input type="text" value = {editText} onChange={(e)=>setEditText(e.target.value) } />
        <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
        </div>
    ):(<div>
        <input type='checkbox' checked={todo.completed} onChange={()=>toggleTodo(todo.id)}/>
        <span>{todo.task}</span>
        <div>
            <button onClick={()=>{setIsEdit(true),setEditText(todo.task)}}>Edit</button>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>

    </div>)
    }
    </li>
      
    </>
  )
}

export default TodoItem
