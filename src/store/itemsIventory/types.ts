export interface Todo {
    id: number,
    name: string
}

export interface TodoState {
    whatTodo: Todo[]
}
// Action "names" or types
export const add_todoList = "add_todoList";
export const remove_todoList = "remove_item_inventoryList";

//Action requirements.
interface AddTodoList{
    type: typeof add_todoList,
    payload: Todo
}

interface Remove_todoList {
    type: typeof remove_todoList,
    payload: number 
}

export type TodoListActionTypes = AddTodoList|Remove_todoList;