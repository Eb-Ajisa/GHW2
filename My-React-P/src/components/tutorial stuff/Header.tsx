
type hprops = {
    isLoggedIn: boolean,
    username: string
}
function Header(props: hprops){
    if(props.isLoggedIn){
        return(
            <h1>Hello {props.username}</h1>
        )
    }
}

export default Header