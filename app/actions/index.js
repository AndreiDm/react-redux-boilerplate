import * as TYPES from './types';

export function actionType(data) {
    return {
        type: TYPES.ACTIONS_TYPE,
        payload: data
    };
}
