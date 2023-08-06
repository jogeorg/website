import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ "background-color": "#0F1025", "backdrop-filter": "blur(5px)" }}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{ "color": "#ffffff" }} href="home">Welcome</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={{ "color": "#ffffff" }} aria-current="page" href="#AboutMe">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ "color": "#ffffff" }} aria-current="page" href="#Resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ "color": "#ffffff" }} href="#Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ "color": "#ffffff" }} href="#Contact">Contact Me</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;