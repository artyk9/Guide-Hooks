import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [render, setRender] = useState(0);
    const isAuth = localStorage.getItem("auth");
    console.log(render);

    const handleLogin = () => {
        setRender((prevState) => prevState + 1);
        localStorage.setItem("auth", "token");
    };
    const handleLogOut = () => {
        setRender((prevState) => prevState + 1);
        localStorage.removeItem("auth");
    };
    return (
        <>
            <CardWrapper>
                <Component
                    {...props}
                    render
                    isAuth={isAuth}
                    onLogin={handleLogin}
                    onLogOut={handleLogOut}
                />
            </CardWrapper>
        </>
    );
};

export default withFunctions;
