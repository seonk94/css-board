import React from 'react';
import './index.css';
import styled from 'styled-components';
export interface SquareProps {
    color: string;
    x: number;
    y: number;
}

const SquareDiv = styled.div.attrs((props: SquareProps) => ({
    color: props.color || '#000',
    x: props.x || '0',
    y: props.y || '0',
}))`
    position: absolute;
    transition: all 0.25s linear;
    border: 1px solid #000;
    background: ${props => props.color};
    width: 80px;
    height: 80px;
    transform: translate(${props => props.x}px, ${props => props.y}px);
`

function SquareCard({ color, x, y }: SquareProps) {

    return (
        <SquareDiv
            color={color}
            x={x}
            y={y}
        >
        </SquareDiv>
    )
}

export default SquareCard;