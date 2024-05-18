<script lang="ts">
    import { onMount } from "svelte";

    import PhCaretLeftBold from "~icons/ph/caret-left-bold";
    import PhClock from "~icons/ph/clock";
    import PhCookingPot from "~icons/ph/cooking-pot";
    import PhFire from "~icons/ph/fire";
    import PhHeartStraightBold from "~icons/ph/heart-straight-bold";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { useNavbar } from "$lib/composables/useNavbar";
    import { api } from "$lib/services/api";
    import { supabase } from "$lib/services/supabase";
    import { formatQuantity } from "$lib/utils/recipe";
    import { cn } from "$lib/utils/style";
    import type { Ingredient, Nutrition } from "$types/recipe";
    import { Route } from "$types/routes";
    import type { Tables } from "$types/supabase";

    import Button from "../../../components/ui/Button.svelte";

    let recipe: Tables<"recipes">;
    let ingredientItems: Array<{
        ingredient: Ingredient
        formattedQuantity: {
            wholePart: number
            fraction: string
        }
    }> = [];
    let nutrition: Nutrition;
    let servings = 1;
    let isLoading = true;

    $: {
        servings = Math.max(1, servings);
        ingredientItems = ingredientItems.map((item) => ({
            ingredient: item.ingredient,
            formattedQuantity: formatQuantity((item.ingredient.quantity * servings)),
        }));
    }

    useNavbar({
        isVisible: false,
    });

    const loadRecipe = async () => {
        try {
            isLoading = true;

            const { error, data } = await supabase.from("recipes")
                .select()
                .eq("id", $page.params.id)
                .single();

            if (error) {
                console.error(error);
                return;
            }

            recipe = data;
            ingredientItems = data.ingredients.map((ingredient) => ({
                ingredient: ingredient as Ingredient,
                formattedQuantity: formatQuantity((ingredient as Ingredient).quantity * servings),
            }));
            nutrition = data.nutrition as Nutrition;
            servings = data.servings;
        } finally {
            isLoading = false;
        }
    };

    const test = async () => {
        await api("/recipes/generate", {
            method: "POST",
            body: {
                prompt: "Generate a quiche recipe",
            },
        });
        await goto(Route.Home);
    };

    onMount(() => {
        loadRecipe();
    });
</script>

{#if !isLoading}
    <div class="relative -mt-6">
        <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-app">
            <img
                src={recipe.image_url}
                alt={recipe.title}
                class="object-cover w-full h-[40dvh]"
            />
            <Button
                href={Route.Home}
                class="absolute top-4 left-4 rounded-full p-4"
            >
                <PhCaretLeftBold />
            </Button>
            <Button class="absolute top-4 right-4 rounded-full bg-white active:bg-slate-100 p-4">
                <PhHeartStraightBold />
            </Button>
        </div>

        <div class="-mt-6">
            <div class="relative bg-white shadow rounded-t-2xl mt-[40dvh]">
                <div class="flex justify-center py-4 mb-3">
                    <div class="bg-gray-300 w-10 h-1 rounded-lg" />
                </div>
                <h1 class="text-2xl text-center font-bold mb-6">{recipe.title}</h1>

                <ul class="flex justify-center gap-6 mb-6">
                    <li class="bg-primary-300 text-center rounded-full p-2">
                        <div class="bg-white rounded-full aspect-square flex items-center justify-center p-4 mb-2">
                            <PhFire
                                width="35"
                                height="35"
                            />
                        </div>
                        <div class="mb-2">
                            <p class="font-bold leading-snug">{nutrition.calories || "NaN"}</p>
                            <p class="text-xs leading-snug">kcal</p>
                        </div>
                    </li>
                    <li class="bg-primary-300 text-center rounded-full p-2">
                        <div class="bg-white rounded-full aspect-square flex items-center justify-center p-4 mb-2">
                            <PhClock
                                width="35"
                                height="35"
                            />
                        </div>
                        <div class="mb-2">
                            <p class="font-bold leading-snug">{recipe.preparation_time_min || "NaN"}</p>
                            <p class="text-xs leading-snug">min</p>
                        </div>
                    </li>
                    <li class="bg-primary-300 text-center rounded-full p-2">
                        <div class="bg-white rounded-full aspect-square flex items-center justify-center p-4 mb-2">
                            <PhCookingPot
                                width="35"
                                height="35"
                            />
                        </div>
                        <div class="mb-2">
                            <p class="font-bold leading-snug">{recipe.cooking_time_min || "NaN"}</p>
                            <p class="text-xs leading-snug">min</p>
                        </div>
                    </li>
                </ul>

                <div class="px-3 pb-6">
                    <div class="mb-6">
                        <h2 class="font-bold text-xl leading-snug mb-1">Description</h2>
                        <p class="text-sm opacity-80">{recipe.description}</p>
                    </div>

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

                <div class="sticky bottom-0 bg-white border-t border-black/20 mt-auto p-3">
                    <Button
                        on:click={test}
                        class="w-full font-theme"
                    >
                        Start cooking
                    </Button>
                </div>
            </div>
        </div>
    </div>
{/if}
