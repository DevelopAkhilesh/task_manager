import React ,{useEffect, useState} from 'react'
import TodoList from '../TodoList/TodoList'
import { v4 } from "uuid"


const Header = () => {
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState(() => {
                            const savedTodos = localStorage.getItem("todos");
                            return savedTodos ? JSON.parse(savedTodos) : [];
                            });
    const [editId,setEditId] = useState(null);
    const [editText,setEditText] = useState(" ");

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
        if(text.trim()==="")return;

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
    <div>
        <h1>Task Manager</h1>

        <input type='text' placeholder='Enter your task' value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>e.key=="enter"&& saveTodo}/>
        <button onClick={saveTodo}>Submit</button>
      <TodoList
         todos={todos}
         deleteTodo={deleteTodo}
         updateTodo={updateTodo}
         toggleTodo={toggleTodo}
        />
    </div>
  )
}

export default Header
