import React from "react";

const Nav = () => {
  return (
    <div className="nav-conatiner">
      <div className="head-nav">
        <h1 className="logo">.Dash</h1>
        <div className="user-card">
          <img src="./img/user.jpg" alt="user" />
          <div className="user">
            <p className="name">Alberto Wells</p>
            <p className="job">UX Designer</p>
          </div>
        </div>
        <ul className="nav-items">
          <li className="nav-item active">
            <a href="/">
              <img src="./img/dashboard.svg" alt="dash" /> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <img src="./img/profile.svg" alt="profile" />
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <img src="./img/statistics.svg" alt="statictic" />
              Statistic
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <img src="./img/message.svg" alt="message" />
              Messages
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <img src="./img/settings.svg" alt="settings" />
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="sign-out">
        <a href="/">
          <img src="./img/signout.svg" alt="" />
          Sign Out
        </a>
      </div>
    </div>
  );
};

export default Nav;


