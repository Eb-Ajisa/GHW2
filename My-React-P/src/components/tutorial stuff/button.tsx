

function Button(){
    let count = 0;
    const handleClick = ( e : any, name? : string) => {
        if(count <3){
            count++;
        }
        else{
            window.open("https://google.com", "_blank");
            e.target.textContent = "Clicked";
            name ? alert(`Hello ${name}`) : alert("Hello")
        }
    };

        const styles = {
        backgroundColor: "black",
        color: "white"
    }
    
    return(
        <button style={styles} id="butt" onClick={(e) => handleClick(e, "john")}>Click Me</button>
    )
}

export default Button