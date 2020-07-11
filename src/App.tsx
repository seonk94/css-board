import React from 'react';
import styled from '@emotion/styled';
import PreviewCard from './components/PreviewCard';
import { Grid, Container } from 'semantic-ui-react'

const PadddingGrid = styled(Grid)`
  margin: 0px !important;
  padding: 12px !important;
`

function App() {
  return (
    <Container>
      <PadddingGrid doubling columns={2}>
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </PadddingGrid>
    </Container>
  );
}

export default App;
