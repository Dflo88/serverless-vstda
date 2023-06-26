import React from 'react';

class TaskCreator extends React.Component {
    constructor(props) {
      super(props);
    }
    // the onClickHandler will send the user input data to the App component via
    // props when the 'add' button is clicked. The data will then be used in the
    // App component to add the new task to state.
    onClickHandler(){
      const taskText = document.getElementById('setTaskText').value;
      const taskPriority = document.getElementById('setTaskPriority').value;
      // The taskProperty variable will be used to set the task priority ([0] position) and current
      // state of the view window in the task editior ([1] postion). By default the property will
      // be created with a view window value of false. 
      if (Object.keys(this.props.currentState.todos).includes(taskText)){ 
        alert('It seems you already entered this task! Please enter a new task')
      } else if (taskText.length > 0) {
        this.props.newTask(taskText, taskPriority);
      } else {
        alert('Please enter some text to create this task!')
      };
      document.getElementById('setTaskText').value = '';
      document.getElementById('setTaskPriority').value = 1;
    }


    render() {
      return (
        <div className='container-fluid col-lg-4'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Add New To Do Item</div>
            <div className='panel-body'>
              <div className='form-group'>
                <label>I want to ...</label>
                <textarea id='setTaskText' className='form-control create-todo-text' rows='2'></textarea>
                <br/>
                <label>How much of a priority is this?</label>
                <select id='setTaskPriority' className='selectpicker form-control create-todo-priority'>
                  <option value='1'>Low Priority</option>
                  <option value='2'>Medium Priority</option>
                  <option value='3'>High Priority</option>
                </select>
              </div>
            </div>
            <div className='panel-footer'>
              <button type='button' className='btn btn-success btn-block create-todo' onClick={this.onClickHandler.bind(this)}>Add</button>
            </div>
          </div>
        </div>
      );
    }
  }
  export default TaskCreator

