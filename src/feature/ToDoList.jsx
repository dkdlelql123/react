import { useState } from "react"

const ToDoForm = ({newToDoTitle, setNewToDoTitle,btnAddToDoList}) => {
  return <div id="toDoListForm" >
  <input 
    type="text"
    placeholder="할일을 작성해주세요"
    value={newToDoTitle}
    onChange={ (e)=> setNewToDoTitle(e.target.value) }
  /> 
  <button onClick={btnAddToDoList} >할일추가</button>
</div>
}

const ToDoLists = ({todos, btnDeleteToDoList, btnchangeToDoList}) => {
  return <div id="toDoList">
  <ul>
  {
    todos.map( todo => <ToDoItem 
      key={todo.id} 
      todo={todo} 
      btnDeleteToDoList={btnDeleteToDoList}
      btnchangeToDoList={btnchangeToDoList}
      /> )
  }
  </ul>
</div>
}

const ToDoItem = ({todo, btnDeleteToDoList, btnchangeToDoList}) => {
  const [title, setTitle] = useState(todo.title);
  const [editMode, setEditMode] = useState(false);

  const btnEditModeChangeClicked = () => {
    setEditMode(false);
    btnchangeToDoList(todo.id, title);
  }

  const btnEditModeCancleClicked = () => {
    setEditMode(false);
    setTitle(todo.title)
  }

  return <li>
  <span>{todo.id}. </span>
  {editMode == false ? (
    <>
      <strong>{todo.title}</strong>
      <button onClick={ () => setEditMode(true) }>수정</button>
    </>
  ) : (
    <>
      <input 
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value) }
        />
      <button onClick={ btnEditModeChangeClicked } >수정완료</button>
      <button onClick={ btnEditModeCancleClicked } >수정취소</button>
    </>
  ) }

  <button onClick={ () => btnDeleteToDoList(todo.id) }>삭제</button>
</li> 
}

const ToDoList = () => { 
  console.clear();
  const [newToDoTitle, setNewToDoTitle] = useState();
  const [lastTodoId, setLastTodoId]  = useState(0);
  const [todos, setTodos] = useState([
    {
      id:0,
      title:'알라랄라라라'
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

  const btnchangeToDoList = (changeIdx, newText) =>{
    const newTodo = {
      id: changeIdx,
      title: newText      
    }

    setTodos( todos.map((el, i) => i == changeIdx ? newTodo : el ) )
    // setLastTodoId(lastTodoId - 1);
  }

  const btnDeleteToDoList = (deleteIdx) =>{
    setTodos( todos.filter((el, i) => i != deleteIdx ) )
    // setLastTodoId(lastTodoId - 1);
  }

  return <>
    {todos.length === 0 && <h3>할일을 작성해주세요.</h3>}
    
    <ToDoForm 
      newToDoTitle={newToDoTitle} 
      setNewToDoTitle={setNewToDoTitle}
      btnAddToDoList={btnAddToDoList}
    />

    <ToDoLists 
      todos={todos}
      btnchangeToDoList={btnchangeToDoList}
      btnDeleteToDoList={btnDeleteToDoList}
    />
  </>
}

export default ToDoList ;