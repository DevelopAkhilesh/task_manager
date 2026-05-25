import {useEffect, useState} from 'react'
import TodoList from '../TodoList/TodoList'
import { v4 } from "uuid"
import "./Header.css"


const Header = () => {
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState(() => {
                            const savedTodos = localStorage.getItem("todos");
                            return savedTodos ? JSON.parse(savedTodos) : [];
                            });
    // save the data to the local storage
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])


    // function to save the todo

    function saveTodo (){
         if(input.trim()==="")return;
            console.log(v4())
         const newTodo = {
            id :v4(),
            task:input.trim(),
            completed:false
        }
        setTodos([...todos ,newTodo]);
        setInput("")
    }
// delete the todo function
    function deleteTodo(id){
        setTodos(todos.filter((todo)=>todo.id!==id));
    }
// update the todo function
    function updateTodo(id,newText){
        if(newText.trim()==="")return;

       setTodos( 
        todos.map(
            (todo)=>
             todo.id===id ? {...todo,task:newText.trim()}:todo
            )
        );
    }
   // function toggle complete task 
   function toggleTodo(id){
        setTodos(
            todos.map(
                (todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo
            )
        );
   } 
  return (
    <main className="task-shell">
      <section className="task-panel">
        <div className="task-hero">
          <p className="task-kicker">Daily workflow</p>
          <h1>Task Manager</h1>
          <p className="task-subtitle">Capture, edit, complete, and clear your tasks with a clean focus-first board.</p>
        </div>

        <div className="task-composer">
          <input
            className="task-input"
            type='text'
            placeholder='Enter your task'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=>e.key==="Enter" && saveTodo()}
          />
          <button className="task-submit" onClick={saveTodo}>Submit</button>
        </div>
{/* todo list components */}
      <TodoList
         todos={todos}
         deleteTodo={deleteTodo}
         updateTodo={updateTodo}
         toggleTodo={toggleTodo}
        />
      </section>
    </main>
  )
}

export default Header
