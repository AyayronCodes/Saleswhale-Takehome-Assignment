import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SideNav from "./components/SideNav/SideNav";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import ActivityFeed from "./components/ActivityFeed/ActivityFeed";

const App = () => {
  const [selected, setSelected] = useState("All");
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState(null);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/current_user")
      // .then((res) => res.json())
      .then((res) => {
        setUser({ ...res.data });
      });

    axios
      .get("http://localhost:8000/activities")
      // .then((res) => res.json())
      .then((res) => {
        setActivities([...res.data]);
      });

    axios
      .get("http://localhost:8000/teams")
      // .then((res) => res.json())
      .then((res) => {
        setTeams([...res.data]);
      });
  }, []);

  const onTabClick = (e) => {
    setSelected(e.target.innerText);
  };

  const onFavoriteClick = (obj) => {
    axios
      .put(`http://localhost:8000/teams/${obj.id}/`, {
        ...obj,
        is_favorited: !obj.is_favorited,
      })
      .then((res) => {
        axios
          .get("http://localhost:8000/teams")
          // .then((res) => res.json())
          .then((res) => {
            setTeams([...res.data]);
          });
      });
  };

  return (
    <div className="App">
      <SideNav />
      <div className="App-container">
        <NavBar user={user} />
        <Header selected={selected} onClick={onTabClick} />
        <div className="App-main container">
          <Content
            selected={selected}
            teams={teams}
            onFavoriteClick={onFavoriteClick}
          />
          <ActivityFeed activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default App;
