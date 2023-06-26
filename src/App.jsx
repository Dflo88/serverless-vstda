import React, { Component } from 'react';
import TaskCreator from './TaskCreator';
import TaskView from './TaskView';



class App extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      'todos' : []
    }
  }

  // createNewTask exectues when the "create-to-do" button is pressed in the TaskCreator Component. 
  // This function will create a new task and save it as an object value in the 'todo' state key. All 
  // tasks will be saved as objects with the key being the task text and the value being an array 
  // with the task priority and a boolean indicating the task view (compressed=false and expananded=true).
  createNewTask(task,priority){
    const newTaskObject = {[task] : [priority,false]}
    const newStateValue = Object.assign({}, this.state.todos, newTaskObject);
    this.setState({'todos': newStateValue});
  }
  // The clickHandler function handles any action when you click a button in the TaskView component or 
  // any one of its subcomponents. The function works by receiving the button id (which is equal to the 
  // task text) and the button name which is unique to each button. Using the button name, the function
  // determines what action to take. Then using the button id and the current state, the function
  // executes code to modify the object key/ task text in state. 
  clickHandler(event){
    if (event.target.name == 'delete'){
      let updatedState = Object.assign({}, this.state['todos']);
      delete updatedState[event.target.id];
      this.setState({'todos' : updatedState});
    } else if (event.target.name == 'editWindow'){
        let stateChange = this.state.todos[event.target.id].slice(0,1);
        let updatedState = Object.assign({}, this.state['todos']);
        switch (this.state.todos[event.target.id][1]){
          case false:
            stateChange.push(true);
            updatedState[event.target.id] = stateChange;
            this.setState({'todos' : updatedState});
            break;
          case true:
            stateChange.push(false);
            updatedState[event.target.id] = stateChange;
            this.setState({'todos' : updatedState});
            break;
          default:
            break;
        };
    } else if (event.target.name == 'saveButton'){
        const taskTextEdit = document.getElementById('editTaskText').value;
        const taskPriorityEdit = document.getElementById('editTaskPriority').value;
        let updatedState = Object.assign({}, this.state['todos']);
        if (event.target.id == taskTextEdit){
          updatedState[event.target.id] = [taskPriorityEdit, false];
          this.setState({'todos' : updatedState});
        } else {
          delete updatedState[event.target.id];
          updatedState[taskTextEdit] = [taskPriorityEdit, false];
          this.setState({'todos' : updatedState});
        };
    };
  }

  render() {
    return (
      <div className='container'>
        <h1>Diego's Very Simple To Do App</h1>
        <hr/>
        <div className='container-fluid'>
          <div className='row'>
            <TaskCreator currentState={this.state} newTask={this.createNewTask.bind(this)}/>
            <TaskView currentState={this.state} clickHandler={this.clickHandler.bind(this)}/>
          </div>
        </div>
      </div>
    );
  };
}
export default App;
