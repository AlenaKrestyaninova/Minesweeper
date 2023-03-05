import React from "react";
import './Main.css';

const Mine = -1;

function createField(size) {
    const field = new Array(size * size).fill(0);

    function inc(x, y) {
        if (x >= 0 && x < size && y >= 0 && y < size) {
            if (field[y * size + x] === Mine) return;
            field[y * size + x] += 1;
        }
    }

    for (let i = 0; i < 40;) {
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);
        if (field[y * size + x] === Mine) continue;
        field[y * size + x] = Mine;
        i += 1;
        inc(x + 1, y);
        inc(x - 1, y);
        inc(x, y + 1);
        inc(x, y - 1);
        inc(x + 1, y - 1);
        inc(x - 1, y - 1);
        inc(x + 1, y + 1);
        inc(x - 1, y + 1);
    }

    return field;
}

function Main() {
    const size = 16;
    const dimension = new Array(size).fill(null)
    const [field, setField] = React.useState(() => createField(size));
    const [cover, setCover] = React.useState(() => new Array(size * size).fill(0))

    return (
        <div className="field">
            {dimension.map((_, y) => {
                return (
                    <div key={y} className="field__row">
                        {dimension.map((_, x) => {
                            return(<div key={x} className="field__cell">{
                                field[y * size + x] === Mine ? 'b' : field[y * size + x]
                                }</div>)
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Main;