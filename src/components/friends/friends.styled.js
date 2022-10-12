import styled from 'styled-components';
import theme from '../../theme.js';
export const FriendsList = styled.ul`
  width: 300px;
  margin: 0 auto 15px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  height: 70px;
  border: 1px solid black;
`;

export const FriendsOnline = styled.span`
  align-items: center;
  text-align: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  color: transparent;
  border-radius: 50%;
  background-color: ${p => {
    return p.isOnline ? p.theme.colors.online : p.theme.colors.offline;
  }};
`;

export const FriendsAvatar = styled.img`
  margin: 10px;
`;

export const FriendsName = styled.p`
  font-weight: bold;
`;
