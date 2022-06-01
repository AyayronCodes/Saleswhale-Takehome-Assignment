import MenuItem from "./MenuItem";

const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="SideNav-top">
        <div className="logo">
          <img src={require("../../assets/logo.png")} alt="logo" />
        </div>
        <MenuItem imgSrc={require("../../assets/icons/icon-campaign.png")} />
        <MenuItem imgSrc={require("../../assets/icons/icon-teams.png")} />
        <MenuItem imgSrc={require("../../assets/icons/icon-leads.png")} />
        <MenuItem imgSrc={require("../../assets/icons/icon-reports.png")} />
      </div>
      <div className="SideNav-bottom">
        <MenuItem imgSrc={require("../../assets/icons/icon-help.png")} />
      </div>
    </div>
  );
};

export default SideNav;
