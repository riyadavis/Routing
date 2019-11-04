import React, { useState, useEffect } from "react";

function CardDetails({ match }) {
  const [item, setItem] = useState([]);
  const [img, setImg] = useState(true);
  // console.log(item);

  useEffect(() => {
    fetchItem();
  }, []);

  useEffect(() => {
    if (item.imgGold) {
      setImg(true);
    } else {
      setImg(false);
    }
  }, [item]);
  const fetchItem = async () => {
    const request = await fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${match.params.id}`,
      {
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
          "x-rapidapi-key": "147df959f4msh5c51b06f900477dp156157jsn6cc9658c1846"
        })
      }
    );
    const response = await request.json();
    setItem(response[0]);
  };

  return (
    <div style={styleDiv}>
      <h1 style={{ textTransform: "uppercase" }}>{item.name}</h1>
      <p>
        <b>Card-Set : </b>
        {item.cardSet}
      </p>
      <p>
        <b>Player-Class : </b>
        {item.playerClass}
      </p>
      <p>
        <b>Type : </b>
        {item.type}
      </p>
      <p>
        <b>Text : </b>
        {item.text}
      </p>
      {img ? <img src={item.imgGold} alt={item.name} /> : ""}
    </div>
  );
}
const styleDiv = {
  backgroundColor: "#f2f4f5",
  height: "100vh",
  padding: 0.5
};
export default CardDetails;
