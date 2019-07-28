<script context="module">
	export function preload({ params, query }) {
		return this.fetch('index.json').then(r => r.json()).then(r => {
			console.log('rt', r);
			return Promise.resolve({ r });
		})
	}
</script>
<script>

export let r;

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
{#await r}
	<p>loading...</p>
{:then value}
		{#each value as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
{:catch error}
	<p>Oppsie!</p>
	{error}
{/await}
<ul>
</ul>