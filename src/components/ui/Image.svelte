<script lang="ts">
    import { cn } from "$lib/utils/style";

    export let src: string | null;
    export let alt: string;

    let isLoaded = false;
</script>

<div
    class={cn("bg-slate-200 animate-pulse", {
        "hidden": isLoaded,
    }, $$restProps.class)}
/>
<img
    {src}
    {alt}
    on:load={() => isLoaded = true}
    class={cn("opacity-0 transition-all", {
        "opacity-100": isLoaded,
        "absolute": !isLoaded,
    }, $$restProps.class)}
/>
