import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import friendsList from "./components/FriendList/friends";
import user from "./components/Profile/user";
import data from "./components/Statistics/data";
import transactions from "./components/TransactionHistory/transactions";

function App() {
  return (
    <>
      <p>Задание 1 - Профиль социальной сети</p>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <p>Задание 2 - Секция статистики</p>

      <Statistics title="Upload stats" stats={data} />

      {/* <Statistics stats={data} /> */}

      <p>Задание 3 - Список друзей</p>

      <FriendList friends={friendsList} />

      <p>Задание 4 - История транзакций</p>

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
