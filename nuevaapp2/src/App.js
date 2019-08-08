import React, { Component } from 'react';
import './App.css';

import tasks from '.\\Samples\\Tasks.json';
import Tasks from '.\\components\\Tasks';


console.log(Tasks);

class App extends Component {

  state = {

    tasks: tasks          //me quede el en el minuto 01:35 !


  }
  render() {
    return <div>
     <Tasks top={this.state.tasks}/>
    </div>


  }

}

export default App;
