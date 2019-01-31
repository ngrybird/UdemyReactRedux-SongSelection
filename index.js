import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from  'react-redux';


import App from  './Components/App';
import reducers from  './Reducers';

ReactDOM.render(
    <Provider store ={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
