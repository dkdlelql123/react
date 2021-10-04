import { useState } from "react"

const ToDoList = () => { 
  const [newToDoTitle, setNewToDoTitle] = useState();
  const [lastTodoId, setLastTodoId]  = useState(0);
  const [todos, setTodos] = useState([
    {
      id:0,
      title:'example'
    }
  ]);

  const btnAddToDoList = () => {
    console.log(newToDoTitle);
    const newTodo = {
      id: lastTodoId+1,
      title:newToDoTitle      
    }

    setTodos([...todos, newTodo]);
    setNewToDoTitle('');
    setLastTodoId(newTodo.id);
  }

  return <>
    {todos.length === 0 && <h3>할일을 작성해주세요.</h3>}
    
    <div id="toDoListForm" >
      <input 
        type="text"
        placeholder="할일을 작성해주세요"
        value={newToDoTitle}
        onChange={ (e)=> setNewToDoTitle(e.target.value) }
      /> 
      <button onClick={btnAddToDoList} >할일추가</button>
    </div>

    <div id="toDoList">
      <ul>
      {
        todos.map( todo => <li key={todo.id} >
          <span>{todo.id} </span>
          <strong>{todo.title}</strong>
        </li> )
      }
      </ul>
    </div>
  </>
}

export default ToDoList ;