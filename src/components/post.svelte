<script>
    export let post;
</script>
<svelte:head>
    <title>{post.metedata.title}</title>
    <link rel="stylesheet" href="/monokai.css">
    <meta name="Description" content="{post.metedata.description}">
</svelte:head>

<div class="blog-post">
    <div class="columns is-mobile is-centered">
        <div class="column is-full-mobile is-three-quarters-tablet is-half-desktop">
            <section class="section">
                <header>
                    <h1> {post.metedata.title} </h1>
                    <span class="createdAt">{post.metedata.createdAt}</span>
                </header>
                <article>
                    {@html post.html}
                </article>
            </section>
        </div>
    </div>
</div>