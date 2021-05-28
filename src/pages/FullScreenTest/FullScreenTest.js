import React, { useState } from 'react';
import { Button } from '@ui5/webcomponents-react';
import DragGrid from '../../components/DragNDropGrid/DragGrid';

const styles = {
  outerContainer: {
    height: 'calc(100vh - 44px)',
    width: '100vw',
    backgroundColor: 'lightgreen',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  filterContainer: {
    backgroundColor: 'lightseagreen',
    minHeight: '10rem',
  },
  matrix: {
    flex: 1,
    minHeight: 0,
    backgroundColor: 'lightsalmon',
    display: 'flex',
    flexDirection: 'column',
  },
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
    <div style={styles.outerContainer}>
      <div style={styles.filterContainer}></div>
      <div style={{ ...styles.matrix, ...fullScreenStyle }}>
        <Button onClick={() => setFullscreen(!fullscreen)} style={styles.fullscreenButton}>
          Full screen
        </Button>
        <DragGrid />
      </div>
    </div>
  );
};

export default FullScreenTest;
