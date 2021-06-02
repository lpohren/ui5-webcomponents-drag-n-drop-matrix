import styled from 'styled-components';

export const Container = styled.div`
  margin: 2px;
  padding: 3px;
  background-color: lightgreen;
  color: black;
  font-size: 8px;
  border-radius: 5px;
`;

export const NameBox = styled.div`
  div {
    float: left;
  }
  div:first-child {
    font-weight: bold;
  }
`;

export const LastLine = styled.div`
  overflow: hidden;
  div {
    float: left;
  }
  div:not(:last-child) {
    margin-right: 1rem;
  }
`;
