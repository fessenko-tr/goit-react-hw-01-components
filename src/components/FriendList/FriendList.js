import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map((e) => (
        <FriendListItem
          avatar={e.avatar}
          name={e.name}
          isOnline={e.isOnline}
          key={e.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
