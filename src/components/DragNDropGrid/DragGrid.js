import { useState } from 'react';
import initialData from './initial-data';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100%;
  background-color: white;
  display: grid;
  gap: 4px;
  grid-template-rows: repeat(5, minmax(3rem, auto));
  grid-template-columns: repeat(5, minmax(3rem, auto));
  grid-auto-flow: column;
`;

function DragGrid() {
  const [dataState, setDataState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }

    const start = dataState.columns[source.droppableId];
    const finish = dataState.columns[destination.droppableId];

    const startTaskIds = Array.from(start.tasksIds);
    const finishTaskIds = Array.from(finish.tasksIds);
    startTaskIds.splice(source.index, 1);
    finishTaskIds.push(draggableId);

    const newStartColumn = {
      ...start,
      tasksIds: startTaskIds,
    };

    const newFinishColumn = {
      ...finish,
      tasksIds: finishTaskIds,
    };

    const newState = {
      ...dataState,
      columns: {
        ...dataState.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    setDataState(newState);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {dataState.columnOrder.map((columnId) => {
          const column = dataState.columns[columnId];
          const tasks = column.tasksIds.map((taskId) => dataState.tasks[taskId]);
          return (
            <Column key={columnId} tasks={tasks} column={column}>
              {column.title}
            </Column>
          );
        })}
      </DragDropContext>
    </Container>
  );
}

export default DragGrid;
