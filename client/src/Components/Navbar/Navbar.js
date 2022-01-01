import React from 'react'
import "./Navbar.css";
import logo from "./images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* <header id="header"> */}
                <nav id="navbar">

                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="item">
                        <ul className="items">
                            {/* <div> <li> <Link to="javascript:void(0)" className="closebtn" onclick="closenav()"> x </Link> </li> </div>  */}
                            <div> <li> <Link className="icon" to="/"> <i className="fa fa-home">       </i> <span>     Home       </span> </Link> </li> </div>
                            <div> <li> <Link className="icon" to="/services"> <i className="fa fa-briefcase">  </i> <span>  Our Services  </span> </Link> </li> </div>
                            <div> <li> <Link className="icon" to="/about"> <i className="fa fa-user">       </i> <span>    About Us    </span> </Link> </li> </div>
                            <div> <li> <Link className="icon" to="/contact"> <i className="fa fa-envelope">   </i> <span>   Contact Us   </span> </Link> </li> </div>
                            <div> <li> <Link className="icon" to="/clients"> <i className="fas fa-handshake"> </i> <span>   Our Clients  </span> </Link> </li> </div>
                            {/* <div> <li> <a className="icon" href="/details"> <i className="fa fa-cog">        </i> <span>     Details    </span> </a> </li> </div> */}
                        </ul>
                    </div>

                    {/* <div>
                        <button className="openbtn" onclick="opennav()"> ☰ </button>
                    </div> */}

                    <div className="h-search">
                        <i className="fas fa-microphone"></i>

                        <form action="#" acceptCharset="UTF-8" method="POST" autoComplete="on" id="h-search" name="h-search">
                            <label htmlFor="search"> </label>
                            <input type="search" id="search" name="search" />
                        </form>
                        
                        <i className="fas fa-search"></i>
                    </div>

                    <div className="sign-up">
                        <Link to="/signup"> <button className="nb-su-button"> Sign up </button> </Link>
                    </div>

                    <div className="log-in">
                        <Link to="login"> <button className="nb-li-button" > Log in </button> </Link>
                    </div>

                </nav>
            {/* </header> */}
        </>
    )
}

export default Navbar;
