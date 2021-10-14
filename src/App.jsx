import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { RecoilRoot, selector, atom, useRecoilState, useRecoilValue} from 'recoil'
import ToDoList from './feature/ToDoList';
import Login from './feature/Login'

function App() { 

  return (
    <RecoilRoot>
      <div className="App">
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-green-300">
          <Router>
          <header className="navbar flex-col">
            <nav className="flex">
              <Link to="/home" >Home</Link>
              <Link to="/" >TodoList</Link>
              <Link to="/login" >Login</Link> 
            </nav>
            <h1  className="flex justify-center ">Title</h1>
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
    </RecoilRoot>
  )
}

export default App
