/*
import React, { useState } from 'react'
function MyComp(){

    const [number, setNumber] = useState(0);

    const Increment = () => {
        setNumber(number + 1)
    }
    const Decrement = () => {
        setNumber(number - 1)
    }
    const Reset = () => {
        setNumber(0)
    }
    if(number === 10){
        alert("You have reached 10")
    }

    return(
        <div className="Stopwatch">
            <p className="num">{number}</p>
            <button className="butt" id="butt1" onClick={Increment}>Increment</button>
            <button className="butt"id ="butt2" onClick={Reset}>Reset</button>
            <button className="butt" id="butt3" onClick={Decrement}>Decrement</button>


        </div>
    )
}


export default MyComp


.Stopwatch .num{
  font-size: 50px;
  position: relative;

  font-weight: bold;
  left: 30%;


}

.Stopwatch{
  position: relative;
  top: 40%;
  left: 15%;
  margin-top: 30%;
 


}

.Stopwatch .butt{
  font-size: 30px;
  padding: 5%;
  top: 50;
  border: none;
  box-shadow: 5px 5px 5px 5px black ;


}

.Stopwatch #butt3{
  font-size: 30px;
  padding: 5%;
  position: relative;
  top: 50%;
  left: 5%;

}

.Stopwatch #butt2{
  font-size: 30px;
  padding: 5%;

}

.Stopwatch #butt1{
  font-size: 30px;
  padding: 5%;
  position: relative;
  right: 5%;



}
  
*/