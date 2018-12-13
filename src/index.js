import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

import store from './Containers/store/ToDoStore';

ReactDOM.render(<App store={store} />, document.getElementById('root'));

serviceWorker.unregister();
