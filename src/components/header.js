import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";

function Header() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="all">All Questions</Link>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Header;