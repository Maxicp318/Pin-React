import React from "react";
import "./navBar.scss";
import Logo1 from '../../public/img/logo1.png';

function ContainerNavBar(props){

    window.addEventListener("scroll", function(){
        var nav = document.querySelector("nav");
        nav.classList.toggle("nav_abajo", window.scrollY>0);
      })

    return(
        <div className="Container-NavBar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid Container_Menu">
                    <img className="logo_1" src={Logo1} alt="Logo 25watts"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav_menu_1" id="navbarNav">
                        <ul className="container_ul">
                            <li className="nav-item">
                                <a className="menu__a" href="#carousel">Home</a>
                            </li>
                            <li className="nav-item text_abajo">
                                <a className="menu__a" href="#secc_2">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="menu__a" href="#secc_3">Products</a>
                            </li>
                            <li className="nav-item text_abajo">
                                <a className="menu__a" href="#secc_4">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="menu__a" href="#secc_5">Contact</a>  
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ContainerNavBar;