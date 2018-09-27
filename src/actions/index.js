import { TASKS, ARCHIVE } from '../utils/urls';

export const GET_TASK = 'GET_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';
export const CHANGE_TASK_FIELD = 'CHANGE_TASK_FIELD';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';

export const ARCHIVE_TASK = 'ARCHIVE_TASK';
export const UNARCHIVE_TASK = 'UNARCHIVE_TASK';
export const FETCH_ARCHIVE_TASKS = 'FETCH_ARCHIVE_TASKS';
export const UNARCHIVE_TASK_SUCCESS = 'UNARCHIVE_TASK_SUCCESS';
export const FETCH_ARCHIVE_TASKS_SUCCESS = 'FETCH_ARCHIVE_TASKS_SUCCESS';

export const fetchTasks = () => ({
    type: FETCH_TASKS,
    payload: {
        request: {
            url: TASKS
        }
    }
});

export const removeTask = task => ({
    type: REMOVE_TASK,
    payload: task
});

export const completeTask = task => ({
    type: COMPLETE_TASK,
    payload: task
});

export const archiveTask = task => ({
    type: ARCHIVE_TASK,
    payload: {
        request: {
            method: 'POST',
            url: ARCHIVE,
            data: task
        }
    }
});

export const fetchArchiveTasks = () => ({
    type: FETCH_ARCHIVE_TASKS,
    payload: {
        request: {
            url: ARCHIVE
        }
    }
});

export const unArchiveTask = task => ({
    type: UNARCHIVE_TASK,
    payload: {
        request: {
            method: 'POST',
            url: TASKS,
            data: task
        }
    }
});

export const getTask = taskID => ({
    type: GET_TASK,
    payload: {
        request: {
            url: `${TASKS}/${taskID}`
        }
    }
});

export const changeValue = obj => ({
    type: CHANGE_TASK_FIELD,
    payload: obj
});

export const saveTask = task => ({
    type: SAVE_TASK,
    payload: {
        request: {
            method: 'PUT',
            url: `${TASKS}/${task.id}`,
            data: task
        }
    }
});
