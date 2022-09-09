import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleChangeWidth = () => {
        inputRef.current.style.width = "50%";
    };
    const handleReset = () => {
        inputRef.current.style.width = "100%";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Focus Input
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={handleChangeWidth}
            >
                Change Width
            </button>
            <button className="btn btn-danger m-2" onClick={handleReset}>
                Change Width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
