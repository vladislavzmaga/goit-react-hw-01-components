import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem/friendsListItem.jsx';
import { FriendsList } from './friends.styled';
export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
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
