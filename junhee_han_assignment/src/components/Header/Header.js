import React from "react";
import Tab from "./Tab";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="Header-top">
        <div>
          <img
            className="companiesIcon"
            src={require("../../assets/icons/icon-companies.png")}
            alt="companies icon"
          />
          <span
            style={{
              fontSize: "30px",
              fontWeight: 500,
            }}
          >
            Teams
          </span>
        </div>
        <button className="Header-button">
          <img
            src={require("../../assets/icons/icon-plus.png")}
            alt="plus icon"
          />
          CREATE NEW TEAM
        </button>
      </div>
      <div className="Header-bottom">
        <div className="tabs">
          <Tab
            category="All"
            selected={props.selected}
            onClick={props.onClick}
          />
          <Tab
            category="Favorites"
            selected={props.selected}
            onClick={props.onClick}
          />
          <Tab
            category="Archived"
            selected={props.selected}
            onClick={props.onClick}
          />
        </div>
        <div className="searchBar">
          <img
            src={require("../../assets/icons/icon-search.png")}
            alt="search icon"
          />
          <input placeholder="Search team name ..." />
        </div>
      </div>
    </div>
  );
};

export default Header;
