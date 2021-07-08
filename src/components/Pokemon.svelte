<script>
 export let name;
 export let id;
 export let type;
</script>

<main>
  <div class="pokemon">
    <a href="#">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" />
      <p class="pokemon-id">#{id}</p>
      <p class="pokemon-name">{name}</p>
      <p class="pokemon-type">{type}</p>
    </a>
  </div>
</main>

<style>
  .pokemon-container {
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
  }

  .pokemon {
    background-color: greenyellow;
    border-radius: 20px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
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
    -webkit-transition: -webkit-filter 400ms ease;
    transition: all ease 0.4s;
  }

  .pokemon img:hover {
    cursor: pointer;
    filter: grayscale(0);
  }
</style>