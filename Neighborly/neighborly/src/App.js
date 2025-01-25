import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Homepage component
const HomePage = () => {
  return (
    <div className="App">
      <header>
        <div className="logo">Neighborly</div>
        <div className="header-buttons">
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
          <button className="signup">Sign Up</button>
        </div>
      </header>

      <div className="hero">
        <img src="/Logo1.png" alt="Hero Image" />
        <div className="hero-title">Neighborly</div>
        <img src="/Logo2.png" alt="Hero Image" />
        <div className="hero-subtitle">Connect. Share. Thrive.</div>
      </div>

      <div className="content">
        <h1>Connect. Share. Thrive.</h1>
        <p>An app that transforms neighbors into a community. Share skills, borrow items, and discover local events—your neighborhood, reimagined!</p>
      </div>

      <div className="card-container">
        <div className="card">
          <img src="/local_events.png" alt="Local Events" />
          <h3>Local Events</h3>
        </div>
        <div className="card">
          <img src="/skill_sharing.png" alt="Skill Sharing" />
          <h3>Skill Sharing</h3>
        </div>
        <div className="card">
          <img src="/borrow_and_lend_items.png" alt="Borrow and Lend Items" />
          <h3>Borrow and Lend Items</h3>
        </div>
        <div className="card">
          <img src="/online_chatting.png" alt="Online Chatting" />
          <h3>Online Chatting</h3>
        </div>
      </div>
    </div>
  );
};

// Login page component
const LoginPage = () => {
  const submitLogin = () => {
    alert('Login submitted!');
    // Logic to validate and handle login can be added here.
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <button onClick={submitLogin}>Login</button>
        <div className="forgot-password">Forgot Password?</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
