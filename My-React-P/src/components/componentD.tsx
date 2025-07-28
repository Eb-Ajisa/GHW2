import React, { use, useContext } from "react";
import {UserContext} from "./componentA.tsx";
function ComponentD() {

    const user = useContext(UserContext);
        return (
            <div className="Box">
                <h1>Component D</h1>
                <h2>Hello {user}</h2>
            </div>
        );
    }   

    export default ComponentD