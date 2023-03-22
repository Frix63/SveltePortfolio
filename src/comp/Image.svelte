<script lang="ts">
    export let src:string;
    export let alt:string;
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="hover:opacity-50">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img {src} {alt} class="object-cover h-48 cursor-pointer w-96" on:click={() => dispatch("openModal")}/>
</div>