import React from 'react'
import TodoItem from './TodoItem'
import '../index.css'

const TodosList = (props) => {

        return (
                <ul>
                    {props.todos.map(todo => {
                        return <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    handleChangeProps={props.handleChangeProps}
                                    deleteTodoProps={props.deleteTodoProps}
                                    setUpdate={props.setUpdate} /> 
                    })}
                </ul>
        )
    
};

export default TodosList