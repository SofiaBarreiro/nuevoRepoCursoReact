import React, { Component } from 'react';

class Tasks extends Component {

    render() {

        return <div>
            {this.props.top1.title} - {this.props.top1.description} - {this.props.top1.id} - {this.props.top1.done}
            < input type='checkbox' />
            <button>
                x
             </button>

        </div>
        //me quede el en el minuto 01:35 !

    }


}

export default Tasks;