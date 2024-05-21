<script lang="ts">
    import { onMount } from "svelte";

    import PhCaretLeftBold from "~icons/ph/caret-left-bold";
    import PhDotsThreeVerticalBold from "~icons/ph/dots-three-vertical-bold";
    import { page } from "$app/stores";
    import RecipeDetails from "$components/recipe/RecipeDetails.svelte";
    import RecipeIngredients from "$components/recipe/RecipeIngredients.svelte";
    import RecipeInstructions from "$components/recipe/RecipeInstructions.svelte";
    import Button from "$components/ui/Button.svelte";
    import Image from "$components/ui/Image.svelte";
    import Tabs from "$components/ui/Tabs.svelte";
    import { supabase } from "$lib/services/supabase";
    import { Route } from "$types/routes";
    import type { Tables } from "$types/supabase";

    let recipe: Tables<"recipes">;
    let isLoading = true;
    let tabs = ["Ingredients", "Instructions"];
    let selectedTab = 0;

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
        } finally {
            isLoading = false;
        }
    };

    onMount(() => {
        loadRecipe();
    });
</script>

{#if !isLoading}
    <div class="relative flex flex-col flex-1 -mt-6">
        <div class="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-app">
            <Image
                src={recipe.image_url}
                alt={recipe.title}
                class="object-cover w-full h-[40dvh]"
            />
            <Button
                href={Route.Home}
                class="absolute top-4 left-4 rounded-full bg-black/20 active:bg-black/50 text-white backdrop-blur p-4"
            >
                <PhCaretLeftBold />
            </Button>
            <Button
                href={`${Route.Recipes}/${recipe.id}/edit`}
                class="absolute top-4 right-4 rounded-full bg-black/20 active:bg-black/50 text-white backdrop-blur p-4"
            >
                <PhDotsThreeVerticalBold />
            </Button>

            <div class="absolute top-28 left-0 w-full">
                <h1 class="text-white text-center text-4xl font-theme title-shadow">
                    {recipe.title}
                </h1>
            </div>
        </div>

        <div class="flex flex-col flex-1 -mt-6">
            <div class="flex flex-col flex-1 relative bg-white shadow-xl rounded-t-2xl mt-[40dvh]">
                <div class="flex justify-center py-4">
                    <div class="bg-gray-300 w-10 h-1 rounded-lg" />
                </div>
                <div class="px-3 mb-6">
                    <Tabs
                        bind:value={selectedTab}
                        items={tabs}
                        class="border"
                    />
                </div>

                {#if selectedTab === 0}
                    <RecipeDetails
                        {recipe}
                        class="mb-6"
                    />

                    <div class="px-3 pb-6">
                        <RecipeIngredients {recipe} />
                    </div>
                {:else if selectedTab === 1}
                    <div class="px-3 pb-6">
                        <RecipeInstructions {recipe} />
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    .title-shadow {
        text-shadow: 2px 2px 10px rgba(0,0,0,1);
    }
</style>
