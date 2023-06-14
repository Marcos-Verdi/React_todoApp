import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodosList from './TodosList'
import Header from './Header';
import InputTodo from './InputToDo';
import Navbar from "./Navbar";
import About from "../pages/About";
import Author from "../pages/Author";
import NotMatch from "../pages/NotMatch";
import { v4 as uuidv4 } from "uuid";
import '../index.css'

const App = () => {

    const [todos, setTodos] = useState([])


    const handleChange = (id) => {
      setTodos(prevState => 
        prevState.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        })
      )
    };


    const delTodo = (id) => {
      setTodos([
          ...todos.filter(todo => {
            return todo.id !== id;
          })
        ])
    };


    const addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      };
      setTodos([...todos, newTodo]);
    };


    const setUpdate = (updatedTitle, id) => {
      setTodos({
        todo: todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo
        })
      })
    }


    useEffect( () => {
      const temp = localStorage.getItem("todos")
      const loadedTodos = JSON.parse(temp)

      if (loadedTodos) {
        setTodos(loadedTodos)
      }
    }, [])


    useEffect( () => {
      const temp = JSON.stringify(todos)
      localStorage.setItem("todos", temp)
    }, [todos])


    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={
              <div className="container">
                <div className="container--inner">
                  <Header />
                  <InputTodo addTodoProps={addTodoItem} />
                  <TodosList
                      todos={todos}
                      handleChangeProps={handleChange}
                      deleteTodoProps={delTodo}
                      setUpdate={setUpdate}/>
                </div>  
              </div>
            }>
            </Route>
            <Route exact path="/about">
              <Route index element={<About />} />
              <Route path="author" element={<Author />} />
            </Route>
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </BrowserRouter>
      </>
        );
}

export default App