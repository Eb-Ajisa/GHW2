
import { useState } from "react";
import { useEffect } from "react";

function Clock(){


    const [time, settime] = useState(new Date())
    useEffect(()=> {
        const IntervalID = setInterval(() => {
            settime(new Date())
        }, 1000)

        return () =>
        {
            clearInterval(IntervalID)
        }
    },[])


    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number : any){
        return (number < 10 ? "0" : "") + number
    }
    return(
        <div className="container">
            <div className="Clock">
                <span>{formatTime()}</span>
            </div>
            


        </div>
    )
}


export default Clock

/*

body{
    margin: 0;
    background-color: aquamarine;
    display:flex;
    justify-content: center;
    min-height:100vh;
    align-items: center;
}

.container{
    backdrop-filter: blur(5px);
    width: 100vw;
    padding: 10px 0;
}

.Clock{
    color: white;
    font-size: 6rem;
    font-weight: bold;
    font-family: monospace;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.752);
    text-align: center;

}

*/