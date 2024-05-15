<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import LineMdLoadingTwotoneLoop from "~icons/line-md/loading-twotone-loop";
    import { cn } from "$lib/utils/style";

    export let href = "";
    export let loading = false;

    const dispatch = createEventDispatcher();
</script>

{#if href}
    <a
        {href}
        class={cn(
            "flex items-center justify-center gap-2 bg-primary-300 text-black rounded-2xl text-xl font-medium shadow-md py-4 px-3 active:bg-primary-400 select-none transition-all",
            $$restProps.class,
        )}
        target={$$restProps.target}
    >
        <slot />
    </a>
{:else}
    <button
        on:click={(event) => dispatch("click", event)}
        class={cn(
            "flex items-center justify-center gap-2 bg-primary-300 text-black rounded-2xl text-xl font-medium shadow-md py-4 px-3 active:bg-primary-400 select-none transition-all disabled:opacity-50 disabled:pointer-events-none",
            $$restProps.class,
        )}
        disabled={$$restProps.disabled}
        type={$$restProps.type}
    >
        {#if loading}
            <LineMdLoadingTwotoneLoop />
        {/if}
        <slot />
    </button>
{/if}
