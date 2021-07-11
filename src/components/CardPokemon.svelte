<script>
  import { onMount } from "svelte";
  import { getColorType } from "../ultis.js";

  export let name;
  export let url;

  let backgroundColor;
  let pokemon;
  let sprite;

  onMount(async () => {
    const response = await fetch(url);
    pokemon = await response.json();

    if (pokemon.types[0].type.name === 'normal' && pokemon.types.length > 1) {
      backgroundColor = getColorType(pokemon.types[1].type.name);
    } else {
      backgroundColor = getColorType(pokemon.types[0].type.name);
    }
  });

</script>

<main>
  <div class="pokemon" style="--color: {backgroundColor}">
    {#if pokemon}
      <a href="{`#/pokemon/${name}/`}">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
        <p class="pokemon-id">#{pokemon.id}</p>
        <p class="pokemon-name">{pokemon.name}</p>
        <p class="pokemon-type">{pokemon.types[0].type.name}</p>
      </a>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</main>

<style>
  a {
    text-decoration: none;
  }

  .pokemon {
    background-color: var(--color);

    border-radius: 20px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);

    margin: 5px;
    padding: 20px;

    text-align: center;
    text-transform: capitalize;
  }

  .pokemon-name {
    margin: 15px 0 7px;
    letter-spacing: 1px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  .pokemon-id {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    border-radius: 10px;
    font-size: 0.8em;
    padding: 5px 10px;
  }

  .pokemon-type {
    color: white;
  }

  .pokemon img {
    width: 120px;
    height: 120px;
    text-align: center;

    filter: grayscale(100%);
    transition: all ease 0.4s;
  }

  .pokemon img:hover {
    cursor: pointer;
    filter: grayscale(0);
  }
</style>