import React, { useState } from "react"
import { FaTrash } from "react-icons/fa"
import '../index.css'
import styles from './TodoItem.module.css'

const TodoItem = (props) => {

    const [editing, setEditing] = useState(false);


    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through"
    };


    const { completed, id, title } = props.todo;


    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    const handleEditing = () => {
        setEditing(true)
    }

    
    const handleUpdateDone = (event) => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }


    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input 
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={ () => props.handleChangeProps(id)} />
                <button
                    className="trash--btn"
                    onClick={ () => props.deleteTodoProps(id)}>
                    <FaTrash
                        style={{ height: "1.25em", width: "1.25em" }}/>
                </button>
                <span style={props.todo.completed ? completedStyle : null }>
                    {title}
                </span>
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={ e => {props.setUpdate(e.target.value, id)}}
                onKeyDown={handleUpdateDone} />
        </li>
    )
}

export default TodoItem