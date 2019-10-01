import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todos: [
        {
          task: 'Earn Money',
          id:1,
          finished: false
        },
        {
          task: 'Do work for money',
          id: 2,
          finished: false
        }
      ],
      todo:''
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {task: this.state.todo, finished: false, id: Date.now()};
    this.setState({
      todos:[...this.state.todos, newTodo],
      todo:''
    })
  };

  changeTodo = e => this.setState({[e.target.name]: e.target.value});

  toggleTodoFinished = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.finished = !todo.finished;
        return todo;
          }else{
        return todo;
      }
    })
    this.setState({todos})
  };

  clearFinishedTodos = e =>{
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.finished);
    this.setState({todos})
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList
          handleToggleFinished={this.toggleTodoFinished}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearFinishedTodos}
        />
      </div>
    );
  }
}

export default App;
