import {useState} from 'react';
import styled from 'styled-components';
import initialData from './initial-data';
import { Container, NameBox, LastLine } from './Card-styling';

const OuterContainer = styled.div`
  height: calc(100vh - 44px);
  width: 100vw;
  background-color: black;

  display: grid;
  gap: 4px;
  grid-template-rows: minmax(1rem, auto) minmax(1rem, auto) minmax(1rem, auto) minmax(1rem, auto) minmax(1rem, auto);
  grid-template-columns: minmax(1rem, auto) minmax(1rem, auto) minmax(1rem, auto) minmax(1rem, auto) minmax(1rem, auto);
`;

const CardsList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: lightslategrey;
  flex-grow: 1;
  border-radius: 12px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const MatrixTest = () => {
  const [dataState, setDataState] = useState(initialData);

  return (
    <OuterContainer>
      {dataState.columnOrder.map((columnId) => {
          const column = dataState.columns[columnId];
          const tasks = column.tasksIds.map((taskId) => dataState.tasks[taskId]);
          return (
            <CardsList key={columnId}>
              {tasks.map((task) => (
                <Card key={task.id} item={task} />
              ))}
            </CardsList>
          );
        })}
    </OuterContainer>
  );
};

const Card = ({ item }) => {
  const nickname = item.content.split(' ')[0];
  const fullName = item.content.split(' ').slice(1).join(' ');

  return (
    <Container>
      <NameBox>
        <div>{nickname}</div>
        <div> {'\xA0' + fullName}</div>
      </NameBox>
      <div>FG-511</div>
      <LastLine>
        <div>333</div>
        <div>PIC</div>
        <div>APR</div>
      </LastLine>
    </Container>
  );
};

export default MatrixTest;
