import React from 'react';
import Todo from'./Todo';
import './Todo.css'

const TodoList = props => {
    return (
        <div>
            <h2>List:</h2>
            {props.toDoList.map(item => (
            <Todo item={item} key={item.id} togglePurchased={props.togglePurchased}/> 
        ))}
        </div>
    )
}
export default TodoList;
