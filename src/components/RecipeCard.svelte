<script lang="ts">
    import HeroiconsClock from "~icons/heroicons/clock";
    import type { Tables } from "$types/supabase";

    import Image from "./ui/Image.svelte";

    export let recipe: Tables<"recipes">;
</script>

<article class="relative rounded-2xl overflow-hidden bg-white shadow-sm transition-all active:scale-95">
    <Image
        src={recipe.image_url}
        alt={recipe.title}
        class="rounded-t-2xl object-cover w-[250px] aspect-square"
    />
    <div class="absolute top-0 left-0 w-full h-full bg-gradient flex items-end text-white text-shadow">
        <div class="w-full p-3">
            <p class="font-medium tracking-wide text-xl truncate">{recipe.title}</p>
            <p class="flex items-center gap-1 text-sm opacity-90">
                <HeroiconsClock />
                <span class="text-shadow">{recipe.preparation_time_min + recipe.cooking_time_min} min</span>
            </p>
        </div>
    </div>
</article>

<style>
    .bg-gradient {
        background: linear-gradient(0, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%);
    }

    .text-shadow {
        text-shadow: 2px 2px 10px rgba(0,0,0,0.8);
    }
</style>
