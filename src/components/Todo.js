import React from 'react';
import './Todo.css'

const Todo = props => {
    return (
    <div onClick={() => props.togglePurchased(props.item.id)} className={`item${props.item.completed ? 'completed' : ''}`}>
        <h2>{props.item.task}</h2>
    </div>)
}

export default Todo;
