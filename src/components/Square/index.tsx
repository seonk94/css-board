import React, { useEffect, useState } from 'react';
import './index.css';
interface SquareProps {
    color: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

function Square({ color, x, y, width, height }: SquareProps) {
    return (
        <div className='square' style={{ background: color, transform: `translate(${x}px, ${y}px)` }}>

        </div>
    )
}

export default Square;