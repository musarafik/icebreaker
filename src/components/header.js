import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <div>
            <nav>
                <Link className="link" style={{marginRight: "10%"}} to="/">Home</Link>
                <Link to="all">All Questions</Link>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Header;