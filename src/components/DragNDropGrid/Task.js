import { useRef, useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2px;
  padding: 8px;
  height: 40px;
  background-color: ${(props) => (props.markedAsDiscussed ? 'lightgreen' : '#555278')};
  color: white;
  font-size: 12px;
  border-radius: 6px;
`;

// This is a bug fix, since the app does not support horizontal and vertical drag and drop, this code IS IMPORTANT and disables the cards reordering
const getStyle = (style, snapshot) => {
  if (!snapshot.isDragging) return {};
  if (!snapshot.isDropAnimating) {
    return style;
  }
  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: `0.001s`,
  };
};

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getStyle(provided.draggableProps.style, snapshot)}>
          <Card item={props} />
        </div>
      )}
    </Draggable>
  );
};

const Card = ({ item }) => {
  const cardRef = useRef();
  const markedAsDiscussed = useMarkAsDiscussed(cardRef);

  return (
    <Container markedAsDiscussed={markedAsDiscussed} ref={cardRef}>
      {item.task.content}
    </Container>
  );
};

const useMarkAsDiscussed = (ref) => {
  const [markedAsDiscussed, _setMarkedAsDiscussed] = useState(false);
  const markedAsDiscussedRef = useRef(markedAsDiscussed);
  const setMarkedAsDiscussed = (data) => {
    markedAsDiscussedRef.current = data;
    _setMarkedAsDiscussed(data);
  };

  useEffect(() => {
    ref.current.addEventListener('contextmenu', handleContextMenu, false);
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMarkedAsDiscussed(!markedAsDiscussedRef.current);
  };

  return markedAsDiscussed;
};

export default Task;
