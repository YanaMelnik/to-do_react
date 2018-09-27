import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { getTask, saveTask, changeValue } from '../actions';

class Edit extends Component {
    componentDidMount() {
        this.props.getTask();
    }

    handleChange = ({ target: { name, value } }) => {
        this.props.changeValue({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.saveTask(this.props.edit);
        setTimeout(() => { this.props.history.goBack(); }, 500);
    };

    render() {
        const { title, status, description } = this.props.edit;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl
                            type='text'
                            name='title'
                            value={title}
                            placeholder='Enter title'
                            onChange={this.handleChange}
                        />
                        <FormControl
                            type='text'
                            name='description'
                            value={description}
                            placeholder='Enter description'
                            onChange={this.handleChange}
                        />
                        <FormControl
                            type='text'
                            name='status'
                            value={status}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type='submit' bsStyle='primary' bsSize='large' block>
                        Save
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = store => ({ edit: store.edit });

const mapDispatchToProps = (dispatch, ownProps) => ({
    getTask: () => {
        dispatch(getTask(ownProps.match.params.taskID));
    },
    changeValue: (obj) => {
        dispatch(changeValue(obj));
    },
    saveTask: (task) => {
        dispatch(saveTask(task));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit);
