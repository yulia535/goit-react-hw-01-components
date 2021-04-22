import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li className={styles.item} key={friend.id}>
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
      <span className={(styles.status, styles.isOnline)}></span>
    ) : (
      <span className={(styles.status, styles.isOffline)}></span>
    )}
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </div>
);
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
