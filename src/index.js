import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const totalClicksReducer = (state=0, action) => {
  console.log('in totalClicksReducer:', action);
  
  if(action.type === 'ADD_CLICK') {
    state = action.payload;
  }
  return state;
}

const store = createStore(
  combineReducers({
    totalClicksReducer
  })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
