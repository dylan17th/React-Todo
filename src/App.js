import React from 'react';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

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
        id: new Date(),
        completed: false
      }
      this.setState({
        toDoList: [...this.state.toDoList, newTask]
      })
    }

  render() {
    return (
      <div>
        <h1>Welcome to The Todo App!</h1>
        <ToDoList toDoList={this.state.toDoList} togglePurchased={this.togglePurchased}/> 
        <TodoForm inputChange={this.inputChange} addTask={this.addTask}/> 
      </div>
    );
  }
}

export default App;
