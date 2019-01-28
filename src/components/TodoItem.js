import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    //method will set style
    //if completed, set linethrough
    getStyle = () => {
        return {
            background: '$f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    render() {
        //get id and title from this.props.todo
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/*call markComplete prop from Todos.js */}
                    {/*bind will pass id up to Todos.js->App.js*/}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
