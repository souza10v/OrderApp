import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    PIZZA PLANET
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style>
                {`
                .navbar-nav.ml-auto {
                    margin-left: auto;
                }
                `}
            </style>
        </nav>
    );
}
