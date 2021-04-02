import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const pizzaMenu =( state=[], action )=>{
    console.log('in pizzaMenu reducer:', action );
    if(action.type === 'setPizzaMenu'){
        state =  action.payload ;
    }
    console.log(state);
    return state;
}

const currentOrder =( state=[], action )=>{
    console.log('in currentOrder reducer:', action );
    if(action.type === 'setCurrentOrder'){
        state =  [...action.payload] ;
    }
    console.log(state);
    return state;
}

const store = createStore(
    combineReducers({
    pizzaMenu: pizzaMenu,
    currentOrder: currentOrder
    }),
    applyMiddleware( logger )
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
