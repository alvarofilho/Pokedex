<script>
	import router from "page"
	import Home from "./routes/Home.svelte"
	import About from "./routes/About.svelte"
	import Pokemon from "./routes/Pokemon.svelte"

	let page;
	router('/', () => page = Home);
	router('/about', () => page = About);

	let params;
	router('/pokemon/:id', (ctx, next) => {
		params = ctx.params
		next()
	}, () => page = Pokemon);

	router.start();
</script>

<main>
	<svelte:component this={page} params="{params}" />
</main>

<style>
</style>