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
	export let bar = "great-success";
</script>

<svelte:head>
		<title>Blog</title>
</svelte:head>

<div class="main-page">
	<h1>Recent posts</h1>
	{#await metadata}
		
		<progress class="progress is-medium is-dark" max="100">45%</progress>
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

	<h1>hello!</h1>
	{@debug bar}
</div>