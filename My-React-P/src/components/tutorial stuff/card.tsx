import profile from '../assets/IMG_7539.jpeg'
function Card(){
    return(
        <div className="card">
            <img className="cardimg" src={profile} alt="profile picture"></img>
            <h2 className="cardTitle">Ifunyaa</h2>
            <p className="cardText">Computer Science Major that loves anime</p>
        </div>
    )
}
export default Card;

/*
html{
  background-color: rgb(255, 255, 255);
}

.card{
  border: 1px solid rgb(129, 103, 103);
  border-radius: 5px;
  box-shadow: 5px 5px 5px 5px rgba(223, 133, 133, 0.50);
  padding: 20px;
  margin: 10px;
  width: 500px;
  height: 600px;
  text-align: center;
  display: inline-block;
}

.card .card-image{
  max-width: 60%;
  height: auto;
  border-radius:50%;
  margin-bottom: 10px;
}

.card .cardTitle{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color : rgb(129, 86, 86);
  font-size:25px;
}

.card .cardText{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color : rgb(129, 86, 86);
  font-size:20px;
}
*/