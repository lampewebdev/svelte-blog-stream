<script>
     export let tags;
     let splitedTags = tags.split(",");
</script>

<span>
    {#each splitedTags as tag}
        <a href="/tag/{tag.trim()}">{tag}</a>,
    {/each} 
</span>