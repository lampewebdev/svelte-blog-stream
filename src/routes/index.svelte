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

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="main-page">
	{#await metadata}
		<progress class="progress is-medium is-dark" max="100">45%</progress>
	{:then value}
	<div class="columns is-mobile is-centered">
		<div class="column is-full-mobile is-three-quarters-tablet">
			{#each value as post}
			<section class="section">
				<div class="card">
					<div class="card-content">
						<p class="title">
							{post.title}
						</p>
						<p class="subtitle">
							Part of: {post.series}
						</p>
						<div class="content">
							{post.description}
						</div>
					</div>
					<footer class="card-footer">
						<a rel='prefetch' class="card-footer-item" href='/post/{post.slug}'>Read more...</a>
					</footer>
				</div>
			</section>	
			{/each}			
		</div>
	</div>
	{:catch error}
		<p>Oppsie!</p>
		{error}
	{/await}}
</div>