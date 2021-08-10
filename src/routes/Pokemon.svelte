<script>
  import { onMount } from "svelte";
  import Menu from "../components/Menu.svelte"
  import Footer from "../components/Footer.svelte"

  export let params;

  let name = params.name;
  let pokemon;
  let stats = [];

  onMount(async () => loadPokemon());

  const loadPokemon = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    pokemon = await data.json();
    getPokemonStats(pokemon.stats);
    console.log(pokemon)
  };

  const getPokemonStats = (pokemonStats) => {
    pokemonStats.forEach(item => stats.push([item.stat.name, item.base_stat]));
  };

</script>

<svelte:head>
  <title>Pokedex - {name}</title>
</svelte:head>

<main>
  <Menu />
  {#if pokemon}
  <div class="about">
    <img src={pokemon.sprites.other["official-artwork"].front_default} alt={name} />
    <p>#{pokemon.id.toString()
      .padStart(3, '0')}</p>
    <p>{name}</p>
  </div>
  <div class="status">
    {#each stats as stat, i (i)}
    <div class="status-item">
      <p>{stat[0]}: {stat[1]}</p>
    </div>
    {/each}
  </div>
  {:else}
  <p>Loading...</p>
  {/if}
  <Footer />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about img {
    left: 50%;
    height: 300px;
    width: 300px;
  }

  .about p {
    text-align: center;
    text-transform: capitalize;
  }

  .status {
    flex: 1;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    text-transform: capitalize;
    justify-content: center;
  }

  .status-item {
    padding: 50px;
    border: 1px solid #ccc;
  }
</style>