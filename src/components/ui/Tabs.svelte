<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { cn } from "$lib/utils/style";

    type Events = {
        change: number
    };

    export let value: number;
    export let items: string[] = [];

    $: widthStyle = items.length > 0 ? `width: ${(100 / items.length).toFixed(0)}%` : "";
    $: translateStyle = `transform: translateX(${100 * value}%)`;

    $: containerStyle = `grid-template-columns: repeat(${items.length}, minmax(0, 1fr))`;
    $: anchorStyle = `${widthStyle}; ${translateStyle};`;

    const dispatch = createEventDispatcher<Events>();

    const onClickItem = (index: number) => {
        const prevValue = value;
        value = index;

        if (prevValue !== index) {
            dispatch("change", index);
        }
    };
</script>

<div class={cn("rounded-2xl p-2", $$restProps.class)}>
    <div
        class="relative grid"
        style={containerStyle}
    >
        <div
            class={cn("absolute top-0 left-0 bg-primary-300 h-full rounded-xl transition-all")}
            style={anchorStyle}
        />
        {#each items as item, index}
            <button
                on:click={() => onClickItem(index)}
                class={cn(
                    "relative rounded-2xl font-medium transition-all p-2",
                    {
                        "font-bold": index === value,
                    },
                )}
            >
                {item}
            </button>
        {/each}
    </div>
</div>
