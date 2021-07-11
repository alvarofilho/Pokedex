<script>
	import Router, { location, link } from 'svelte-spa-router';
	import Home from "./routes/Home.svelte"
	import About from "./routes/About.svelte"
	import Pokemon from "./routes/Pokemon.svelte"

	const routes = {
		'/': Home,
		'/about': About,
		'/pokemon/:name': Pokemon
	};
</script>

<main>
	<Router routes={routes} />
</main>

<style>
</style>