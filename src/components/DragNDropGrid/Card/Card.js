import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { STYLES } from '../../../util/constants';

const Container = styled.div`
  margin: 2px;
  padding: 3px;
  background-color: ${(props) => (props.markedAsDiscussed ? STYLES.CARD_COLOR_MARKED : STYLES.CARD_COLOR_PRIMARY)};
  color: ${STYLES.CARD_FONT_COLOR};
  font-size: 10px;
  border-radius: 6px;
`;

const NameBox = styled.div`
  font-weight: bold;
`;

const LastLine = styled.div`
  overflow: hidden;
  & > div {
    float: left;
  }
  & > div:not(:last-child) {
    margin-right: 1rem;
  }
`;
const Card = ({ item }) => {
  const cardRef = useRef();
  const markedAsDiscussed = useMarkAsDiscussed(cardRef);

  return (
    <Container markedAsDiscussed={markedAsDiscussed} ref={cardRef}>
      <NameBox>{item.task.content}</NameBox>
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
