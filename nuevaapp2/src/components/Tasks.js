import React, { Component} from 'react';
import Task from './Task';

class Tasks extends Component {

    render() {

        return this.props.top.map(task => <Task top1={task}/>);


    }

}


export default Tasks;