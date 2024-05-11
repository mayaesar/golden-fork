<script lang="ts">
    import Card from "../components/Card.svelte";
    import {recipe_details as recipes} from "$lib/mocks/recipe_details";
</script>

<div class="flex-1 pt-6">
    <h1 class="text-center text-4xl mb-16">Most Made</h1>
    <div class="overflow-x-auto hide-scrollbar -mx-3 px-3 pb-12">
        <div class="inline-flex items-center gap-6">
            {#each recipes as recipe}
                {#each recipe.categories as category}
                    {#if (category === "mostMade")}
                        <a href={`/recipes/${recipe.id}`}>
                            <Card recipe={recipe} />
                        </a>
                    {/if}
                {/each}
            {/each}
        </div>
    </div>
    <h1 class="text-3xl mb-6 ml-4">To Try</h1>
    <div class="overflow-x-auto hide-scrollbar -mx-3 px-3 pb-12">
        <div class="inline-flex items-center gap-6">
            {#each recipes as recipe}
                {#each recipe.categories as category}
                    {#if (category === "mustTry")}
                        <a href={`/recipes/${recipe.id}`}>
                            <Card recipe={recipe} />
                        </a>
                    {/if}
                {/each}
            {/each}
        </div>
    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    * {
        font-family: "Lato", sans-serif
    }
</style>