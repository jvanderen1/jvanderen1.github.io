<script context='module' lang='ts'>
  export const prerender = true
</script>

<script lang='ts'>
  import Counter from '$lib/Counter.svelte'
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h1>
    <picture>
      <source srcset='svelte-welcome.webp' type='image/webp' />
      <img alt='Welcome' class='welcome' src='svelte-welcome.png' />
    </picture>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/index.svelte</strong>
  </h2>

  <Counter />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        width: 100%;
    }
</style>
