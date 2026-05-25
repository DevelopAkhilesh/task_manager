import TodoItem from '../TodoItem/TodoItem'
import "./TodoList.css"
const TodoList = ({todos,updateTodo,deleteTodo,toggleTodo}) => {
    

  return (
    <>
    <ul className="todo-list" aria-label="Tasks">
        {/* // maping the todo and pass them as prop to todoitem component */}
        {
          todos.map((todo)=>
          <TodoItem
            key = {todo.id}
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
