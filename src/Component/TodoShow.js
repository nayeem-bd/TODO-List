import React ,{Component} from 'react';
import TodoList from './TodoList';

class TodoShow extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.showTodo = this.showTodo.bind(this);
    }
    
    makeLi(value,i){
        return <TodoList value={value} key={i} index={i} deleteTodo={this.props.deleteTodo} /> ;
    }

    showTodo(){
        var lists = this.props.lists;
        return lists.length!==0 ? lists.map((value,i) => this.makeLi(value,i)) : <li></li> ;
    }

    checkBox(){
        var uniqueLis = document.querySelectorAll(".uniqueLi");
        uniqueLis.forEach((uniqueLi) => {
            var checkbox = uniqueLi.childNodes[0].childNodes[0].childNodes[0];
            var valueClass = uniqueLi.childNodes[0].childNodes[1];
            console.log(valueClass);
            checkbox.addEventListener('change',(e) => {
                valueClass.classList.toggle("text-decoration-line-through");
            });
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.showTodo()}
            </ul>
        );
    }
}

export default TodoShow;