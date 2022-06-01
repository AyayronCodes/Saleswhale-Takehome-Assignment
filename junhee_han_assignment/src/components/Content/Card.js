import React from "react";

const Card = (props) => {
  return (
    <div className={`Card ${props.is_archived && "archived"}`}>
      <div className="Card-top">
        <div className="Card-firstRow">
          <div>
            <img className="Card-img" src={props.image} />
            <div>
              <b className="Card-company">{props.company}</b>
              <span className="Card-created">
                {props.created_at ? `Created ${props.created_at}` : ""}
              </span>
            </div>
          </div>
          <img
            className="Card-favoriteBtn"
            src={require(props.is_favorited
              ? "../../assets/icons/icon-star-active.png"
              : "../../assets/icons/icon-star-default.png")}
            onClick={props.onFavoriteClick}
          />
        </div>
        <p className="Card-description">{props.description}</p>
      </div>
      <div className="Card-bottom">
        <img src={require("../../assets/icons/icon-conversations-small.png")} />
        <span className="Card-campaigns">
          {props.campaigns_count} Campaigns
        </span>
        <img src={require("../../assets/icons/icon-leads-small.png")} />
        <span className="Card-leads">{props.leads_count} Leads</span>
      </div>
    </div>
  );
};

export default Card;
