import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ToDoList from './feature/ToDoList';
import Login from './feature/Login'

const App = () => {  
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-b from-purple-400 to-blue-400 ">
        <Router>
        <header className="navbar flex-col">
          <nav className="flex">
            <Link className="text-lg text-white mr-4 uppercase" to="/home" >Home</Link>
            <Link className="text-lg text-white mr-4 uppercase" to="/" >TodoList</Link>
            <Link className="text-lg text-white uppercase" to="/login" >Login</Link> 
          </nav>
          {/* <h1  className="flex justify-center ">Title</h1> */}
        </header>
        
        <div id="body">
          <Switch>
            <Route path="/home" exact >
              반갑습니다.
            </Route>
            <Route path="/" component={ToDoList} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
        </Router>
      </div>
    </div>
  )
}

export default App
