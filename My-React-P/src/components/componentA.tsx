import ComponentB from "./componentB";
import React from "react";
import { useState, createContext } from "react";

  export const UserContext = createContext("");
function ComponentA() {

    const [user, setUser] = useState("BroCode");

    const handlechange = (e:any) => {
       setUser(e.target.value)
   }
    return (
        <div className="Box">
                <input type='text' value={user} onChange={handlechange}></input>
                <h1>Component A</h1>
                <h2>Hello {user}</h2>
                <UserContext.Provider value={user} >
                <ComponentB/>
                </UserContext.Provider>
            </div>
        );
        
    }   

    export default ComponentA                
  


   // <input value={user} onChange={(e) =>handlechange(e)} type="text">test</input>