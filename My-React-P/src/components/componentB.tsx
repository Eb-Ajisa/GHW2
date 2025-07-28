import ComponentC from "./componentC";

import React from "react";
import { UserContext } from "./componentA";
import { useContext } from "react";
function ComponentB() {
    const user = useContext(UserContext);
        return (
            <div className="Box">
                <h1>Component B</h1>
                <h2> Hello {user}</h2>
                <ComponentC />
            </div>
        );
    }   

    export default ComponentB