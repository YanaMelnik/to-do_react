import { combineReducers } from 'redux';

import edit from './edit';
import tasks from './tasks';
import archive from './archive';

export default combineReducers({
    edit,
    tasks,
    archive
});
