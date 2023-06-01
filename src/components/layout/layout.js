import React from "react";
import Home from "../Home"
export default function Layout({children}) {

    return (
        <div className="mainsection">
            {/* <Home /> */}
            {children}
        </div>
    );
}