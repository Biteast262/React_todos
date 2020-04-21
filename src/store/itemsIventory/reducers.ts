import {TodoState, TodoListActionTypes, add_todoList, remove_todoList, Todo} from './types';

//set initial state of app
const defaultstate: TodoState = {
    whatTodo:[
    { id: 0, name: 'Drink' }, { id: 1, name:'eat' }, {id:2, name:'code' }
    , { id: 3, name: 'bath' }, { id: 4, name: 'sleep' }
    ]
};

//Set up reducer/functionality!
export function TodolistReducer (state = defaultstate, action: TodoListActionTypes ){
    switch ( action.type ) {
        case add_todoList:
            return{
                ...state,
                //Add one new item onto the end of our array!
                whatTodo:[...state.whatTodo, action.payload]
            };
        case remove_todoList:
            return{
                ...state,
                //Filter through, and return the array WithOut the matching ID.
                whatTodo: state.whatTodo.filter( 
                    function(Todo){
                        return Todo.id !== action.payload
                    }
                )
            };
        default:
            return state;
    }
}