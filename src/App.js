import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  //define state
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with family',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  //render component
  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
        {/*imbed component
        pass todos state to Todos comp as a prop*/}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
