import React from "react";
import photo1 from "../../images/001.jpg";
import photo2 from "../../images/002.jpg";
import photo3 from "../../images/003.jpg";
import photo4 from "../../images/004.jpg";
import photo5 from "../../images/005.jpg";
import photo6 from "../../images/006.jpg";
import photo7 from "../../images/007.jpg";
import photo8 from "../../images/008.jpg";
import photo9 from "../../images/009.jpg";

const Card = ({ item, type }) => {
  const photos = {
    1: photo1,
    2: photo2,
    3: photo3,
    4: photo4,
    5: photo5,
    6: photo6,
    7: photo7,
    8: photo8,
    9: photo9,
  };
  const selectedPhoto = photos[item] || photo1;

  return (
    <div className={type === "flex" ? "flexCard" : "gridCard"}>
      <div className="flexPhotoContainer">
        <img src={selectedPhoto} alt={`card ${item}`} className="flexPhoto" />
      </div>
      <div className="flexText">Card {item}</div>
    </div>
  );
};

export default Card;
