import React from "react"
import { Link } from "react-router-dom"
import "../index.css"

const About = () => {
    return (
        <>
            <main className="about--container">
                <p>
                    This app is intended to be used as a simple
                    tool for users to keep track of progress of any
                    of your projects. 
                </p>
                <Link to="/about/author">About the author</Link>
            </main>
        </>
    )
}

export default About