import React, { Component } from 'react';
import ToDoList from './ToDoList';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReactTodo : []
    };
  }

  getLocalDbData(){
    let localDbName = 'results';
    if(window.localStorage.getItem(localDbName) && window.localStorage.getItem(localDbName)!== ''){
      return JSON.parse(localStorage[localDbName] || "[]")
      // return window.localStorage.getItem(localDbName).split(',');

    }
    else{
       window.localStorage.setItem(localDbName,'');
       return window.localStorage.getItem(localDbName);
    } 
  }

  setLocalDbData(data){
    let LocalDbData = (this.getLocalDbData()=== '')? [] :this.getLocalDbData();
    LocalDbData.push(data);
    console.log("Data " +data);
    console.log("LocalDb" + LocalDbData);
    window.localStorage.setItem('results',LocalDbData);
  }
  componentWillMount(){
    var LocalDbData = this.getLocalDbData();
    if(LocalDbData !== ''){
      this.setState({ReactTodo: LocalDbData});
    }

  }

  componentDidMount(){
    this.getLocalDbData();
  }


  render() {
    return (
        <ToDoList todos={this.state.ReactTodo}/>  
    );
  }
}

export default ToDo;
