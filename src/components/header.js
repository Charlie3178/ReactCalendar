import React from "react";

export default function Header(props) {
    return <div>
        <button onClick={() => props.handleChange("previous")}>Previous</button>
        <h1>{props.monthName}</h1>
        <button onClick={() => props.handleChange("next")}>Next</button>
    </div>
}