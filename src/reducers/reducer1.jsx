/**
 * Created by jj on 1/19/16.
 */

const _INITIAL_STATE = null;

export default function(myState=_INITIAL_STATE, action)
{
    console.log('Reducer (UserLoggedIn) received an action: ', action);

    switch (action.type)
    {
        default:
            return myState;
    }

}