import React, { Component } from 'react';
import IndividualTask from './IndividualTask';

// This component renders the task list item view. It also performs a map
// function to send props to the IndividualTask component.

class TaskListItem extends Component {
    constructor(props) {
        super(props);
    };

    clickHandler(event){
        this.props.clickHandler(event);
    };

    render(){
        return (
            <div className='container-fluid col-lg-8'>
              <div className='panel panel-default'>
                <div className='panel-heading'>View To Dos</div>
                <ul className='list-group'>
                    {
                        Object.keys(this.props.currentState.todos).map(task => (
                        <IndividualTask clickHandler={this.clickHandler.bind(this)}
                        key={task}
                        text={task}
                        priority={this.props.currentState.todos[task][0]}
                        editWindow={this.props.currentState.todos[task][1]}
                        />   
                        ))
                    }
                </ul>
                </div>
            </div>
        ); 
    };
}
export default TaskListItem;



