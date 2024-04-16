import React, { useState } from "react";


export default function Pokesearch() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  async function searchPokemon() {
    try {
      setLoading(true);
      //trim() trims all whitespace in the search, while toLowerCase()
      //  allows us to compare the input against the API value without case-sensitivity
      const fixedSearch = search.trim().toLowerCase()
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${fixedSearch}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      setPokemon({
        abilities: data.abilities.map((ability) => ability.ability.name),
        height: data.height,
        weight: data.weight,
        types: data.types.map((type) => type.type.name),
        //sets image to the shiny image of the selected pokemon
        //provided by the sprites package of the API
        image: data.sprites.front_shiny,
      });
      setError(null);
    } catch (error) {
      setPokemon(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1 
        style={{
          fontFamily: 'monospace', 
          fontSize: '22px',
          color: 'black', 
          textAlign: 'center',
          margin: '20px 0',
          marginBottom: '20px',
        }}>
          Search for a Pokemon
      </h1>

      <input 
        style={{
          marginBottom: "10px"

        }}
        type="text"
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchPokemon} style={{ transform: "scale(0.8)" }}>
        {isLoading ? "Loading..." : "Search"}{" "}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemon && (
  <div>

    <div>
      <img 
        src={pokemon.image} 
        alt={pokemon.name} 
        style={{ 
          width: '200px', 
          height: '200px', 
          marginTop: '10px', 
          marginBottom: '10px', 
        }} 
      />
    </div>

    <div style={{ marginLeft: '-60px' }}>

      <table style={{
          borderCollapse: 'collapse',
          border: '5px solid black',
          fontFamily: 'monospace',
          fontSize: '15px',
          textAlign: 'center',
        }}>

        <thead> 
          <tr style={{ backgroundColor: 'lightblue', textDecoration: 'underline'}}>
            <th style={{ width: '50%', padding: '20px'}}>Abilities</th>
            <th style={{ width: '50%', padding: '20px' }}>Height</th>
            <th style={{ width: '50%', padding: '20px' }}>Weight</th>
            <th style={{ width: '50%', padding: '20px' }}>Types</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ backgroundColor: 'white' }}>

            <td style={{ width: '50%', padding: '20px', whiteSpace: 'nowrap', verticalAlign: 'baseline'}}>
              {pokemon.abilities.map((ability, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>{ability}</div>
              ))}
            </td>

            <td style={{ width: '50%', padding: '20px', verticalAlign: 'baseline' }}> 
              {pokemon.height}
            </td>

            <td style={{ width: '50%', padding: '20px', verticalAlign: 'baseline' }}>
              {pokemon.weight}
            </td>

            <td style={{ width: '50%', padding: '20px', whiteSpace: 'nowrap', verticalAlign: 'baseline' }}>
              {pokemon.types.map((ability, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>{ability}</div>
              ))}
            </td>

          </tr> 
        </tbody> 

      </table>

      </div>

    </div>

    )}

  </div>
  );
}
