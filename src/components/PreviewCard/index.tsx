
import React from 'react';
import styled from "styled-components"

const PreviewDiv = styled.div`
    width: 200px;
    height: 300px;
    background: blue;
    position: absolute;
    bottom: -20px;
`

function PreviewCard({ style }: any) {
    console.log(style)
    return (
        <PreviewDiv style={style}>
            <h5>card</h5>
        </PreviewDiv>
    );
}

export default PreviewCard;
