import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="navigation-wrap sticky-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" target="_blank">
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
                      <a className="nav-link" href="#">
                        Investor's Corner
                      </a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="./coreTeams.html">
                        Our Team
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container privacy-policy-section">
      <div class="privacy-policy-section">
            <h2>Privacy Policy</h2>
            <p>
                At Divyadarshan, we value the privacy of our users and strive to protect their personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding your personal data. By using the Divyadarshan website and app, you consent to the practices described in this policy.
            </p>

            <h3>Information We Collect:</h3>
            <ol>
                <li>Personal Information: When you register an account with Divyadarshan, we collect your name, phone number, and any other voluntarily provided information...</li>
                <li>Location Data: Divyadarshan may request access to your device's location to provide you with relevant temple listings and regional panchang information. You can choose to grant or deny access to this feature.</li>
                <li>Device Information: We may collect technical information from your device, including IP address, browser type, operating system, and device identifier. This data assists us in improving our services, analyzing trends, and troubleshooting technical issues.</li>
                <li>Usage Information: When you use Divyadarshan, we collect data about your interactions with our app, such as the features you use, temples you visit, searches performed, and preferences. This information helps us personalize your experience and provide relevant content.</li>
                <li>Cookies and Similar Technologies: Divyadarshan utilizes cookies and similar technologies to gather information about your usage patterns, save your preferences, and enhance our services. You can manage your cookie preferences through your browser settings.</li>
            </ol>

            <h3>How We Use Your Information:</h3>
            <ol>
                <li>Provide Services: We use the collected information to offer personalized panchang, temple recommendations, and relevant content tailored to your preferences...</li>
                <li>Improve User Experience: We analyze the data to enhance our app's functionality, develop new features, and optimize user experience. This may involve aggregating and anonymizing data for statistical purposes.</li>
                <li>Legal Compliance: If required by law or to protect our rights and safety, we may disclose information to comply with legal obligations, respond to government requests, or enforce our Terms of Service.</li>
            </ol>


            <h3>Data Sharing:</h3>
            <p>
                Divyadarshan respects your privacy and does not sell, trade, or rent your personal information to third parties. However, we may share non-personal information with trusted partners and affiliates for analytics, research, or advertising purposes, where permitted by applicable laws.
            </p>

            <p>Data Security: We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, please note that no method of transmission or storage over the internet can guarantee absolute security</p>
             
            <h3>Your Choices:</h3>
            <ol>
              <li>Account Settings: You can review and update your account information within the Divyadarshan app. You have the option to deactivate or delete your account, subject to any legal obligations.</li>
              <li>Location Services: You can enable or disable location services through your device settings or within the Divyadarshan app. Please note that disabling this feature may limit certain functionalities.</li>

            </ol>
            <p>Changes to the Privacy Policy: We reserve the right to modify or update this Privacy Policy at any time. It is recommended to review this policy periodically for any changes. We will notify you of significant changes through our app or other means.</p>

            <p>By using Divyadarshan, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>

        </div>

      </div>
      <footer className="d-flex justify-content-between">
      <span>Ⓒ 2024 DivyaDarshan Digiserve Servies OPC Pvt.Ltd</span>
      <ul>
        <li>
          {/* Use the Link component for navigation */}
          <Link to="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
    </div>
  );
}

export default PrivacyPolicy;