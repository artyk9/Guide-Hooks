import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [auth, setAuth] = useState(false);
    const isAuth = localStorage.getItem("auth");

    const handleLogin = () => {
        setAuth((prevState) => !prevState);
        localStorage.setItem("auth", { auth });
    };
    const handleLogOut = () => {
        setAuth((prevState) => !prevState);
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
