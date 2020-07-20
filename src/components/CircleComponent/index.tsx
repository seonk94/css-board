import React, { useEffect, useState } from 'react';
import SquareCard from '../SquareCard';
import './index.css'
import { colorList } from '../../constants/Colors';
import Button from '../../style/common/Button';
import Square from '../../model/Square';
interface CircleComponentProps {
    parentSize: number;
    angle: number;
    count: number
}

function CircleComponent({ parentSize, angle, count }: CircleComponentProps) {


    const radius = parentSize / 2
    const positions: { x: number, y: number }[] = []
    const [squares, setSquares] = useState<Square[]>([])

    const dx = [1, -1];
    const dy = [-1, 1];

    useEffect(() => {
        init();
    }, [])


    const init = () => {
        for (let i = angle; i >= 0; i -= angle / count) {
            positions.push({
                x: Math.floor(radius * Math.cos(degreesToRadius(i))),
                y: Math.floor(radius * Math.sin(degreesToRadius(i))),
            })
        }

        backTracking(positions.length - 2, 0, 0)
        backTracking(positions.length - 2, 1, 1)

        positions.forEach((position, index) => {
            setSquares(state => [...state, new Square(
                position.x + radius - (parentSize / 6) / 2,
                position.y + radius - (parentSize / 6) / 2,
                colorList[index],
            )])
        })
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

    const next = () => {
        const newSquares = [...squares];
        const end = newSquares.length - 1;
        const [tempX, tempY] = [newSquares[0].x, newSquares[0].y]

        for (let i = 0; i < end; i++) {
            const current = newSquares[i];
            const next = newSquares[i + 1];
            current.x = next.x;
            current.y = next.y;
        }

        newSquares[end].x = tempX;
        newSquares[end].y = tempY;

        setSquares(newSquares)
    }

    const prev = () => {
        const newSquares = [...squares];
        const end = newSquares.length - 1;

        const tempX = newSquares[end].x;
        const tempY = newSquares[end].y;

        for (let i = end; i > 0; i--) {
            const current = newSquares[i];
            const next = newSquares[i - 1];
            current.x = next.x;
            current.y = next.y;
        }
        newSquares[0].x = tempX;
        newSquares[0].y = tempY;

        setSquares(newSquares)
    }


    return (
        <div className="circle-container">
            <div className="prev-btn" onClick={prev}>
                <Button>Prev</Button>
            </div>
            <div className="circle-div">
                {squares.map((square, index) => <SquareCard
                    key={index}
                    x={square.x}
                    y={square.y}
                    color={square.color}
                />)}
            </div>
            <div className="next-btn" onClick={next}>
                <Button>Next</Button>
            </div>
        </div>
    );
}

export default CircleComponent;
