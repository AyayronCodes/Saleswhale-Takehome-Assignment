import React from "react";

const Activity = (props) => {
  let sentence;

  switch (props.type) {
    case "increased_quota":
      sentence = (
        <p>
          <b>{props.name}</b> increased <strong>{props.company}</strong>'s
          quora.
        </p>
      );
      break;
    case "added_leads":
      sentence = (
        <p>
          <b>{props.name}</b> added new leads to{" "}
          <strong>{props.company}</strong>.
        </p>
      );
      break;
    case "archived_team":
      sentence = (
        <p>
          <b>{props.name}</b> archived the team <strong>{props.company}</strong>
          .
        </p>
      );
      break;
  }

  return (
    <div className="Activity">
      <img className="Activity-img" src={props.img} />
      <div className="Activity-description">
        {sentence}
        <span>{props.createdAt}</span>
      </div>
    </div>
  );
};

export default Activity;
