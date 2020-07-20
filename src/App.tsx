import React, { useState } from 'react';
import { puffIn } from './style/animation';
import CircleComponent from './components/CircleComponent';
import styled from "styled-components"

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
  height: 100vh;
  width: 100vh;
  display: grid;
  overflow: hidden;
`

function App() {

  const [show, setShow] = useState(true)

  setTimeout(() => {
    setShow(false)
  }, 1900);


  return (
    <RootContainer>
      <CircleComponent
        parentSize={500}
        angle={90}
        count={3}
      />
      <LoadingDiv show={show}>
        <h1>Css Board!</h1>
      </LoadingDiv>
    </RootContainer>
  );
}

export default App;
