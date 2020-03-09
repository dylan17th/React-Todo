import React from 'react';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import './app.css';

const toDoList = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      toDoList: toDoList
    }
  }

    togglePurchased = itemId => {
      this.setState({
        toDoList: this.state.toDoList.map( item => {
          if(item.id === itemId){
            return {
              ...item, 
              completed: !item.completed
            }
          }else {
            return item;
          }
        })
      })
    }
    
    addTask = taskName => {
      const newTask = {
        task: taskName, 
        id: Date.now(),
        completed: false
      }
      this.setState({
        toDoList: [...this.state.toDoList, newTask]
      })
    }
    clearCompleted = ()=> {
      this.setState({
        toDoList: this.state.toDoList.filter(item => {
          if (item.completed === true ){
            return null;
  
          }else{
            return item;
          }
        })
      })
    }

  render() {
    return (
      <div className="container">
        <h1 className='header'>Welcome to The Todo App!</h1>
        <ToDoList toDoList={this.state.toDoList} togglePurchased={this.togglePurchased}/> 
        <TodoForm inputChange={this.inputChange} addTask={this.addTask} clearCompleted={this.clearCompleted}/> 
      </div>
    );
  }
}

export default App;
