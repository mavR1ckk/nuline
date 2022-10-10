import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to={"/about"}>Home</Link>
            <Link to={"/contact"}>Home</Link>
        </div>
    );
}

export default Header;