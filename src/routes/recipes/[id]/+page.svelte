<script lang="ts">
    import { onMount } from "svelte";

    import PhClock from "~icons/ph/clock";
    import PhCookingPot from "~icons/ph/cooking-pot";
    import PhFire from "~icons/ph/fire";
    import { page } from "$app/stores";
    import { useNavbar } from "$lib/composables/useNavbar";
    import { supabase } from "$lib/services/supabase";
    import type { Ingredient, Nutrition } from "$types/recipe";
    import type { Tables } from "$types/supabase";

    import Button from "../../../components/ui/Button.svelte";

    let recipe: Tables<"recipes">;
    let ingredients: Ingredient[] = [];
    let nutrition: Nutrition;
    let servings = 1;
    let isLoading = true;

    $: servings = Math.max(1, servings);

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
            ingredients = data.ingredients as Ingredient[];
            nutrition = data.nutrition as Nutrition;
            servings = data.servings;
        } finally {
            isLoading = false;
        }
    };

    const formatQuantity = (quantity: number) => {
        if (quantity < 1) {
            return `1/${100 / (quantity * 100)}`;
        } else {
            return quantity;
        }
    };

    onMount(() => {
        loadRecipe();
    });
</script>

{#if !isLoading}
    <div class="relative -mt-6">
        <img
            src={recipe.image_url}
            alt="food"
            class="fixed top-0 left-1/2 -translate-x-1/2 object-cover w-full h-[40dvh] max-w-app"
        />
        <div class="-mt-6">
            <div class="relative bg-white shadow rounded-t-2xl mt-[40dvh] pt-3">
                <div class="flex justify-center mb-6">
                    <div class="bg-gray-200 w-16 h-2 rounded-lg" />
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
                    <div class="flex items-center gap-2 mb-3">
                        <h2 class="font-bold text-xl leading-snug">Ingredients</h2>
                        <p class="text-sm leading-snug opacity-80">{servings} serving{servings > 1 ? "s" : ""}</p>

                        <div class="flex items-center font-medium ml-auto">
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
                    <ul class="grid grid-cols-1 gap-1">
                        {#each ingredients as ingredient}
                            <li class="flex items-center gap-3">
                                <div class="bg-primary-300 rounded-full w-3 h-3" />
                                <p>
                                    <span class="font-bold">{formatQuantity(ingredient.quantity * servings)} {ingredient.unit}</span>
                                    <span>{ingredient.name}</span>
                                </p>
                            </li>
                        {/each}
                    </ul>
                </div>

                <div class="sticky bottom-0 bg-white border-t border-black/20 mt-auto p-3">
                    <Button class="w-full text-theme">Start cooking</Button>
                </div>
            </div>
        </div>
    </div>
{/if}
