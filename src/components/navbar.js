import React from "react";

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <span className="navbar-brand">Start Bootstrap</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <span className="nav-link">
                                {props.menu1}
                                <span className="visually-hidden">(current)</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">{props.menu2}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">{props.menu3}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">{props.menu4}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
