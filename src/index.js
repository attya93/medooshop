import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


import shopReducer from './store/shopReducer/shopReducer';
import orderReducer from './store/orderReducer/orderReducer';

const rootReducer = combineReducers({
  prod: shopReducer,
  order: orderReducer
})

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
  ;

ReactDOM.render(
  app,
  document.getElementById('root')
);


