<script lang="ts">
    import type { Tables } from "$types/supabase";

    export let recipe: Tables<"recipes">;
</script>

<div class={$$restProps.class}>
    <h2 class="font-bold text-xl leading-snug mb-3">Instructions</h2>

    <ul class="grid grid-cols-1 gap-3">
        {#each recipe.instructions as instruction, i}
            <li class="flex items-start">
                <div class="font-bold font-theme text-2xl w-4 shrink-0 text-center mr-2 mt-1">{i + 1}</div>
                <div class="bg-slate-100 rounded-2xl flex-1 p-3">{instruction}</div>
            </li>
        {/each}
    </ul>
</div>
