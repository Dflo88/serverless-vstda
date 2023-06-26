import React, { Component } from 'react';
import TaskListItem from './TaskListItem';

// This componenet controls the task viewing window on the right side of the the browser.
// If there are no task to display, the user will see a welcome message. Once a task is 
// entered to the system, then the display will render the TaskListItem.

class TaskView extends Component {
    constructor(props) {
        super(props);
    };

    clickHandler(event){
        this.props.clickHandler(event);
    };

    render(){
        if (Object.values(this.props.currentState.todos).length > 0 ) {
        return <TaskListItem currentState={this.props.currentState} clickHandler={this.clickHandler.bind(this)}/>;
        } 
        return (
            <div className='container-fluid col-lg-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>View To Dos</div>
                    <ul className='list-group'>
                    <li className='list-group-item list-group-item-info'>
                        <p><b>Welcome to the Very Simple To Do App</b></p>
                        <p>Get started now by adding a new to do item to the left.</p>
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default TaskView;