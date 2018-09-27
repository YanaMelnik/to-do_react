import { REMOVE_TASK, ARCHIVE_TASK, COMPLETE_TASK, FETCH_TASKS_SUCCESS, UNARCHIVE_TASK_SUCCESS } from '../actions';

export default function (state = [], { type, payload }) {
    switch (type) {
        case REMOVE_TASK:
            return [...state.filter(t => t.id !== payload.id)];

        case ARCHIVE_TASK:
            return [...state.filter(t => t.id !== payload.request.data.id)];

        case COMPLETE_TASK:
            state.find(task => task.id === payload.id).status = 'Done';
            return [...state];

        case FETCH_TASKS_SUCCESS:
            return [...payload.data];

        case UNARCHIVE_TASK_SUCCESS:
            return [...state, payload.data];
        default:
            return state;
    }
}
