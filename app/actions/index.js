/**
 * Created by Darkstar on 12/2/2016.
 */

import * as api from '../fakeAPI';
import {xhrDashBoardClient} from '../xhrClient';
import {acountsURL} from '../config';

let nextTodoId = 0;
export function fetchApps() {

    console.log('inside fetchApp action creator');
    return function (dispatch) {
        xhrDashBoardClient.get('app')
            .then(response => {
                dispatch({
                    type: 'FETCH_APPS',
                    payload: response.data
                });
            })
            .catch(error => {
                console.log('inside fetch Apps error catch error: ');
                console.log(error);
                window.location = acountsURL;
            });

    };
}


export const addApp = (name) => {
    return {
        type: 'ADD_APP',
        payload: {
            _id: (nextTodoId++).toString(),
            name: name,
            planId: 1
        }
    };
};