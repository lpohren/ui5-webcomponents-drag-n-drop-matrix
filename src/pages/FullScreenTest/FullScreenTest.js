import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@ui5/webcomponents-react';

import DragGrid from '../../components/DragNDropGrid/DragGrid';
import GridFilters from '../../components/GridFilters/GridFilters';

const OuterContainer = styled.div`
  height: calc(100vh - 44px);
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const GridContainer = styled.div`
  flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
`;

const styles = {
  fullScreen: {
    top: 0,
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: '101',
  },
  fullscreenButton: {
    right: 0,
    position: 'absolute',
  },
};

const FullScreenTest = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const fullScreenStyle = fullscreen && styles.fullScreen;

  return (
    <OuterContainer>
      <GridFilters />
      <GridContainer style={{...fullScreenStyle}}>
        <Button onClick={() => setFullscreen(!fullscreen)} style={styles.fullscreenButton}>
          Full screen
        </Button>
        <DragGrid />
      </GridContainer>
    </OuterContainer>
  );
};

export default FullScreenTest;
