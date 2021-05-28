import React, { useState } from 'react';
import { Button } from '@ui5/webcomponents-react';

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
    height: '5rem',
  },
  matrix: {
    flex: 1,
    backgroundColor: 'lightsalmon',
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
  const [fullscreen, setFullscreen] = useState(true);

  const fullScreenStyle = fullscreen && styles.fullScreen;

  return (
    <div style={styles.outerContainer}>
      <div style={styles.filterContainer}></div>
      <div style={{ ...styles.matrix, ...fullScreenStyle }}>
        <Button onClick={() => setFullscreen(!fullscreen)} style={styles.fullscreenButton}>
          Full screen
        </Button>
      </div>
    </div>
  );
};

export default FullScreenTest;
