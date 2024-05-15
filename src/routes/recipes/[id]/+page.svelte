<script lang="ts">
    import { onMount } from "svelte";

    import { page } from "$app/stores";
    import { useNavbar } from "$lib/composables/useNavbar";
    import { supabase } from "$lib/services/supabase";
    import type { Ingredient } from "$types/recipe";
    import type { Tables } from "$types/supabase";

    let recipe: Tables<"recipes">;
    let ingredients: Ingredient[] = [];
    let servings = 1;
    let isLoading = true;

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
            <div class="relative bg-white rounded-t-2xl mt-[30dvh] px-2 py-3">
                <div class="flex justify-center mb-3">
                    <div class="bg-gray-200 w-16 h-2 rounded-lg" />
                </div>
                <h1 class="text-3xl font-bold">{recipe.title}</h1>
                <p class="mb-6"> {recipe.preparation_time_min} min</p>
                <div class="mb-3">
                    <label>
                        How many people?
                        <select bind:value={servings}>
                            {#each [1, 2, 3, 4, 5, 6, 7, 8] as num}
                                <option value={num}>{num}</option>
                            {/each}
                        </select>
                    </label>
                </div>
                <h2 class="text-2xl mb-3 underline">Ingredients</h2>
                <div class="mb-3">
                    {#each ingredients as ingredient}
                        <label>
                            <input type="checkbox" />
                            <span class="font-bold">{formatQuantity(ingredient.quantity * servings / recipe.servings)} {ingredient.unit}</span>
                            {ingredient.name}
                        </label>
                        <br />
                    {/each}
                </div>
                <h2 class="text-2xl mb-3 underline">Instructions</h2>
                <div class="mb-3">
                    <ol class="list-decimal ml-4">
                        {#each recipe.instructions as instruction}
                            <li>{instruction}</li>
                        {/each}
                    </ol>
                </div>
            </div>
        </div>
    </div>
{/if}
