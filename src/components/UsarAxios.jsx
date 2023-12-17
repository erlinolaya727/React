import { useState, useEffect } from "react";
import axios from "axios";
//import { APIC } from "./config/ApiUrl";
//const URI=APIC("character");
const UsarAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URI = "https://rickandmortyapi.com/api/character";
        const response = await axios({
          method: "GET",
          url: URI
        });
        console.log(response);
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((character) => (
          <div key={character.id} style={{ margin: "10px" }}>
            <img src={character.image} alt={character.name} style={{ width: "200px", height: "200px" }} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsarAxios;
