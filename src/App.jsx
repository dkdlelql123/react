import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ToDoList from './feature/ToDoList';
import Login from './feature/Login'
import Pokemon from './feature/pokemon/Pokemon'
import PokemonDetail from './feature/pokemon/PokemonDetail'

const App = () => {  
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-b from-purple-400 to-blue-400 ">
        <Router>
        <header className="navbar flex-col">
          <nav className="flex">
            <Link className="text-lg text-white mr-4 uppercase" to="/home" >Home</Link>
            <Link className="text-lg text-white mr-4 uppercase" to="/login" >Login</Link> 
            <Link className="text-lg text-white mr-4 uppercase" to="/todolist" >TodoList</Link>
            <Link className="text-lg text-white uppercase" to="/" >Pokemon</Link> 
          </nav> 
        </header>
        
        <div id="body">
          <Switch>
            <Route path="/home" exact >
              반갑습니다.
            </Route>
            <Route path="/login" component={Login} /> 
            <Route path="/todolist" component={ToDoList}/>
            <Route path="/pokemon/detail" component={PokemonDetail}/>
            <Route path="/" component={Pokemon}/>
          </Switch>
        </div>
        </Router>
      </div>
    </div>
  )
}

export default App
