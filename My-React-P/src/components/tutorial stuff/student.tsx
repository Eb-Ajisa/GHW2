
type studentprops = {
    stud:{
        name: string,
        age: number
    }[]
}

function students(props: studentprops){

    return(
        <div>
            <h1>{props.stud.map((stud) => <li>{stud.name} my age is {stud.age}</li>)}</h1>
        </div>
    )
}

export default students