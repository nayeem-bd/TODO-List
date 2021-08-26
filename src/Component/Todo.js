import React from 'react';
import TodoShow from './TodoShow';

class Todo extends React.Component {


    constructor(props) {
        super(props)
    
        this.state = {
             list : []
        }
        this.addTodo = this.addTodo.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
    }
    
    addTodo(value){
        this.props.addTodo(value);
    }

    submitTodo(event){
        event.preventDefault();
        this.addTodo(this.refs.newTodo.value);
        this.refs.newTodo.value = "";
    }

    render() {
        return (
            <div className="p-2">
                <form className="row g-2" onSubmit={this.submitTodo}>
                      <div className="col">
                            <input type="text" className="form-control" ref="newTodo" id="inputTodo" placeholder="Enter your TODO" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
                        </div>
                </form>
                <TodoShow lists = {this.props.lists} deleteTodo ={this.props.deleteTodo} />
            </div>
        );
    }
}

export default Todo;
