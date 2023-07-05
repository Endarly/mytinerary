import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/Search.css"

export default function Search(props) {
    return (
        
        <div className="Search">
            <input value={props.value} onChange={props.onChange} type="text" />
            <button className="">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
       
    )
}