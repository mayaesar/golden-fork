<script lang="ts">
    import type {Recipe} from "$types/recipe";
    export let recipe: Recipe;
</script>

<article class="max-w-xs rounded-2xl overflow-hidden bg-[#EFE4D3] shadow-xl">
    <img src={recipe.image_url} alt="food" class="rounded-2xl object-cover min-w-[250px] max-w-[250px] aspect-square" />
    <div class="px-6 py-4">
        <p class="mb-1">{recipe.title}</p>
        <p class="text-xs opacity-60">{recipe.estimated_time}</p>
    </div>
</article>
