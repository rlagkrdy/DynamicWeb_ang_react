import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Layout } from './layout/layout/layout';
import './index.scss';
import { stores } from './model';

ReactDOM.render(
    <Provider store={createStore(stores)}>
        <Layout />
    </Provider>,
    document.getElementById('example')
);
