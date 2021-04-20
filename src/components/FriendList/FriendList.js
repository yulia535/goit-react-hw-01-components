import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

const FriendList = ({ friends }) => (
  <ul className="friendList">
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};
export default FriendList;

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    {isOnline ? (
      <span className="status isOnline"></span>
    ) : (
      <span className="status isOffline"></span>
    )}
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </div>
);
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
