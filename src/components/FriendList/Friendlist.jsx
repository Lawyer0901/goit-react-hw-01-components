import {
  FriendListCard,
  FriendItem,
  FriendIsOnline,
  FriendOffLine,
} from './Friendlist.styled';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <FriendListCard>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          {friend.isOnline ? (
            <FriendIsOnline></FriendIsOnline>
          ) : (
            <FriendOffLine></FriendOffLine>
          )}
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </FriendItem>
      ))}
    </FriendListCard>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
