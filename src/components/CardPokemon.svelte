<script>
  import { onMount } from "svelte";
  import { getColorType } from "../ultis.js";

  export let name;
  export let url;

  let backgroundColor;
  let pokemon;
  let sprite;
  let types;

  onMount(async () => {
    const response = await fetch(url);
    pokemon = await response.json();

    types = pokemon.types
      .map(item => item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1));

    if (types[0] === 'Normal' && types.length > 1) {
      backgroundColor = getColorType(types[1]);
    } else {
      backgroundColor = getColorType(types[0]);
    }
  });

</script>

<main>
  <div class="pokemon" style="--color: {backgroundColor}">
    {#if pokemon}
    <a href="{`#/pokemon/${name}/`}">
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      <p class="pokemon-id">#{pokemon.id.toString()
        .padStart(3, '0')}</p>
      <p class="pokemon-name">{pokemon.name}</p>
      <p class="pokemon-type">Type: {types}</p>
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