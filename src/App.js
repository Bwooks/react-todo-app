import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class TodoApp extends React.Component{

  constructor(){
    super();
    this.state={
      items:[]
    }
  }

  updateItems(item){
    let newItems = this.state.items.slice()
    newItems.push(item)
    this.setState({items:newItems})
  }

  render(){
    return (
      <div>
      <TodoBanner/>
      <TodoList items={["one",'two']}/>
      <TodoForm/>
      </div>
      )
  }
}

const TodoBanner = () => {
  return (
    <div>
    <h1>Todo List</h1>
    </div>
    )
}

const TodoList = (props) => {
  console.log(props)
   return (
    <ul>{props.items.map((itemText)=>{
        return <TodoListItem>{itemText}</TodoListItem>
    })}</ul>
    )
}

const TodoListItem = () => {
  return (
    <li>{this.props.children}</li>
    )
}

class TodoForm extends React.Component {
  constructor(){
    super()
    this.state = ({
      item:''
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onFormSubmit(this.state.item)
    this.setState({item:''})
    ReactDOM.findNode(this.refs.item).focus()
  }

  onChange(e){
    this.setState({
      item:e.target.value
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
        <input type='submit' value='Add'/>
      </form>
      )
  }

}

export default TodoApp