import {TodoListActionTypes, add_todoList, remove_todoList, Todo} from './types';

export function addTodoList( whatTodo: Todo ): TodoListActionTypes {
    return {
        type: add_todoList,
        payload: whatTodo //will only accept type: whatTodo
    }
};

export function removeFromTodoList ( id: number ): TodoListActionTypes {
    return {
        type: remove_todoList,
        payload: id // will only accept type: number
    }
};