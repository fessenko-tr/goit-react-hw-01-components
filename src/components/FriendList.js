import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map((e) => (
        <FriendListItem
          avatar={e.avatar}
          name={e.name}
          isOnline={e.isOnline}
          id={e.id}
        />
      ))}
    </ul>
  );
}

export default FriendList;
