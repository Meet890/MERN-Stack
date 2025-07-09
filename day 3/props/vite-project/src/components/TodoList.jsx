import React, { useState } from "react";

function TodoList() {
    const [colors, setColors] = useState([]);
    const addColor = () => {
        const color = prompt("Enter a color:");
        if (color) {
            setColors([...colors, color]);
        }
    };
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4" onClick={addColor}>
                Add Color
            </button>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>{color}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;