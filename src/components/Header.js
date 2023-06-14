import React from 'react'
import '../index.css'

export default function Header() {
    return (
        <header
            style={{
                padding: "20px 0",
                lineheight: "1.5em",
            }}>
            <h1
                style={{
                    fontSize:"6rem",
                    fontWeight: "600",
                    marginBottom: "2rem",
                    lineHeight: "1em",
                    color: "#ececec",
                    textTransform: "lowercase",
                    textAlign: "center",
                }}
            >
                Todos
            </h1>
        </header>
    )
}