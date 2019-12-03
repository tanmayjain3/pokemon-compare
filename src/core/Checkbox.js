import React, {useState,useEffect} from "react";

const Checkbox = ({categories}) =>{
    return categories.map((c,i)=>(
        <li className="list-unstyled">
            <input key={i} type="checkbox" className="form-check-input"/>
            <label className="fomr-check-label">{c.name}</label>
        </li>
    ))
}

export default Checkbox;