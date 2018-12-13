import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';

import store from './Containers/store/ToDoStore';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
