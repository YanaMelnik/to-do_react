import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions';
import TaskCard from '../task-card';

class TaskList extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    renderTask = tasks =>
        tasks
            .filter(task => {
                return (
                    task.title.includes(this.props.taskInfo) ||
                    task.description.includes(this.props.taskInfo)
                );
            })
            .map(task => <TaskCard key={task.id + task.status} task={task} />);

    render() {
        return <div className='row justify-content-center'>{this.renderTask(this.props.tasks)}</div>;
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
    getTasks: () => {
        dispatch(fetchTasks());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);
