import React, { useState, useEffect } from "react";
// import ItemDetails from "./ItemDetails";
import { Link } from "react-router-dom";

function Cards() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const request = await fetch(
      "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Dream",
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
    // console.log(response);
    setItems(response);
  };

  return (
    <div>
      <h1>Available Cards</h1>
      <div style={styleCard}>
        {items.map(r => (
          <p
            key={r.cardId}
            style={{
              padding: 5,
              borderBottom: "1px dotted white"
            }}
          >
            <Link to={`/cards/${r.cardId}`}>{r.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}
const styleCard = {
  backgroundColor: "#dce1e8",
  margin: "0px 250px"
};
export default Cards;
