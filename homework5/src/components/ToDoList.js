import React, { Component } from 'react';
import '../css/ToDoList.css';

class ToDoList extends Component {
  render() {
      let todoItems;
      console.log(this.props.todos);
      if(this.props.todos.length>0){
        todoItems = this.props.todos.map((todoitm, index) =>{  
          let string = JSON.stringify(todoitm);
          console.log(JSON.parse(string).trueAnswer);  
          return (
            
              <li  key={todoitm+"_"+index}>პასუხები N{index+1} ტესტისთვის: სწორი პასუხი: <span style={{fontSize: "18px", color: "green"}}>{JSON.parse(string).trueAnswer}</span>, არასწორი პასუხი: <span style={{fontSize: "18px", color: "red"}}>{JSON.parse(string).falseAnswer}</span>
              <br/> 
              ________________შედეგი პროცენტულად: <span style={{fontSize: "20px", color:"blue"}}>{(JSON.parse(string).trueAnswer)/10*100}%</span></li>
            );
        });
        return (
          <div className="todoList">
            <ul>
              {todoItems}
            </ul>
          </div>
        )
      }
      else{
        return (
          <h2> ჯერ შეავსე კითხვარიიი </h2>
        )
      }
  }
}
export default ToDoList;
