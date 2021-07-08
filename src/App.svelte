<script>
	import Pokemon from "./components/Pokemon.svelte"
	let pokemons = ["", "", "", "", "", ""]
</script>

<main>
	<h1>Pokedex</h1>
	<nav>
		<p>Home</p>
		<p>About</p>
	</nav>

	<input class="search" type="text" name="searchPokemon" placeholder="Search by name, number.." />

	<div class="pokemon-container">
		{#each pokemons as pokemon}
			<Pokemon name="Ditto" id="132" type="Fire, Grass" />
		{/each}
	</div>

	<footer>
		<p>By <a href="http://github.com/alvarofilho">Álvaro Filho</a> with Svelte </p>
		<p><a href="http://github.com/alvarofilho/pokedex">Github</a></p>
	</footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.pokemon-container {
		display: flex;
		flex-wrap: wrap;
		align-items: space-between;
		justify-content: center;
		margin: 0 auto;
		max-width: 1200px;
	}
</style>