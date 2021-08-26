import React , {Component} from 'react';
import './App.css';
import Todo from './Component/Todo';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list : []
    }
  }
  
  addTodo(value){
    var list = this.state.list;
    list.push(value);
    this.setState({list : list});
  }
//todo delete function
  deleteTodo(key){
    var list = this.state.list;
    var newList = list.splice(key,1);
    this.setState({list : list});
    console.log(list);
  }

  render() {
    return (
      <div className="App bg-body text-center container-fluid">
          <div className="card w-50 position-absolute top-50 start-50 translate-middle h-75" >
            <div className="card-header" >YOUR TODO LIST</div>
            <Todo addTodo={this.addTodo.bind(this)} lists = {this.state.list} deleteTodo ={this.deleteTodo.bind(this)} />
          </div>
      </div>
    );
  }
}


export default App;
