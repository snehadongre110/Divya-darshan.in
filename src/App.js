import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TeamsComponent from './components/Team';
import PrivacyPolicy from './components/PrivacyPolicy';
import ProfileDetails from './components/profile'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coreTeams" element={<TeamsComponent />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/profile/:userId" element={<ProfileDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;