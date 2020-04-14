import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import genresReducer from './genres-reducer'
import booksReducer from './books-reducer'

let reducers = combineReducers({
    genres: genresReducer,
    books: booksReducer,
})

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store

export default store