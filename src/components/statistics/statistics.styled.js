import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 100%;
`;

export const StatisticTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const StatisticList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 15px;
`;

export const StatisticItem = styled.li`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const StatisticSpan = styled.span`
  font-weight: bold;
`;
