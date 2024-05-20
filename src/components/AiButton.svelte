<script lang="ts">
    import SimpleIconsOpenai from "~icons/simple-icons/openai";
    import { api } from "$lib/services/api";
    import { cn } from "$lib/utils/style";

    let isLoading = false;

    const generateRecipe = async () => {
        try {
            isLoading = true;
            await api("/recipes/generate", {
                method: "POST",
                body: {
                    prompt: "Generate a lasagna recipe.",
                },
            });
        } finally {
            isLoading = false;
        }
    };
</script>

<div class="absolute bottom-4 left-1/2 -translate-x-1/2">
    <button
        on:click={generateRecipe}
        disabled={isLoading}
        class="bg-slate-100 active:bg-slate-200 active:scale-95 text-orange-500 rounded-full border-8 border-white shadow-md transition-all disabled:pointer-events-none p-4"
    >
        <SimpleIconsOpenai
            width="42"
            height="42"
            class={cn({
                "animate-spin text-gray-500 opacity-50": isLoading,
            })}
        />
    </button>
</div>
