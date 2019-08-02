<script>
    export let post;
</script>
<style>
.blog-post{}
</style>
<div class="blog-post">
    <header>
        <h1> {post.metedata.title} </h1>
        {post.metedata.createdAt}
    </header>
    <article>
        {@html post.html}
    </article>
</div>
