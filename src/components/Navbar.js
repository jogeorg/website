import React, { useState } from "react";

function NavBar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

    return (
        <nav collapseOnSelect expand="lg" className="navbar navbar-expand-lg fixed-top" style={{ "background-color": "#00A0FB", "backdrop-filter": "blur(5px)" }}>
			<div className="container-fluid">
                <a className="navbar-brand" style={{ "color": "#ffffff" }} href="/">Welcome</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={{ "color": "#ffffff" }} aria-current="page" href="#AboutMe">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ "color": "#ffffff" }} aria-current="page" href="#custss">Customer Stories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ "color": "#ffffff" }} aria-current="page" href="#certs">Certifications</a>
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
