
import React, { useEffect, useState } from 'react'

function Effcom() {
//useEffect(()=>{},[]) perform code only once
//useEffect(()=>{},[state]) perform code when state changes and on mount
//UseEffect(() => {}) perform code on every render

const [count,setcount] = useState(0)
const [width, setwidth] = useState(window.innerWidth)
const [height, setheight] = useState(window.innerHeight)

useEffect(() => {
    document.title = `count: ${count}`
})

function handlesize(){
    setheight(window.innerHeight)
    setwidth(window.innerWidth)
}

useEffect(() =>
{
    window.addEventListener("resize", handlesize);
    console.log("added")

    return () =>
    {
        window.removeEventListener("resize", handlesize)
        console.log("Removed")
    }
}, [])
function addcount(){
    setcount(c => c+1)
}
return(
    <>
        <p>Count: {count}</p>
        <button onClick={addcount}>Add</button>
        <p>Window Width {width}</p>
        <p>Window Height {height}</p>
    </>
)
}

export default Effcom