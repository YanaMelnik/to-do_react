import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { unArchiveTask, fetchArchiveTasks } from '../actions';

class Archive extends Component {
    componentDidMount() {
        this.props.fetchArchiveTasks();
    }

    getTask = id => {
        return this.props.tasks.find(task => task.id === Number(id));
    };

    renderTasks = tasks =>
        tasks.map(task => (
            <ListGroupItem key={task.id}>
                {task.title}
                <Button onClick={() => this.props.unArchiveTask(task)} id={task.id}>
                    Unarchive
                </Button>
            </ListGroupItem>
        ));

    render() {
        const { tasks } = this.props;
        return <ListGroup>{this.renderTasks(tasks)}</ListGroup>;
    }
}

const mapStateToProps = state => ({
    tasks: state.archive
});

const mapDispatchToProps = dispatch => ({
    fetchArchiveTasks: () => {
        dispatch(fetchArchiveTasks());
    },
    unArchiveTask: task => {
        dispatch(unArchiveTask(task));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Archive);
