<script context="module">
	export async function preload() {
		const res = await this.fetch("index.json");
		if(res.status === 200){
			const blogposts = await res.json();
			return { blogposts };
		}
		this.error(500, "no posts found");
	}
</script>

<script>
	import PostList from "../components/PostsList.svelte";
	export let blogposts;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="Description" content="TODO!!!">
</svelte:head>

{#await blogposts}
	<progress class="progress is-medium is-dark" max="100">45%</progress>
{:then value}
	<PostList blogposts={value} />
{/await}
