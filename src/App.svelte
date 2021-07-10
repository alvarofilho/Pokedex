<script>
	import { onMount } from "svelte";
	import Pokemon from "./components/Pokemon.svelte"
	import Menu from "./components/Menu.svelte"
	import Footer from "./components/Footer.svelte"

	let pokemons;

	onMount(async () => {
		//897
		await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
			.then(r => r.json())
			.then(data => {
				pokemons = data.results;
			});
	});

</script>

<main>
	<Menu />

	<input class="search" type="text" name="searchPokemon" placeholder="Search by name, number.." />

	<div class="pokemon-container">
		{#if pokemons}
			{#each pokemons as pokemon, i}
				<Pokemon id={i + 1} url={pokemon.url} />
			{/each}
		{:else}
			<p>Loading...</p>
		{/if}
	</div>

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

	.pokemon-container {
		display: flex;
		flex-wrap: wrap;

		justify-content: center;

		margin: 0 auto;
		max-width: 1200px;
	}

	input {
		width: 100%;
		display: flex;
		flex-direction: row;
		-moz-box-align: center;
		align-items: center;
		margin: 10px 0px 50px;
		padding: 0px 20px;
		height: 60px;
		background: rgb(242, 242, 242) none repeat scroll 0% 0%;
		border-radius: 10px;
		border: 2px solid transparent;
	}
</style>