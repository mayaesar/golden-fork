<script lang="ts">
    import { page } from "$app/stores";
    import { recipe_details } from "$lib/mocks/recipe_details";
    let recipeDetails = recipe_details.find(i => i.id === $page.params.id)!;
    let people = 1;

    const formatQuantity = (quantity: number) => {
        if (quantity < 1) {
            return `1/${100 / (quantity * 100)}`;
        } else {
            return quantity;
        }
    };
</script>

<div class="-mx-3 -mt-6">
    <div>
        <img
            src={recipeDetails.image_url}
            alt="food"
            class="object-cover w-full h-[30dvh]" />
    </div>
    <div class="px-3 py-3">
        <a href="/">
            Back
        </a>

        <h1 class="text-3xl font-bold">{recipeDetails.title}</h1>
        <p class="mb-6"> {recipeDetails.estimated_time}</p>
        <div class="mb-3">
            <label>
                How many people?
                <select bind:value={people}>
                    {#each [1, 2, 3, 4, 5, 6, 7, 8] as num}
                        <option value={num}>{num}</option>
                    {/each}
                </select>
            </label>
        </div>
        <h2 class="text-2xl mb-3 underline">Ingredients</h2>
        <div class="mb-3">
            {#each recipeDetails.ingredients as ingredient}
                <label>
                    <input type="checkbox" />
                    <span class="font-bold">{formatQuantity(ingredient.quantity * people)} {ingredient.unit}</span>
                    {ingredient.name}
                </label>
                <br />
            {/each}
        </div>
        <h2 class="text-2xl mb-3 underline">Instructions</h2>
        <div class="mb-3">
            <ol class="list-decimal ml-4">
                {#each recipeDetails.instructions as instruction}
                    <li>{instruction}</li>
                {/each}
            </ol>

        </div>
    </div>
</div>
