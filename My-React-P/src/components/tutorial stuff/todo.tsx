
import React, { useState } from 'react'

function ToDo()
{
    const [task, settask] = useState("")
    const [tasklist, addtolist] = useState<any>([])

    function handlechange(e: any){
        settask(e.target.value)
    }

    const removetask = (index : any) => {
        const newlist = tasklist.filter((_: any,i: any) => i !== index)
        addtolist(newlist)

    }

    const listadd = () =>{
        if (task.trim() !== ""){
            addtolist((t: any) => [...t,task]);
        }
    }

    const getupp = (index : any) => {
        if(index > 0)
        {
            const newwlist = [...tasklist];
            [newwlist[index], newwlist[index - 1]] = [newwlist[index - 1], newwlist[index]] 
            addtolist(newwlist);
        }
    }
    const getdown = (index : any) => {
        if(index < tasklist.length - 1)
        {
            const newwlistt = [...tasklist];
            [newwlistt[index], newwlistt[index + 1]] = [newwlistt[index + 1], newwlistt[index]] 
            addtolist(newwlistt)
        }

    }
    

    return(
        <div className="todoapp">
            <h1 className="title"> To Do List </h1>
            <input type="text" placeholder="Add A task" value={task} onChange={handlechange}></input>
            <button className="addButt" onClick={() => listadd()}> Add</button>
            <ol>
            {tasklist.map((task :any , index:any ) => <li key={index}>
                <span className='text'> {task} </span>
                <span className="Buttons">
                <button className='delete' onClick={() => removetask(index)}>Delete</button>
                <button className="upper" onClick={() => getupp(index)}> Go Up</button>
                <button className="downer" onClick={() => getdown(index)}> Go Down</button>
                </span>
                 </li>)}
            </ol>
        </div>
    )

}


export default ToDo

/* Css File

.todoapp{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;


}
body{
  background-color: rgb(242, 214, 214)
}

.todoapp .title{
  font-size: 50px;
}
li {
  list-style-type: none;
}

h1{
  font-size: 4rem;
  color: white;
}

button{
  font-size: 1.7rem;
  font-weight: bold;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s ease;
}


.addButt{
  background-color: hsl(125, 47%, 54%);

}

.addButt:hover{
  background-color: hsl(125, 47%, 40%);
}

.delete{
  background-color: hsl(10, 90%, 50%);

}

.delete:hover{
  background-color: hsl(10, 47%, 40%);
}

.upper{
  background-color: hsl(210, 47%, 54%);

}

.upper:hover{
  background-color: hsl(210, 47%, 40%);
}
.downer{
  background-color: hsl(210, 47%, 54%);

}

.downer:hover{
  background-color: hsl(210, 47%, 40%);
}

input[type ="text"]{
  font-size: 1.6rem;
  padding: 10px;
  border: 2px solid hsla(0,0%, 80%, 0.5);
  border-radius: 5px;
  color: hsla(0,0%, 80%, 0.5)
}
ol{
  padding: 10;
}

li{
  font-size: 2rem;
  font-weight:bold;
  padding: 15px;
  background-color: hsl(0,0%,97%);
  margin-bottom:10px;
  border: 3px solid hsla(0,0%, 80%, 0.75);
  border-radius: 5px;
  display: flex;
  align-items:center;
}

.text{
  flex: 1;
}

.delete .upper .downer {
  padding: 8px 12px;
  margin-left: 10px;
  font-size: 1.5rem;
}

*/