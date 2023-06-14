import React from "react"
import pic from '../profile_pic.png'

const Author = () => {
    return (
        <nav className="author--main-container">
            <div className="author--text">
                <p>
                    My name is Marcos. I am an aspiring front-end
                    developer. This is one of my first applications.
                    I hope you can make use of it.
                </p>
            </div>
            <div className="author--img">
                <img
                    className="author--img-image"
                    src={pic}
                    alt="Marcos.Verdi"></img>
            </div>
        </nav>
    )
}

export default Author 