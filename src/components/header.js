import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
    return <div className="headerWrapper">
        
        <FontAwesomeIcon 
        className="button"
        onClick={() => props.handleChange("previous")}
        icon={faArrowAltCircleLeft}
        />
        <h1>{props.monthName}</h1>
        <FontAwesomeIcon 
        className="button"
        onClick={() => props.handleChange("next")}
        icon={faArrowAltCircleRight}
        />
    </div>
}