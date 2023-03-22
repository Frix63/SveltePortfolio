<script>
	import { each } from "svelte/internal";
    import Songs from "../songs.json";
    import BreakLine from "./BreakLine.svelte";
</script>






{#each Songs as song}
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="{song.link}"></iframe>
    <BreakLine/>
{/each}

