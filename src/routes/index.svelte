<script context="module">
	export async function preload() {
		const res = await this.fetch("index.json");
		if(res.status === 200){
			const metadata = res.json();
			return { metadata };
		}
		this.error(500, "no posts found");
	}
</script>

<script>
	import PostList from "../components/PostsList.svelte";
	export let metadata;
</script>

<style>
	.main-page {
		padding-top: 3rem;
	}
</style>

<svelte:head>
	<title>Blog</title>
	<meta name="Description" content="TODO!!!">
</svelte:head>

<div class="main-page">
	{#await metadata}
		<progress class="progress is-medium is-dark" max="100">45%</progress>
	{:then value}
		<PostList metadata={value} />
	{/await}
</div>