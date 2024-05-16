<script lang="ts">
    import { onMount } from "svelte";

    import { supabase } from "$lib/services/supabase";
    import { Route } from "$types/routes";
    import type { Tables } from "$types/supabase";

    import RecipeCard from "../components/RecipeCard.svelte";

    let recipes: Tables<"recipes">[] = [];

    const loadRecipes = async () => {
        const { error, data } = await supabase
            .from("recipes")
            .select();

        if (error) {
            console.error(error);
            return;
        }

        recipes = data;
    };

    onMount(() => {
        loadRecipes();
    });
</script>

<div class="flex-1 py-3">
    <h1 class="text-2xl text-theme font-bold px-2 mb-3">Newest</h1>
    <ul class="overflow-x-auto hide-scrollbar flex flex-nowrap gap-4 px-2 pb-12">
        {#each recipes as recipe}
            <li class="shrink-0">
                <a href={`${Route.Recipes}/${recipe.id}`}>
                    <RecipeCard {recipe} />
                </a>
            </li>
        {/each}
    </ul>
</div>
