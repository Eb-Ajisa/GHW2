
function Profiler(){
    const imageurl = 'src/assets/IMG_7539.jpeg'

    const handleclick = (e : any) => {
        console.log("hello")
        e.target.style.display ="none";
    }
    return(
        <img onClick={(e) =>handleclick(e)} src={imageurl} alt="profile picture"></img>
    )
}

export default Profiler