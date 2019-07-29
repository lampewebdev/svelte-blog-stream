<script context="module">
    export function preload({ params }) {
        try {
            return this.fetch(`post/${params.slug}.json`)
                .then(request => request.text())
                .then(post => { 
                            return { post }
            });
        } catch (error) {
            console.log(error)
        }

    }
</script>


<script>
	import Post from '../../components/Post.svelte';

	export let post;
</script>

{#await post}
    <p> loading... </p>
{:then value}
    <Post post={value} />
{:catch error}
	<p>Oppsie!</p>
	{error}
{/await}

