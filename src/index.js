import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store/createStore'

// Create a store
const store = createStore()

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
