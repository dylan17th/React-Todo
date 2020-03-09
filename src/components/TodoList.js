// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from'./Todo';


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
