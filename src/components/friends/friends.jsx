import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendsItem,
  FriendsAvatar,
  FriendsName,
  FriendsOnline,
} from './friends.styled';
export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <FriendsOnline isOnline={friend.isOnline}></FriendsOnline>
          <FriendsAvatar src={friend.avatar} alt={friend.name} width="48" />
          <FriendsName>{friend.name}</FriendsName>
        </FriendsItem>
      ))}
    </FriendsList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
