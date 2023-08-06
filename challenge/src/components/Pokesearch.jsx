import React, { useState } from "react";

export default function Pokesearch() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  async function searchPokemon() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}`
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
        width: "20%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1>Search for a Pokemon</h1>
      <input
        type="text"
        placeholder="Search for a Pokemon"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchPokemon} style={{ transform: "scale(0.8)" }}>
        {isLoading ? "Loading..." : "Search"}{" "}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemon && (
        <table>
          <thead>
            <tr>
              <th>Abilities</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pokemon.abilities.join(", ")}</td>
              <td>{pokemon.height}</td>
              <td>{pokemon.weight}</td>
              <td>{pokemon.types.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
