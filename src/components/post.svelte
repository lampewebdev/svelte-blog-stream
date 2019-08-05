<script>
    export let post;
</script>
<style>
</style>

<svelte:head>
    <title>{post.metedata.title}</title>
    <link rel="stylesheet" href="/monokai.css">
</svelte:head>

<div class="blog-post">
    <header>
        <h1> {post.metedata.title} </h1>
        <span class="createdAt">{post.metedata.createdAt}</span>
    </header>
    <article>
        {@html post.html}
    </article>
</div>
