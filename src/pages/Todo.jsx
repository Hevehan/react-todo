import React from "react";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './pages.css';

library.add(faTrash)

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          items:[],
          currentItem:{
            text:'',
            key:''
          }
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
      }
      addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !==""){
          const items = [...this.state.items, newItem];
        this.setState({
          items: items,
          currentItem:{
            text:'',
            key:''
          }
        })
        }
      }
      handleInput(e){
        this.setState({
          currentItem:{
            text: e.target.value,
            key: Date.now()
          }
        })
      }
      deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
          item.key!==key);
        this.setState({
          items: filteredItems
        })
    
      }
      setUpdate(text,key){
        console.log("items:"+this.state.items);
        const items = this.state.items;
        items.map(item=>{      
          if(item.key===key){
            console.log(item.key +"    "+key)
            item.text= text;
          }
        })
        this.setState({
          items: items
        })
        
    
    }
    render(){
        return (
        <div>
            <Link className="logout" to="/Login"> Logout</Link>
            <div className="Todo">
                <div className="todo-wrapper">
                    <h1>Todo App</h1>
                    <h2>Please enter your tasks below</h2>
                    <form className="form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
                        <button className="add"type="submit">+</button>
                    </form>
                    <p>{this.state.items.text}</p>
                    <TaskList items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
                </div>
            </div>
        </div>
        );
     }
    }

export default Todo;