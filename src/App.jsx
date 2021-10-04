import { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import ToDoList from './feature/ToDoList'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/todolist" >ToDoList</Link>
        </nav>
      </header>
      
      <body>
        <Switch>
          <Route path="/" exact >Main 화면입니다.</Route>
          <Route path="/todolist" component={ToDoList} />
        </Switch>
      </body>
      </BrowserRouter>
    </div>
  )
}

export default App
