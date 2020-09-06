import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'react-uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [{
      id: uuid(),
      title: 'Meditate',
      complete: false
    },
    {
      id: uuid(),
      title: 'Workout',
      complete: true
    },
    {
      id: uuid(),
      title: 'Go to work',
      complete: false
    }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
		this.setState({todos:this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
    }
  // Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
    return(
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    )
  }
}

export default App;
