import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
import '../index.css'

const InputTodo = (props) => {

    const [inputText, setInputText] = useState({
        title: "",
    })
    

    const onChange = (e) => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title);
            setInputText({
                title: ""
            })
        } else {
            alert("Please enter a task")
        }
    };

    
    return (
            <form onSubmit={handleSubmit} className="container--form">
                <input
                    type="text"
                    className="container--form-input"
                    placeholder="Add task to do..."
                    value={inputText.title}
                    name="title"
                    onChange={onChange}></input>
                <button className="container--form-submit">
                    <FaPlusCircle
                        style={{ height: "2.5em", width: "2.5em" }}/>
                </button>
            </form>
        )
    
}

export default InputTodo