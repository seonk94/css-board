import React, { useEffect, useState } from 'react';
import './index.css';
interface SquareProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

function Square({ x, y, width, height }: SquareProps) {
    console.log(x, y)
    return (
        <div className='square' style={{ transform: `translate(${x}px, ${y}px)` }}>

        </div>
    )
}

export default Square;