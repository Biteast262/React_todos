import React from 'react';
import { RootState } from '../store';
import { connect } from 'react-redux';
import { Todo } from '../store/itemsIventory/types';

import { addTodoList, removeFromTodoList } from '../store/itemsIventory/action';
import { Grid, Header, Form, Segment, Button, List } from 'semantic-ui-react';

export interface TodoListProps {
    addTodoList: typeof addTodoList,
    removeFromTodoList: typeof removeFromTodoList,
    todos:Todo[]
};

export class Todoitems extends React.Component<TodoListProps>{
    findId = () => {
        return Math.floor(Math.random()*100000) + Math.floor(Math.random()*100000);
    }

    addtodo = (event: any) => {
        event.preventDefault();
        // Handle retrieval of form field value.
        const boxInput: HTMLInputElement | null = document.querySelector("[name='Todo-content']");
        let boxInputValue: string = '';
        if ( boxInput !== null ) 
            boxInputValue = boxInput.value;
        // Add new item to inventory.
        this.props.addTodoList({
            id: this.findId(),
            name:boxInputValue
        });
    }
    delete = (id: number) => {
        this.props.removeFromTodoList(id);
    };
    
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 450, marginTop: '50px' }}>
                    <Header as='h2' color='teal' textAlign='center'>
                    Todos
                    </Header>
                    <Form size='large' onSubmit={this.addtodo}>
                    <Segment stacked>
                    <Form.Input name='item-content' fluid iconPosition='left' placeholder='What need to do?' />
                    <Button color='teal' fluid size='large'>
                        Submit
                    </Button>
                    </Segment>
                    </Form>
                    <List celled animated size='big' verticalAlign='middle'>
                    {
                        this.props.todos.map((m, i) => (
                        <List.Item key={i}>
                            <List.Content floated='right'>
                                <Button onClick={event => {this.delete(m.id)}}>Delete</Button>
                            </List.Content>
                            <List.Content>
                                <List.Header>{m.name}</List.Header>
                            </List.Content>

                        </List.Item>
                        ))
                    }
                    </List>
                </Grid.Column>
            </Grid>
        );
    };
}


    // Retrieve "items" from our "global" redux state.
const mapStateToProps = ( state: RootState ) => {
  return {
    items: state.whatTodo.whatTodo
  }
}

// Connect Redux and React using our values and "view!"
export default connect(
  mapStateToProps,
  { addTodoList, removeFromTodoList }
)( Todoitems );