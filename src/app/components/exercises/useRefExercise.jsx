import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const [newText, setNewText] = useState("Block");

    const handleChange = () => {
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
        setNewText((prevState) => (prevState = "Text"));
    };
    const handleReset = () => {
        setNewText((prevState) => (prevState = "Block"));
        blockRef.current.style.width = "60px";
        blockRef.current.style.height = "40px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small onClick={handleChange}>{newText}</small>
            </div>
            <button className="btn btn-danger m-2" onClick={handleReset}>
                Reset
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
