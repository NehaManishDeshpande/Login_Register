import React from "react";
import logo from "./assets/images/logo1.png";
function Navbar() {
    return (
        <div>
            <nav className="navbar background">
                    <div className="logo">
                        <img src={logo} style={{ height: "100px" }} alt="Logo" />
                    </div>
                    <ul className="nav-list">
                        <li><a href="/home">HOME</a></li>
                        <li className="dropdown">
                            <a href="/women">WOMEN</a>
                            <div className="dropdown-content">
                                <a href="#kurtasandsuits">Kurtas and Suits</a>
                                <a href="#kurtisandtunics">Kurtis and Tunics</a>
                                <a href="#sarees">Sarees</a>
                                <a href="#westernwear">Western Wear</a>
                                <a href="#palazzos">Palazzos</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="/kid">KID</a>
                            <div className="dropdown-content">
                                <a href="#boysclothing">Boys clothing</a>
                                <a href="#girlsclothing">Girls clothing</a>
                            </div>
                        </li>
                    </ul>
                    <div className="rightnav">
                        <ul className="nav-list2">
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">SignUp</a></li>
                        </ul>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar;
