import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
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
