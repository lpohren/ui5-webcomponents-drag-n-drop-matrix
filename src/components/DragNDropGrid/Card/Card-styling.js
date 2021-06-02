import styled from 'styled-components';
import { STYLES } from '../../../util/constants';

export const Container = styled.div`
  margin: 2px;
  padding: 3px;
  background-color: ${(props) => (props.markedAsDiscussed ? STYLES.CARD_COLOR_MARKED : STYLES.CARD_COLOR_PRIMARY)};
  color: ${STYLES.CARD_FONT_COLOR};
  font-size: 10px;
  border-radius: 6px;
  border: 1px solid #d3d7d9;
  border-left: 6px solid ${(props) => (props.markedAsDiscussed ? STYLES.CARD_BORDER_MARKED : STYLES.CARD_BORDER_PRIMARY)};
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
