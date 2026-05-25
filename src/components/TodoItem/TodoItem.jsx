import { useState } from 'react'
import "./TodoItem.css"

const TodoItem = ({ updateTodo,deleteTodo,toggleTodo,todo}) => {
    const [isEdit,setIsEdit]=useState(false);
    const [editText,setEditText]=useState("");
    
    function handleSave(){
        updateTodo(todo.id,editText);
        setIsEdit(false)
    }
    // function to cancel the eidt text
    function handleCancel(){
        setEditText(todo.task)
       setIsEdit(false)
    }
  return (
    <>
    <li className={`todo-item ${todo.completed ? "todo-item--done" : ""}`}>
    { isEdit?(<div className="todo-edit">
        <input className="todo-edit-input" type="text" value = {editText} onChange={(e)=>setEditText(e.target.value) } />
        <div className="todo-actions">
            <button className="todo-btn todo-btn--save" onClick={handleSave}>Save</button>
            <button className="todo-btn todo-btn--ghost" onClick={handleCancel}>Cancel</button>
        </div>
        </div>
    ):(<div className="todo-view">
        <input className="todo-check" type='checkbox' checked={todo.completed} onChange={()=>toggleTodo(todo.id)}/>
        <span className="todo-text">{todo.task}</span>
        <div className="todo-actions">
            <button className="todo-btn todo-btn--edit" onClick={()=>{setIsEdit(true),setEditText(todo.task)}}>Edit</button>
            <button className="todo-btn todo-btn--delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>

    </div>)
    }
    </li>
      
    </>
  )
}

export default TodoItem
