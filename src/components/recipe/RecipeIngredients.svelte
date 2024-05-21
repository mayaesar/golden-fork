<script lang="ts">
    import { onMount } from "svelte";

    import { formatQuantity } from "$lib/utils/recipe";
    import { cn } from "$lib/utils/style";
    import type { Ingredient } from "$types/recipe";
    import type { Tables } from "$types/supabase";

    export let recipe: Tables<"recipes">;

    let servings = 1;
    let ingredientItems: Array<{
        ingredient: Ingredient
        formattedQuantity: {
            wholePart: number
            fraction: string
        }
    }> = [];

    $: {
        servings = Math.max(1, servings);
        ingredientItems = ingredientItems.map((item) => ({
            ingredient: item.ingredient,
            formattedQuantity: formatQuantity((item.ingredient.quantity * servings)),
        }));
    }

    onMount(() => {
        ingredientItems = recipe.ingredients.map((ingredient) => ({
            ingredient: ingredient as Ingredient,
            formattedQuantity: formatQuantity((ingredient as Ingredient).quantity * servings),
        }));

        servings = recipe.servings;
    });
</script>

<div class={$$restProps.class}>
    <div class="flex items-center gap-2 mb-3">
        <h2 class="font-bold text-xl leading-snug">Ingredients</h2>
        <p class="text-sm leading-snug opacity-80 mt-0.5">{servings} serving{servings > 1 ? "s" : ""}</p>

        <div class="flex items-center font-medium text-xl ml-auto">
            <button
                on:click={() => servings--}
                class="border-l-2 border-t-2 border-b-2 border-black/20 rounded-l-lg active:bg-slate-50 px-4"
            >
                -
            </button>
            <div class="border-l-2 border-black/20 self-stretch" />
            <button
                on:click={() => servings++}
                class="border-r-2 border-t-2 border-b-2 border-black/20 rounded-r-lg active:bg-slate-50 px-4"
            >
                +
            </button>
        </div>
    </div>
    <ul class="grid grid-cols-1">
        {#each ingredientItems as { ingredient, formattedQuantity }}
            <li class="flex items-center gap-3 h-[35px]">
                <div class="bg-primary-300 rounded-full w-3 h-3" />
                <p>
                    <span class="inline-flex items-center gap-1 font-bold">
                        <span>{formattedQuantity.wholePart > 0 ? formattedQuantity.wholePart : formattedQuantity.fraction}</span>
                        <span class={cn("text-xs mb-2", { "hidden": formattedQuantity.wholePart === 0 || !formattedQuantity.fraction })}>{formattedQuantity.fraction}</span>
                        <span class={cn({ "hidden": !ingredient.unit })}>{ingredient.unit}</span>
                    </span>
                    <span class="opacity-80">{ingredient.name}</span>
                </p>
            </li>
        {/each}
    </ul>
</div>
