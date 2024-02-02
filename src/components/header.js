import React from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="navigation-wrap sticky-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <a className="navbar-brand" href="index.html" target="_blank">
                                    <img src="./assets/logo2.jpeg" width="120" alt="Divyadarshan Logo" />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            {/* <a className="nav-link" href="#">
                                                Investor's Corner
                                            </a> */}
                                            <Link className="nav-link" to="#">Investor's Corner</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            {/* <a className="nav-link" href="./coreTeams.html">
                                                Our Team
                                            </a> */}
                                            <Link className="nav-link" to="/coreTeams">Our Team</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;