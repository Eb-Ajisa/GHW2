import React, { useState } from 'react'

function MyComp(){
const [name, setname] = useState("Guest");
const [quantity, setq] = useState()
const [payment, setpayment] = useState()
const [method, setmethod] = useState()

    function handleNamechange(e : any){
        setname(e.target.value)
    }
    function handleq(e: any){
        setq(e.target.value)
    }

    function handlepayment(e : any){
        setpayment(e.target.value)
    }

    function handlemethod(e: any){
        setmethod(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNamechange} /> 
            <p> name: {name}</p>

            <input value={quantity} onChange={handleq} type="number" />
            <p> quantity: {quantity}</p>

            <p>Payment: {payment} </p>
            <select value={payment} onChange={handlepayment}>
                <option value="">-- Select Payment --</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
            </select>

            <label>
                <input type='radio' value='pickup' checked={method === 'pickup'}
                 onChange={handlemethod} />
                Pickup
            </label>
            <label>
                <input type='radio' value='Delivery' checked={method === 'Delivery'}
                 onChange={handlemethod} />
                Delivery
            </label>

        </div>

    )
}

export default MyComp