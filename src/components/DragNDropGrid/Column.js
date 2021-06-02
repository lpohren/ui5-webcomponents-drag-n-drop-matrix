import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DragCard from './Card/DragCard';

const CardsList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? '#c2c2c1' : '#F3F4F5')};
  border-radius: 12px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const Column = (props) => {
  return (
    <Droppable droppableId={props.column.id}>
      {(provided, snapshot) => (
        <CardsList {...provided.droppableProps} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
          {props.tasks.map((task, index) => (
            <DragCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </CardsList>
      )}
    </Droppable>
  );
};

export default Column;
