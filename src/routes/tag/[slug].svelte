<script context="module">
	export function preload({ params }) {
		try {
			return this.fetch(`tag/${params.slug}.json`)
				.then(request => request.json())
				.then(metadata => {
					return { metadata };
				});
		} catch (error) {
			console.log(error);
		}
	}
</script>

<script>
	import TagsList from "../../components/Tagslist.svelte";
	export let metadata;
</script>
<style>
	.main-page {
		padding-top: 3rem;
	}
</style>

<div class="main-page">
    <div class="columns is-mobile is-centered">
        <div class="column is-full-mobile is-three-quarters-tablet is-half-desktop">
			{#await metadata}
				<progress class="progress is-medium is-dark" max="100">45%</progress>
			{:then value}
			<div class="columns is-mobile is-centered">
				<div class="column is-full-mobile is-three-quarters-tablet is-half-desktop">
					{#each value as post}
							<section class="section">
									<div class="header-content">
										<div class="has-text-centered">
											<h1 class="title">{post.title}</h1>
										</div>
										<p class="subheader-content has-text-centered">
											Series: {post.series}
											
										</p>
										<hr>
										<div class="content has-text-centered">
											{post.description}
										</div>
									</div>
									<div class="button-wrapper has-text-centered">
										<a rel='prefetch' class="button is-primary" href='/post/{post.slug}'>Continue Reading!</a>
									</div>
									Tags: <TagsList tags={post.tags} />
							</section>	
							{/each}			
						</div>
					</div>
			{/await}
        </div>
    </div>
</div>