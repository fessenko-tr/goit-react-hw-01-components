import "./App.css";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

import friendsList from "./data/friends";
import user from "./data/user";
import data from "./data/statistics";
import transactions from "./data/transactions";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
