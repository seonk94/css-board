import React, { useState } from 'react';
import styled from '@emotion/styled';
import PreviewCard from './components/PreviewCard';
import CircleComponent from './components/CircleComponent';
import { Grid, Container } from 'semantic-ui-react'
import { puffIn } from './style/animation';

const PadddingGrid = styled(Grid)`
  margin: 0px !important;
  padding: 12px !important;
`
export const LoadingDiv = styled('div') <{ show: boolean }>`
  background: #fff;
  z-index: 9999;
  display: ${(props) => props.show ? 'grid' : 'none'};
  overflow: hidden;
  align-items: center;
  text-align: center;

  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  h1 {
    animation: ${puffIn} 2s ease;
    width: fit-content;
    margin: auto;
    padding: 12px;
    background: #495057;
    border-radius: 8px;
    color: #fff;
  }
`

const RootContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid
`

function App() {

  const [show, setShow] = useState(true)

  setTimeout(() => {
    setShow(false)
  }, 1900);
  return (
    <RootContainer>

      <LoadingDiv show={show}>
        <h1>Css Board!</h1>
      </LoadingDiv>

      <CircleComponent />
    </RootContainer>
  );
}

export default App;
