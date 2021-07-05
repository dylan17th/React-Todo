import React from 'react';
import './todoForm.css'

class TodoForm extends React.Component {
    constructor(){
    super();
    this.state= { 
        item: ''
    }
}

inputChange = e => {
    this.setState({
        item: e.target.value
    })}

submitHandler = e => {
    e.preventDefault();
    this.props.addTask(this.state.item)
    this.setState({
      item: ''
    })
  }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input className='styled-input' name='todo' type='text' onChange={this.inputChange} value={this.state.item}/>
                    <button className="styled-button">Add Todo</button>
                    <button className="styled-button" onClick={this.props.clearCompleted}>Clear Completed Task</button> 
                </form>
            </div>
        )
    }
}
export default TodoForm;