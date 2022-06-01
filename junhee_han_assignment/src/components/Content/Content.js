import React from "react";
import axios from "axios";
import Card from "./Card";

const Content = (props) => {
  let title;
  let selectedTeams = null;

  switch (props.selected) {
    case "Favorites":
      title = "Favorite Teams";
      selectedTeams = props.teams.filter((team) => team.is_favorited);
      break;
    case "Archived":
      title = "Archived Teams";
      selectedTeams = props.teams.filter((team) => team.is_archived);
      break;
    default:
      title = "All Teams";
      selectedTeams = [...props.teams];
  }

  let cards;

  if (selectedTeams === null) {
    cards = "Loading...";
  } else if (selectedTeams.length === 0) {
    cards = "No teams to display";
  } else {
    cards = selectedTeams.map((team) => (
      <Card
        key={team.id}
        company={team.name}
        image={team.image}
        description={team.description}
        created_at={team.created_at}
        campaigns_count={team.campaigns_count}
        leads_count={team.leads_count}
        is_favorited={team.is_favorited}
        is_archived={team.is_archived}
        onFavoriteClick={() => props.onFavoriteClick(team)}
      />
    ));
  }

  return (
    <div className="Content box">
      <div
        className="box-container"
        style={{
          borderBottom: "2px solid #efefef",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 className="box-title">{title}</h3>
        <span
          style={{
            fontSize: "14px",
            color: "#7F7F7F",
          }}
        >
          Showing {selectedTeams.length} out of {props.teams.length} teams
        </span>
      </div>
      <div className="box-container cards">{cards}</div>
    </div>
  );
};

export default Content;
