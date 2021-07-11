<script>
  import { onMount } from "svelte";
  import Menu from "../components/Menu.svelte"
  import Footer from "../components/Footer.svelte"

  export let params;

  let id = params.id;
  let pokemon = [];

  onMount(async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    pokemon = await data.json();
  });

</script>

<main>
  <Menu />

  <p>{pokemon.name}</p>
  <p>{pokemon.weight}</p>

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
</style>