import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { RecoilRoot, selector, atom, useRecoilState, useRecoilValue} from 'recoil'
import ToDoList from './feature/ToDoList';
import Login from './feature/Login'

function App() { 

  return (
    <RecoilRoot>
      <div className="App">
        <Router>
        <header>
          <nav>
            <Link to="/home" >Home</Link>
            <Link to="/" >TodoList</Link>
            <Link to="/login" >Login</Link> 
          </nav>
          <h1 className="p-4">Title</h1>
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
    </RecoilRoot>
  )
}

export default App
