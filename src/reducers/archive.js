import { UNARCHIVE_TASK, FETCH_ARCHIVE_TASKS_SUCCESS, } from '../actions';

export default function (state = [], { type, payload }) {
    switch (type) {
        case FETCH_ARCHIVE_TASKS_SUCCESS:
            return [...payload.data];

        case UNARCHIVE_TASK:
            return [...state.filter(t => t.id !== payload.request.data.id)];

        default:
            return state;
    }
}
