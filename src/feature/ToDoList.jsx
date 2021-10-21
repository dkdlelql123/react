import { useState } from "react"

const ToDoForm = ({newToDoTitle, setNewToDoTitle,btnAddToDoList}) => {
  return <div 
  id="toDoListForm" 
  className="flex items-center justify-center"
  >
  <input 
    type="text"
    placeholder="할일을 작성해주세요"
    value={newToDoTitle}
    onChange={ (e)=> setNewToDoTitle(e.target.value) }
    className="input input-md"
  /> 
  <button 
    onClick={btnAddToDoList} 
    className="btn btn-md ml-2 btn-primary"
  >할일추가</button>
</div>
}

const ToDoLists = ({todos, btnDeleteToDoList, btnchangeToDoList}) => {
  return <div id="toDoList">
  <ul className="flex flex-col items-center mt-8">
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

  const btnStyle="text-white border border-white rounded py-1 px-1 ml-2 text-sm hover:bg-white hover:text-black transition duration-400";

  return <li className="mb-2 w-4/12">
  <span className="text-white">{todo.id}. </span>
  {editMode == false ? (
    <>
      <strong className="text-white" >{todo.title}</strong>
      <button 
      onClick={ () => setEditMode(true) }
      className={btnStyle}
      >수정</button>
      <button
      onClick={ () => btnDeleteToDoList(todo.id) }
      className={btnStyle}
      >삭제</button>
    </>
  ) : (
    <>
      <input 
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value) }
        className="input input-sm"
        />
      <button 
      onClick={ btnEditModeChangeClicked }
      className={btnStyle}
       >수정완료</button>
      <button 
      onClick={ btnEditModeCancleClicked } 
      className={btnStyle}
      >수정취소</button>
    </>
  ) }
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