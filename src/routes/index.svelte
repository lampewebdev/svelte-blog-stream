<script context="module">
	export function preload() {
		return this.fetch('index.json')
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
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>
{#await metadata}
	<p>loading...</p>
{:then value}
	{#each value as post}
		<li><a rel='prefetch' href='/post/{post.slug}'>{post.title}</a></li>
	{/each}
{:catch error}
	<p>Oppsie!</p>
	{error}
{/await}
<ul>
</ul>