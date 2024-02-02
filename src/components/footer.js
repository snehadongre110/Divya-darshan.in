import React from 'react';
import { Link } from 'react-router-dom';

class FooterComponent extends React.Component {
    render() {
        return (
            <span>
                <div className="divider"></div>

                <footer className="d-flex justify-content-between">
                    <span>Ⓒ 2024 DivyaDarshan Digiserve Servies OPC Pvt.Ltd</span>
                    <ul>
                        <li>
                            {/* Use the Link component for navigation */}
                            <Link to="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </footer>
            </span>
        )
    }
}

export default FooterComponent;