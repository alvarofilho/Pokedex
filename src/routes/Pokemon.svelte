<script>
  import { onMount } from "svelte";
  import Menu from "../components/Menu.svelte"
  import Footer from "../components/Footer.svelte"

  export let params;

  let name = params.name;
  let pokemon;

  onMount(async () => loadPokemon());

  const loadPokemon = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    pokemon = await data.json();
  };

</script>

<main>
  <Menu />
  {#if pokemon}
  <div class="about">
    <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
    <p>#{pokemon.id}</p>
    <p>Name: {pokemon.name}</p>
  </div>
  <div class="menu">
    <p>About</p>
    <p>Stats</p>
    <p>Evolution</p>
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

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .menu p:hover {
    cursor: pointer;
  }
</style>