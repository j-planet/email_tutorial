/**
 * Created by jj on 3/31/16.
 */

export default function({ dispatch })
{
    return next => action =>
    {
        console.log('In async:', action);

        if (!action.payload || !action.payload.then)        // either the action doesn't exist or it's not a promise
        {
            return next(action);
        }

        // make sure the action's promise resolves
        action
            .payload
            .then(
                function(response)
                {
                    const newAction = {...action, payload: response};     // replace payload promise with the response
                    dispatch(newAction);        // send thru the top-most middleware AGAIN
                }
            );
    }
}