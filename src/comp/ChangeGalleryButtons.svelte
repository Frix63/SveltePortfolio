<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="flex w-10/12 h-32 mx-auto flex-nowrap bg-frontground">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="cc" on:click={() => {dispatch('changeGallery')}}>
        <div class="cctext">Photos</div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="cc" on:click={() => {dispatch('changeGallery1')}}>
        <div class="cctext">3D</div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="cc" on:click={() => {dispatch('changeGallery2')}}>
        <div class="cctext">Graphics</div>
    </div>
</div>


<style lang="postcss">
    .cc{
        @apply w-1/3 my-3 cursor-pointer bg-secondary hover:opacity-50 text-font;
    }
    .cctext {
        @apply flex items-center justify-center h-full text-2xl pointer-events-none 
    }
</style>