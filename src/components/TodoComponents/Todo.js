import React from 'react';

const Todo = props => {
    return(
        <div>
            style={props.todo.finshed ? {textDecoration: 'line=through'}: null}
            onClick={() => props.handleToggleFinished(props.todo.id)}
            {props.todo.task}
        </div>
    );
};

export default Todo;