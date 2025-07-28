
type catprops= {
    category: string
}

type fruitsprops = {
    fru:{
        id: number
        name: string,
        calories: number
    }[]
}
function List(props: fruitsprops & catprops){
    props.fru.sort((a,b) => b.name.localeCompare(a.name));
    const listed = props.fru.map((fruit) => <li key={fruit.id}>{fruit.name} 
                : <b>{fruit.calories}</b></li>)
    return(
        <>
        <h3>{props.category}</h3>
        <ul>{listed}</ul>
        </>
    )
}

export default List