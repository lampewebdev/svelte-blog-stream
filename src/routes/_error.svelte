<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>
<div class="columns is-mobile is-centered">
	<div class="column is-full-mobile is-three-quarters-tablet">
		<section class="section">
			<h1>ERROR PAGE</h1>
			<h1>{status}</h1>
			<p>Oppsie!</p>
			<p>{error.message}</p>
			{#if dev && error.stack}
				<pre>{error.stack}</pre>
			{/if}
		</section>
	</div>
</div>