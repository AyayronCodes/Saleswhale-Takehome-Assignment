import React from "react";

const NavBar = (props) => {
  return (
    <div className="NavBar container">
      <div>
        <span className="appName">NARWHAL</span>
        <span className="pageName">Teams</span>
      </div>
      {props.user && (
        <div>
          <div className="inbox">
            <img
              className="inboxIcon"
              src={require("../../assets/icons/icon-menu-notification.png")}
              alt="mail"
            />
            <span className="inboxCount">{props.user.notifications_count}</span>
          </div>
          <span className="userGreet">Hello, {props.user.name}</span>
          <img className="userImg" src={props.user.avatar} alt="user" />
          <img
            className="caretDownIcon"
            src={require("../../assets/icons/icon-caret-down.png")}
            alt="caret-down"
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
