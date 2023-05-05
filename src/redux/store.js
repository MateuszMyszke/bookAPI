import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import booksReducer from './booksRedux';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  books: booksReducer
});


const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
