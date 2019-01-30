import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//axios will mimic a http request
import axios from 'axios';
//import uuid from 'uuid';

import './App.css';

class App extends Component {
  //define state
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  /**
   * add todo
   */
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', { title: title, completed: false }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
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
