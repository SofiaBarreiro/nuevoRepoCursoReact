import React, { Component} from 'react';
import Task from './Task';

class Tasks extends Component {

    render() {

        return this.props.top.map(task => <Task top1={task} key={task.id}/>);


    }

}


export default Tasks;