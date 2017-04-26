import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import RouterComponent from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyA8lf0x0DbTlKtn8fgvGE4u865NrnlIP_A',
            authDomain: 'manager-6092d.firebaseapp.com',
            databaseURL: 'https://manager-6092d.firebaseio.com',
            projectId: 'manager-6092d',
            storageBucket: 'manager-6092d.appspot.com',
            messagingSenderId: '323868962358'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;
