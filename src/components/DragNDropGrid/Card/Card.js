import { useRef, useEffect, useState } from 'react';
import { Container, NameBox, LastLine } from './Card-styling';

const Card = ({ item }) => {
  const cardRef = useRef();
  const markedAsDiscussed = useMarkAsDiscussed(cardRef);
  const nickname = item.task.content.split(' ')[0];
  const fullName = item.task.content.split(' ').slice(1).join(' ');

  return (
    <Container markedAsDiscussed={markedAsDiscussed} ref={cardRef}>
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

const useMarkAsDiscussed = (ref) => {
  const [markedAsDiscussed, _setMarkedAsDiscussed] = useState(false);
  const markedAsDiscussedRef = useRef(markedAsDiscussed);
  const setMarkedAsDiscussed = (data) => {
    markedAsDiscussedRef.current = data;
    _setMarkedAsDiscussed(data);
  };

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setMarkedAsDiscussed(!markedAsDiscussedRef.current);
    };

    ref.current.addEventListener('contextmenu', handleContextMenu, false);
  }, [ref]);

  return markedAsDiscussed;
};

export default Card;
