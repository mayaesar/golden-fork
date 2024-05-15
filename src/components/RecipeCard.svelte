<script lang="ts">
    import HeroiconsClock from "~icons/heroicons/clock";
    import type { Tables } from "$types/supabase";

    export let recipe: Tables<"recipes">;
</script>

<article class="rounded-2xl overflow-hidden bg-white shadow-xl transition-all active:scale-95">
    <img
        src={recipe.image_url}
        alt={recipe.title}
        class="rounded-t-2xl object-cover w-full max-w-[250px] aspect-square"
    />
    <div class="p-3">
        <p class="font-medium mb-1">{recipe.title}</p>
        <div class="flex items-center gap-1 opacity-50">
            <HeroiconsClock />
            <p class="text-sm">{recipe.preparation_time_min} min</p>
        </div>
    </div>
</article>
