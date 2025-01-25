import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="App">
      <header>
        <div className="logo">Neighborly</div>
        <div className="header-buttons">
          {user ? (
            <span>Welcome, {user.email}</span>
          ) : (
            <>
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
              <Link to="/register">
                <button className="signup">Sign Up</button>
              </Link>
            </>
          )}
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

export default HomePage;
