<script>
    import TagsList from "../components/Tagslist.svelte";
    export let metadata;
</script>

<style>
    .title {
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.125;
    }

    .button-wrapper {
        margin: 1.5rem 0;
    }

    .section {
        padding-bottom: 0;
    }

    .main-page {
        padding-top: 3rem;
    }

    hr {
        border: 0;
        display: block;
        height: 0px;
        border-top: #363636 solid 1px;
    }
</style>

<div class="columns is-mobile is-centered">
    <div class="column is-full-mobile is-three-quarters-tablet is-half-desktop">
        {#each metadata as post}
            <section class="section">
                    <div class="header-content">
                        <div class="has-text-centered">
                            <h1 class="title">{post.title}</h1>
                        </div>
                        <p class="subheader-content has-text-centered">
                            Series: {post.series}
                            
                        </p>
                        <hr>
                        <div class="content has-text-centered">
                            {post.description}
                        </div>
                    </div>
                    <div class="button-wrapper has-text-centered">
                        <a rel='prefetch' class="button is-primary" href='/post/{post.slug}'>Continue Reading!</a>
                    </div>
                    Tags: <TagsList tags={post.tags} />
            </section>	
		{/each}			
    </div>
</div>