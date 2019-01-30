import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import uuid from 'uuid';

import './App.css';

class App extends Component {
  //define state
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with family',
        completed: true
      },
      {
        id: uuid.v4(),
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

  /**
   * add todo
   */
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  //render component
  /**
   * 
   * React Fragment returns elements
   * 
   * Todos:
   * imbed component
     pass todos state to Todos comp as a prop
     set markComplete prop to call markComplete function
   */
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              < React.Fragment >
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
