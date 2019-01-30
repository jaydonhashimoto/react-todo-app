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

  /**
   * this method gets id form TodoItem.js
   * and matches the id with the current state id
   * 
   * if todo.id === id, toggle completed
   * @param id
   * @return todo
   */
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  /**
   * delete todo
   * 
   * filter loops through and returns another array
   * ... == spread operator, copies everything already there
   * for each todo, filter out any todo that doesnt equal given id
   * @param id
   */
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //render component
  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
        {/*imbed component
        pass todos state to Todos comp as a prop
        set markComplete prop to call markComplete function*/}
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
