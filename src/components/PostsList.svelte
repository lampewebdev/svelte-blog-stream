<script>
    import TagsList from "../components/Tagslist.svelte";
    import { fly } from "svelte/transition";
    export let blogposts;
</script>

<style>
    .button-wrapper {
        margin: 1.5rem 0;
    }
    .button {
        background-color: #328076;
        border-color: transparent;
        color: #fff;
    }
    hr {
        border: 0;
        display: block;
        height: 0px;
        border-top: #363636 solid 1px;
    }
</style>
<div class="container">
<div class="columns is-mobile is-centered">
    <div class="column is-full-mobile is-three-quarters-tablet is-half-desktop">
        {#each blogposts as post}
            <section 
                class="section"
                in:fly="{{x: -60, duration: 500}}"
            >
                    <div class="header-content">
                        <div class="has-text-centered">
                            <h1 class="title">{post.title}</h1>
                        </div>
                        <p class="subheader-content has-text-centered">
                            Series: <a href="/series/{post.series}">{post.series}</a>
                            
                        </p>
                        <hr>
                        <div class="content has-text-centered">
                            {post.description}
                        </div>
                    </div>
                    <div class="button-wrapper has-text-centered">
                        <a rel='prefetch' class="button" href='/post/{post.slug}'>Continue Reading!</a>
                    </div>
                    Tags: <TagsList tags={post.tags} />
            </section>	
		{/each}			
    </div>
</div>
</div>