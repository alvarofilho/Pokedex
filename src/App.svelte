<script>
</script>

<main>
	<h1>Pokedex</h1>
	<nav>
		<p>Home</p>
		<p>About</p>
	</nav>

	<input class="search" type="text" name="searchPokemon" placeholder="Search by name, number.."/>

	<div class="pokemon">
		<a href="#">
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"/>
			<h2>#132 - Ditto</h2>
		</a>
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
</style>