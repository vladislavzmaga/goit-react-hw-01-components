import PropTypes from 'prop-types';
import {
  Wrapper,
  InfoBox,
  UserImg,
  UserName,
  UserTag,
  UserLocation,
  UserList,
  UserItem,
  ItemInfo,
} from './user.styled';
export const Profile = ({ profile }) => {
  const { username, tag, location, stats, avatar } = profile;
  return (
    <Wrapper>
      <InfoBox>
        <UserImg src={avatar} alt={username} width="200" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </InfoBox>

      <UserList>
        <UserItem>
          <ItemInfo>Followers</ItemInfo>
          <ItemInfo>{stats.followers}</ItemInfo>
        </UserItem>
        <UserItem>
          <ItemInfo>Views</ItemInfo>
          <ItemInfo>{stats.views}</ItemInfo>
        </UserItem>
        <UserItem>
          <ItemInfo>Likes</ItemInfo>
          <ItemInfo>{stats.likes}</ItemInfo>
        </UserItem>
      </UserList>
    </Wrapper>
  );
};

Profile.propTypes = {
  profile: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
