<script context="module">
	export function preload({ params }) {
		try {
			return this.fetch(`series/${params.slug}.json`)
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

{#await blogposts}
	<progress class="progress is-medium is-dark" max="100">45%</progress>
{:then value}
	<PostList blogposts={value} />
{/await}