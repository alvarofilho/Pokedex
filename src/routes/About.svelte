<script>
  import Menu from "../components/Menu.svelte"
  import Footer from "../components/Footer.svelte"
</script>

<main>
  <Menu />
  <p>Project created with the intention of studying Svelte and its technologies. </p>
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