import React from 'react';
import styled from '@emotion/styled';
import PreviewCard from './components/PreviewCard';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <PreviewCard></PreviewCard>
    </Container>
  );
}

export default App;
