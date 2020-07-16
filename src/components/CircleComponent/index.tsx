import React, { useEffect, useState } from 'react';

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
    }

    const degreesToRadius = (degrees: number) => {
        const pi = Math.PI;
        return degrees * (pi / 180);
    }

    const backTracking = (start: number, end: number, c: number) => {
        if (end <= start) {
            positions.push({
                x: positions[start].x * dx[c],
                y: positions[end].y * dy[c],
            });

            backTracking(start - 1, end, c);
        }
    }

    init();
    console.log(positions)

    return (
        <div></div>
    );
}

export default CircleComponent;