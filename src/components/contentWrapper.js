import React from "react";


import CalendarWrapper from "./calendarWrapper";

export default function ContentWrapper(props) {
    return (
    <div>
        <CalendarWrapper month={props.month}/>
    </div>
    )
}