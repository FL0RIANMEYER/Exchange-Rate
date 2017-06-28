import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';

import store from '../store';

import { setUser }   from '../actions/user';
import transformUser from '../transformer/user';

import NavigationComponent from '../components/navigation/navigation.jsx';
import NavigationContainer from '../container/navigation/navigation.jsx';
import Home from './home.jsx';


const Navigation = NavigationContainer(NavigationComponent);

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Home />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// Check if cookie was set on initial request to transfer JWT user Auth after mail singup redirection
const match = document.cookie.match(new RegExp('Authorization' + '=([^;]+)'));
if(match) {
    try {
        store.dispatch(setUser(transformUser(match[1])));
        document.cookie = 'Authorization=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } catch (e) { /**/ }

    // Remove validation token from query url after recieving session token from server
    window.history.replaceState( {}, '', '/');
}
