import { AJAX_RESPONSE } from '../constants/action-types';


const xmlhttp = new XMLHttpRequest();


export default ({ dispatch }) => next => action => {
    if(!action.ajax) { next(action); return; }

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState != XMLHttpRequest.DONE ) { return; }
        // if (xmlhttp.status     != 200) { throw new Error(`${xmlhttp.status} ${xmlhttp.responseText}`); }

        let response;
        let header = {
            'X-RateLimit-Limit': xmlhttp.getResponseHeader('X-RateLimit-Limit'),
            'X-RateLimit-Remaining': xmlhttp.getResponseHeader('X-RateLimit-Remaining'),
        };

        try { response = JSON.parse(xmlhttp.responseText); }
        catch (e) { response = xmlhttp.responseText; }

        dispatch({
            type: AJAX_RESPONSE,
            requestType: action.type,
            response,
            header,
        });
    };

    xmlhttp.open(
        action.method || 'GET',
        '/' + action.path + (action.query ? '?' + action.query.join('&') : ''),
        true);
        console.log(action.token);
    if(action.token) { xmlhttp.setRequestHeader('Authorization', `Bearer ${action.token}`); }

    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(action.body ? JSON.stringify(action.body) : '');
};
