import React, { useState, useEffect } from "react";

function Home() {
  const [image, setImage] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
  }, [image]);

  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>Welcome Madness</h1>
      <div>
        <p>
          Hey you....!! <b>Homosapiens</b> are allowed to access the site....
          <br />
          <b>Wie heißt du ?..</b>Your Name, your identity.!!
        </p>
      </div>
      <input
        style={styleName}
        type="text"
        placeholder="Name Please"
        onInput={e => setImage(e.target.value)}
      />
      <button
        style={styleBtn}
        onClick={() => {
          setRefresh(true);
        }}
      >
        Submit
      </button>
      <React.Fragment>
        {refresh ? (
          <div>
            <img src={`https://robohash.org/${image}.png`}></img>
            <p>
              Get out
              <strong>, Humanoid Robo @{image}</strong>
            </p>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    </div>
  );
}
const styleBtn = {
  padding: 6,
  borderRadius: 3,
  backgroundColor: "#F1B624",
  border: "1px solid #F1B624",
  margin: 5
};

const styleName = {
  padding: 5,
  borderRadius: 5
};
export default Home;
