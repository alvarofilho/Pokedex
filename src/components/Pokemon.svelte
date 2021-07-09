<script>
  import { onMount } from "svelte";
  export let id;
  export let url;
  let pokemon;
  let sprite;

  onMount(async () => {
    const response = await fetch(url);
    pokemon = await response.json();
  });
</script>

<main>
  <div class="pokemon">
    {#if pokemon}
    <a href="{`pokemon/${id}/`}">
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
      <p class="pokemon-id">#{id}</p>
      <p class="pokemon-name">{pokemon.name}</p>
      <p class="pokemon-type">{pokemon.types[0].type.name}</p>
    </a>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</main>

<style>
  .pokemon {
    background-color: greenyellow;

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
  }

  .pokemon-id {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    border-radius: 10px;
    font-size: 0.8em;
    padding: 5px 10px;
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