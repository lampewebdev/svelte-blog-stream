<script context="module">
    export function preload({ params }) {
    	try {
    		return this.fetch(`post/${params.slug}.json`)
    			.then(request => request.json())
    			.then(post => { 
    				return { post };
    			});
    	} catch (error) {
    		console.log(error);
    	}
    }
</script>


<script>
	import Post from "../../components/Post.svelte";
	export let post;
</script>

<svelte:head>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.8/build/styles/default.min.css">
</svelte:head>

{#await post}
    <p> loading... </p>
{:then value}
    <Post post={value} />
{:catch error}
	<p>Oppsie!</p>
	{error}
{/await}

