import PropTypes from 'prop-types';
import {
  FriendsItem,
  FriendsAvatar,
  FriendsName,
  FriendsOnline,
} from './FriendListItem.styled';

export const FriendsListItem = ({ name, avatar, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsOnline isOnline={isOnline}></FriendsOnline>
      <FriendsAvatar src={avatar} alt={name} width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
