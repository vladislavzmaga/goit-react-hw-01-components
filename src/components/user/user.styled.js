import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto 15px;
  width: 400px;
  padding: 20px;
`;

export const InfoBox = styled.div`
  width: 100%;
`;

export const UserImg = styled.img`
  display: block;
  margin: 0 auto 15px;
`;

export const UserName = styled.p`
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserTag = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

export const UserLocation = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

export const UserList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const ItemInfo = styled.span`
  text-align: center;
  width: 70px;
`;
