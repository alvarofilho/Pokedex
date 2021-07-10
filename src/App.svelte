<script>
	import { onMount } from "svelte";
	import Pokemon from "./components/Pokemon.svelte"
	import Menu from "./components/Menu.svelte"
	import Footer from "./components/Footer.svelte"

	const LIMIT = 14;

	let pokemons;
	let offset = 0;
	let searchValue;

	onMount(async () => {
		await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`)
			.then(r => r.json()).then(data => pokemons = data.results);
	});

	const loadMore = async () => {
		offset += LIMIT;
		let data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${LIMIT}`).then(r => r.json());
		pokemons = [...pokemons, ...data.results];
	};

	const search = async () => {
		if (searchValue.length > 2) {
			let data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${750}`).then(r => r.json());
			searchValue = searchValue.toLocaleLowerCase();
			pokemons = data.results.filter((item) => item.name.includes(searchValue));
		}
	};

</script>

<main>
	<Menu />

	<input class="search" type="text" name="searchPokemon" placeholder="Search by name, number.." bind:value={searchValue}
		on:input={search} />

	<div class="pokemon-container">
		{#if pokemons}
		{#each pokemons as pokemon, i (pokemon.name)}
		<Pokemon id={i + 1} url={pokemon.url} />
		{/each}
		{:else}
		<p>Loading...</p>
		{/if}
	</div>

	<button type="button" class="btn" on:click={loadMore}>Load more...</button>

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
		align-items: center;
		margin: 10px 0px 50px;
		padding: 0px 20px;
		height: 60px;
		background: rgb(242, 242, 242) none repeat scroll 0% 0%;
		border-radius: 10px;
		border: 2px solid transparent;
	}

	.btn {
		font-size: 20px;
		color: rgb(255, 255, 255);
		width: 50%;
		height: 50px;
		background: rgb(90, 146, 165) none repeat scroll 0% 0%;
		margin: 30px auto 0px;
		outline: currentcolor none 0px;
		border: 0px none;
		border-radius: 4px;
		opacity: 0.8;
		transition: all 0.2s linear 0s;
	}

	.btn:hover {
		opacity: 1;
		cursor: pointer;
	}
</style>