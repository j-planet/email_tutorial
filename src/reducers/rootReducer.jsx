/**
 * Created by jj on 1/19/16.
 */

import { combineReducers } from 'redux';
import usersReducer from './users';

export default combineReducers({
    users: usersReducer
});