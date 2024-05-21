<script lang="ts">
    import { onMount } from "svelte";

    import PhCaretLeftBold from "~icons/ph/caret-left-bold";
    import PhRepeat from "~icons/ph/repeat";
    import PhTrash from "~icons/ph/trash";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import Button from "$components/ui/Button.svelte";
    import Loader from "$components/ui/Loader.svelte";
    import { api } from "$lib/services/api";
    import { supabase } from "$lib/services/supabase";
    import { Route } from "$types/routes";

    let recipeTitle = "";
    let isLoading = true;

    const loadRecipe = async () => {
        try {
            isLoading = true;

            const { error, data } = await supabase
                .from("recipes")
                .select("title")
                .eq("id", $page.params.id)
                .single();

            if (error) {
                console.error(error);
                return;
            }

            recipeTitle = data.title;
        } finally {
            isLoading = false;
        }
    };

    const deleteRecipe = async () => {
        isLoading = true;
        await api(`/recipes/${$page.params.id}`, { method: "DELETE" });
        await goto(Route.Home);
        isLoading = false;
    };

    onMount(() => {
        loadRecipe();
    });
</script>

<div class="flex-1 px-2 py-6">
    {#if isLoading}
        <div class="flex justify-center mt-16">
            <Loader />
        </div>
    {:else}
        <div class="relative flex items-center justify-center mb-6">
            <a
                href={`${Route.Recipes}/${$page.params.id}`}
                class="absolute top-1/2 left-0 -translate-y-1/2 p-1"
            >
                <PhCaretLeftBold
                    width="22"
                    height="22"
                />
            </a>
            <h1 class="text-2xl font-bold truncate pl-8">{recipeTitle}</h1>
        </div>

        <div class="grid grid-cols-1 gap-3">
            <Button class="w-full bg-white active:bg-slate-50 justify-start gap-3 p-4">
                <PhRepeat />
                <span>Regenerate image</span>
            </Button>
            <Button
                on:click={deleteRecipe}
                class="w-full bg-white active:bg-slate-50 text-red-500 justify-start gap-3 p-4"
            >
                <PhTrash />
                <span>Delete recipe</span>
            </Button>
        </div>
    {/if}
</div>
