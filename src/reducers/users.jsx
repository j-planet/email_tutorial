/**
 * Created by jj on 1/19/16.
 */

import { FETCH_USERS } from '../actions/types.jsx';


const _INITIAL_STATE = [];


export default function(myState=_INITIAL_STATE, action)
{
    console.log('Reducer (users) received an action: ', action);

    switch (action.type)
    {
        case FETCH_USERS:   // a list of users
            return [...myState, ...action.payload.data ];
        default:
            return myState;
    }

}