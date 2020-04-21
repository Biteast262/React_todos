import {combineReducers, createStore } from 'redux';
import {TodolistReducer} from './itemsIventory/reducers';
import { type } from 'os';

//Combine all the reducers together for a global app.
const rootReducer = combineReducers({
    whatTodo:TodolistReducer
});

//"typeof" will grab the type that the "combineReducers" funtion returned.
export type RootState = ReturnType<typeof rootReducer>;

// Here is our redux store! It knows about our actions and reducers.
export default function configureStore() {
    const store = createStore( rootReducer );
    return store;
  }