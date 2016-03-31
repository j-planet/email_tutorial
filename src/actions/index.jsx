import {
    FETCH_USERS
} from './types.jsx';


export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [
            { name: 'Jane' },
            { name: 'Alex' },
            { name: 'Jim' }
        ]
    };
}