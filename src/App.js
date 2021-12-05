import "./App.css";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./user";
import data from "./data.json";

function App() {
  return [
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />,
    <Statistics stats={data} />,
    <Statistics stats={data} title="okay"  />,
  ];
}

export default App;
