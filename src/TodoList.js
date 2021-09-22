import React, { Component } from 'react';
import './TodoList.css'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggle(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({ todos: updatedTodos })
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo completed={todo.completed} updateTodo={this.update} removeTodo={this.remove}
                toggleTodo={this.toggle} key={todo.id} id={todo.id} task={todo.task} />
        })
        return (
            <div className='TodoList'>
                <h1>
                    Todo List<span>A Simple React Todo List</span>
                </h1>
                <ul>{todos}</ul>
                < NewTodoForm createTodo={this.create} />
            </div>

        )
    }


}




export default TodoList;