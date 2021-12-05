import "./App.css";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import user from "./user";
import data from "./data.json";
import friendsList from "./friends.json";

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
    <Statistics stats={data} title="okay" />,
    <FriendList friends={friendsList} />,
  ];

  // console.log()
  //   return (
  // <div>
  // <Profile
  //       username={user.username}
  //       tag={user.tag}
  //       location={user.location}
  //       avatar={user.avatar}
  //       stats={user.stats}
  //     />
  //     <Statistics stats={data} />
  //     <Statistics stats={data} title="okay"  />
  //     <FriendList friends={friendsList}/>
  // </div>
  //   )
}

export default App;
