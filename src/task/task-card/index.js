import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { removeTask, archiveTask, completeTask } from '../../actions';
import './task-card.css';

class TaskCard extends Component {
    completeTask = () => {
        this.props.completeTask();
    };

    removeTask = () => {
        this.props.removeTask();
    };

    archiveTask = () => {
        this.props.archiveTask();
    };

    render() {
        const { title, description, status, id } = this.props.task;
        return (
            <div className='col-md-10'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{description}</p>
                        <p>
                            <span>Status:</span> {status}
                        </p>
                        <div className='row justify-content-center'>
                            <Button
                                className='col-md-2 m-1'
                                bsStyle='success'

                                onClick={this.completeTask}>
                                Done
                            </Button>
                            <Button
                                className='col-md-2 m-1'
                                bsStyle='danger'

                                onClick={this.removeTask}>
                                Delete
                            </Button>
                            <Button
                                className='col-md-2 m-1'
                                bsStyle='success'

                                onClick={this.archiveTask}>
                                Archive
                            </Button>
                            <Link
                                className='col-md-2 px-0 m-1'
                                to={`/edit/${id}`}>
                                <Button
                                    className='col-md-12 px-0'
                                    bsStyle='success'
                                    >
                                    Edit
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeTask: () => {
        dispatch(removeTask(ownProps.task));
    },
    completeTask: () => {
        dispatch(completeTask(ownProps.task));
    },
    archiveTask: () => {
        dispatch(archiveTask(ownProps.task));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(TaskCard);
