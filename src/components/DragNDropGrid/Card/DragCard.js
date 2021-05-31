import { Draggable } from 'react-beautiful-dnd';

import Card from './Card';

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

const DragCard = (props) => {
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

export default DragCard;
