import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    //render component
    render() {
        //get props from state in App.js
        //console.log(this.props.todos);
        //for each todos as todo, pass todo prop to TodoItem
        //set markComplete prop to markComplete prop in App.js
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
