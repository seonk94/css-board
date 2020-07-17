import React, { useEffect, useState } from 'react';
import Square from '../Square';
import './index.css'
interface CircleComponentProps {
    parentSize: number;
    angle: number;
    count: number
}
function CircleComponent({ parentSize, angle, count }: CircleComponentProps) {


    const [radius, setRadius] = useState(parentSize / 2);
    const [positions, setPositions] = useState<{ x: number, y: number }[]>([]);

    const dx = [1, -1];
    const dy = [-1, 1];

    const init = () => {

        for (let i = angle; i >= 0; i -= angle / count) {
            positions.push({
                x: Math.floor(radius * Math.cos(degreesToRadius(i))),
                y: Math.floor(radius * Math.sin(degreesToRadius(i))),
            })
        }

        backTracking(positions.length - 2, 0, 0)
        backTracking(positions.length - 2, 1, 1)
    }

    const degreesToRadius = (degrees: number) => {
        const pi = Math.PI;
        return degrees * (pi / 180);
    }

    const backTracking = (start: number, end: number, c: number) => {
        if (end <= start) {
            positions.push({
                x: positions[start].x * dx[c],
                y: positions[start].y * dy[c],
            });
            backTracking(start - 1, end, c);
        }
    }

    init();
    console.log(positions)

    return (
        <div className="circle-container">
            {positions.map((item, i) => {
                return <Square
                    x={item.x + radius - (parentSize / 6) / 2}
                    y={item.y + radius - (parentSize / 6) / 2}
                    height={parentSize / 6}
                    width={parentSize / 6} />
            })}
        </div>
    );
}

export default CircleComponent;