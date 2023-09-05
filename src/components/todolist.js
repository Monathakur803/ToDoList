import React from "react";

import "./todolist.css"
const Todolist = (props) => {  
     console.log(props);
    return (
    <ul className="todolist">
        {props.list.map((listitem) => {
            return <li key={listitem.itemid}>{listitem.itemname} </li> ;

        })}
    </ul>
    );
};

export default Todolist;