<script context="module">
	export function preload() {
		return this.fetch("index.json")
			.then(request => request.json())
			.then(metadata => {
				return { metadata };
			});
	}
</script>

<script>
	export let metadata;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	.main-page {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
		<title>Blog</title>
</svelte:head>

<div class="main-page">
	<h1>Recent posts</h1>
	{#await metadata}
		<p>loading...</p>
	{:then value}
		<ul>
			{#each value as post}
				<li><a rel='prefetch' href='/post/{post.slug}'>{post.title}</a></li>
			{/each}
		</ul>
	{:catch error}
		<p>Oppsie!</p>
	{error}
	{/await}
</div>