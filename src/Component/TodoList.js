import React from 'react';

class TodoList extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.check = this.check.bind(this);
    }
    
    deleteTodo(){
        this.props.deleteTodo(this.props.index);
    }

    check(){
        console.log("clicked");
        var valueId = document.querySelector(`#value${this.props.index}`);
        valueId.classList.toggle("text-decoration-line-through");
    }

    render() {
        var ID = "value"+this.props.index;
        return (
            <li className="list-group-item list-group-item-primary uniqueLi" >
                <div className="input-group">
                    <div className="input-group-text col-auto">
                        <input className="form-check-input mt-0 checkbox" type="checkbox" onClick={this.check} />
                    </div>
                    <h4 className="col m-auto valueClass" id={ID} >{this.props.value}</h4>
                    <button type="button" className="btn btn-danger col-auto m-auto" onClick={this.deleteTodo}>Delete</button> 
                </div>
            </li>
        );
    }
}

export default TodoList;