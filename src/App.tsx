import React, { useState } from 'react';
import PreviewCard from './components/PreviewCard';
import { puffIn } from './style/animation';
import CircleComponent from './components/CircleComponent';
import styled from "styled-components"
import { colorList } from './constants/Colors';

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

const AbsoluteContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`

function App() {

  const [show, setShow] = useState(false)

  setTimeout(() => {
    setShow(false)
  }, 1900);


  const getStyle = (index: number) => {
    return {
      background: colorList[index],
      zIndex: index,
      bottom: `-${index === 2 ? 33 : Math.abs(2 - index) * 53}px`,
      left: `${100 / 5 * index}%`,
      transform: `
        rotate(${340 + index * 10}deg)
      `
    }
  }
  return (
    <RootContainer>
      {/* <AbsoluteContainer>
        <PreviewCard style={getStyle(0)} />
        <PreviewCard style={getStyle(1)} />
        <PreviewCard style={getStyle(2)} />
        <PreviewCard style={getStyle(3)} />
        <PreviewCard style={getStyle(4)} />
      </AbsoluteContainer> */}
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
