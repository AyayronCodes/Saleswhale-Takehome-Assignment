import React from "react";
import Activity from "./Activity";

const ActivityFeed = (props) => {
  let activitiesHtml;

  if (props.activities === null) {
    activitiesHtml = "Loading activities...";
  } else if (props.activities.length === 0) {
    activitiesHtml = "No Activities to display";
  } else {
    activitiesHtml = props.activities.map((activity) => (
      <Activity
        key={activity.id}
        type={activity.action}
        name={activity.person.name}
        company={activity.target}
        createdAt={activity.created_at}
        img={activity.person.avatar}
      />
    ));
  }

  return (
    <div className="ActivityFeed box">
      <div
        className="box-container"
        style={{ borderBottom: "2px solid #efefef" }}
      >
        <h3 className="box-title">Activity</h3>
      </div>
      <div className="box-container">{activitiesHtml}</div>
    </div>
  );
};

export default ActivityFeed;
