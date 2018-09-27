import React, { Component } from 'react';
import TaskList from './task-list';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    render() {
        return (
            <div>
                <div className='input-group justify-content-center'>
                    <input
                        className='form-control col-md-10'
                        type='text'
                        placeholder='Enter task info'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <TaskList taskInfo={this.state.value} />
            </div>
        );
    }
}

export default Task;
