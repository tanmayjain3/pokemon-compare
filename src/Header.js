import React from "react";
import {withRouter} from "react-router-dom"
import "./styles.css"

const Header = ({history}) =>(
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                Header
            </li>
        </ul>

    </div>
)

export default withRouter(Header);