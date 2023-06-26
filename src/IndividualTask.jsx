import React, { Component } from 'react';
import TaskExpandedView from './TaskExpandedView'
import TaskCompressedView from './TaskCompressedView'

// This component contains the logic that decideds  how an individual task will be rendered. 
// It will either render a component in an expanded view or compressed view depending on the 
// value of this.props.priority. If the value is true then it will render an expanded view,
// otherwise it will render in a compressed view.

class IndividualTask extends Component {
    constructor(props) {
        super(props);
    };

    clickHandler(event){
        this.props.clickHandler(event);
    };

    render(){
        if (this.props.editWindow){
            return (
                <TaskExpandedView text={this.props.text} priority={this.props.priority} clickHandler={this.clickHandler.bind(this)}/>
            );
        } else {
            return (
                <TaskCompressedView text={this.props.text} priority={this.props.priority} clickHandler={this.clickHandler.bind(this)}/>
            );
        };
    };
}
export default IndividualTask