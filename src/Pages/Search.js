import React, { useEffect } from "react";

function Search({ match }) {
  console.log(match.params.keyword);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const request = await fetch(`https://api.lyrics.ovh/v1/Coldplay/X&Y`);
    const response = await request.json();
    console.log(response);
  };
  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
}

export default Search;
