import React, { Component } from 'react';
import './App.css';
import tasks from '.\\Samples\\Tasks.json';


import Tasks from '.\\component\\Tasks';


console.log(Tasks);

class App extends Component {

  state = {

    tasks: tasks

  }
  render() {
    return <div>
      {

        this.state.tasks.map(e => <p key={e.id}>
          {e.title} - {e.description} - {e.id} - {e.done}

        </p>)

        // < Tasks Task= {this.state.tasks}/>
     }
    </div>


  }

}

export default App;
