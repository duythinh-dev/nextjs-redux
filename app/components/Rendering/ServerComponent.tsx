async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

  // Parse the JSON
  const data = await response.json();

  return data;
}

export default async function Page() {
  const allPokemons = await getData();
  console.log("allPokemons :", allPokemons);

  return (
    <ul>
      {/* mapping all the data inside an unordered list */}
      {allPokemons.results.map((poke: { name: string; url: string }) => (
        <li key={poke.url}>{poke.name}</li>
      ))}
    </ul>
  );
}
