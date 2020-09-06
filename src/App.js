import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [{
      id: 1,
      title: 'Meditate',
      complete: false
    },
    {
      id: 2,
      title: 'Workout',
      complete: false
    },
    {
      id: 3,
      title: 'Work',
      complete: false
    }
    ]
  }
  render(){
    return(
      <div className="App">
        <Todos/>
      </div>
    )
  }
}

export default App;
