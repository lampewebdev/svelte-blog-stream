<script context="module">
	export function preload({ params }) {
		try {
			return this.fetch(`series/${params.slug}.json`)
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
	import PostList from "../../components/PostsList.svelte";
	export let metadata;
</script>

<style>
	.main-page {
		padding-top: 3rem;
	}
</style>

<div class="main-page">
	{#await metadata}
		<progress class="progress is-medium is-dark" max="100">45%</progress>
	{:then value}
		<PostList metadata={value} />
	{/await}
</div>