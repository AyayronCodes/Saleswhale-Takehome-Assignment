import React from "react";

const Tab = (props) => {
  return (
    <button
      className={`tab ${props.category === props.selected ? "selected" : ""}`}
      onClick={props.onClick}
    >
      {props.category}
    </button>
  );
};

export default Tab;
