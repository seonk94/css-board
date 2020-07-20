export default class Square {
    private _x: number;
    private _y: number;
    private _color: string;
    constructor(x: number, y: number, color: string) {
        this._x = x;
        this._y = y;
        this._color = color;
    }

    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get color() {
        return this._color;
    }

    set x(value: number) {
        this._x = value;
    }
    set y(value: number) {
        this._y = value;
    }
    set color(value: string) {
        this._color = value;
    }
}