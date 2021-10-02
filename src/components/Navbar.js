import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <Link className="link" to="/cards"><i class="fa fa-car"></i></Link>
            <Link className="link" to="/" ><i class="fa fa-home"></i></Link>
            <Link className="link" to="/settings"><i class="fa fa-gear"></i></Link>
        </div>
    );
};

export default Navbar;