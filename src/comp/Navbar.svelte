<script>
    import jsonData from '../data.json';
</script>

<div class="w-auto h-10 bg-Nav">
    <div class="flex items-center h-full align-middle">
        {#each jsonData as page}
            <a href={page.link} class="px-5 font-bold text-font">{page.name}</a>
        {/each}
    </div>
</div>
