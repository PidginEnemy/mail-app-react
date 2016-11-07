import { START, SUCCESS, FAIL } from '../constants';

export default store => next => action => {
    const { url, type, ...params } = action;
    if(!url) return next(action);

    next({ ...params, type: type + START });

    setTimeout(() => {  // TODO imitation of delay (only in dev)
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(response => next({...params, type: type + SUCCESS, response}))
            .then(error => next({...params, type: type + FAIL, error: error.message}));
    }, 1000);
}