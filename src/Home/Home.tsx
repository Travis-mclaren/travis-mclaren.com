import React from "react";
import './Home.scss';
import Tile from './Tile';

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <Tile backgroundColor={"#f72585"} gridAreaClassname={"box1"} tileText={"HEY"} />
        <Tile backgroundColor={"#7209b7"} gridAreaClassname={"box2"} tileText={"HEY"} />
        <Tile backgroundColor={"#3a0ca3"} gridAreaClassname={"box3"} tileText={"HEY"} />
        <Tile backgroundColor={"#4361ee"} gridAreaClassname={"box4"} tileText={"HEY"} />
        <Tile backgroundColor={"#4cc9f0"} gridAreaClassname={"box5"} tileText={"HEY"} />
        <Tile backgroundColor={"#f72585"} gridAreaClassname={"box6"} tileText={"HEY"} />
        <Tile backgroundColor={"#7209b7"} gridAreaClassname={"box7"} tileText={"HEY"} />
        <Tile backgroundColor={"#3a0ca3"} gridAreaClassname={"box8"} tileText={"HEY"} />
      </div>
    </div>  
  ) 
}

export default Home;