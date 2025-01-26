import React from "react";
import "./App";

function Dashboard() {
  const user = {
    name: "Name",
    email: "Email Address",
    bio: "Bio",
    contactInfo: "Contact Info",
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <img src="/Logo1.png" alt="Neighborly Banner" className="header-banner" />
        <h1>Neighborly</h1>
        <p>Connect. Share. Thrive.</p>
      </header>

      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Welcome</h2>
          <img src="/profile.png" alt="Profile" className="profile-pic" />
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <p><strong>Contact Info:</strong> {user.contactInfo}</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </aside>

        {/* Main Cards */}
        <main className="main-content">
          <div className="card card-yellow">
            <h3>Share your Skills</h3>
            <img src="/ShareSkills.png" alt="Share your Skills" />
          </div>
          <div className="card card-blue">
            <h3>Chit Chat</h3>
            <img src="/chitChat.png" alt="Chit Chat" />
          </div>
          <div className="card card-orange">
            <h3>What's Happening</h3>
            <img src="/WhatsHappening.png" alt="What's Happening" />
          </div>
          <div className="card card-purple">
            <h3>Borrow or Share</h3>
            <img src="/borrowOrLend.png" alt="Borrow or Share" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
