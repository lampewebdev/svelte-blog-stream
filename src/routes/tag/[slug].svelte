<script context="module">
	export function preload({ params }) {
		try {
			return this.fetch(`tag/${params.slug}.json`)
				.then(request => request.json())
				.then(blogposts => {
					return { blogposts };
				});
		} catch (error) {
			console.log(error);
		}
	}
</script>

<script>
	import PostList from "../../components/PostsList.svelte";
	export let blogposts;
</script>

<style>
	.main-page {
		padding-top: 3rem;
	}
</style>

<div class="main-page">
	{#await blogposts}
		<progress class="progress is-medium is-dark" max="100">45%</progress>
	{:then value}
		<PostList blogposts={value} />
	{/await}
</div>