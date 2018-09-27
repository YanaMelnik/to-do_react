import { GET_TASK_SUCCESS, CHANGE_TASK_FIELD } from '../actions';

const taskInitialState = {
    id: '',
    title: '',
    status: '',
    description: ''
};

export default function (state = taskInitialState, { type, payload }) {
    switch (type) {
        case GET_TASK_SUCCESS:
            return payload.data;

        case CHANGE_TASK_FIELD:
            return { ...state, ...payload };

        default:
            return state
    }
}
