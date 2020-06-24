import React from 'react';
import styled from 'styled-components'
import BaseMap from './../components/BaseMap'

const AppWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <AppWrap className="App">
      <BaseMap />
    </AppWrap>
  );
}

export default App;
