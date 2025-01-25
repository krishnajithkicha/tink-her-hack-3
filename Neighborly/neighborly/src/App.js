import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

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
          <Link to="/register">
            <button className="signup">Sign Up</button>
          </Link>
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

// Register/Signup page component
const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileUpload = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('bio', bio);
    formData.append('phoneNumber', phoneNumber);
    formData.append('profilePicture', profilePicture);

    try {
      const response = await axios.post('http://localhost:5000/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Registration successful!');
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.message || 'An error occurred'));
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>REGISTER</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>CONFIRM PASSWORD</label>
          <input
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>BIO</label>
          <textarea
            placeholder="Tell us about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
          <label>PHONE NUMBER</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <label>UPLOAD YOUR PICTURE</label>
          <input type="file" onChange={handleFileUpload} accept="image/*" />
          <button type="submit">SIGN UP</button>
        </form>
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
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;

