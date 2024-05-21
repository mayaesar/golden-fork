<script lang="ts">
    import PhClock from "~icons/ph/clock";
    import PhCookingPot from "~icons/ph/cooking-pot";
    import PhFire from "~icons/ph/fire";
    import { cn } from "$lib/utils/style";
    import type { Nutrition } from "$types/recipe";
    import type { Tables } from "$types/supabase";

    export let recipe: Tables<"recipes">;

    $: nutrition = recipe.nutrition as Nutrition;
</script>

<ul class={cn("flex justify-center gap-6", $$restProps.class)}>
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
