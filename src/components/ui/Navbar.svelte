<script lang="ts">
    import HeroiconsChevronLeft16Solid from "~icons/heroicons/chevron-left-16-solid";
    import { backUrl, isBackButtonVisible, isVisible } from "$lib/composables/useNavbar";
</script>

{#if $isVisible}
    <nav class="sticky top-0 z-[1] w-full max-w-app mx-auto bg-white shadow flex justify-center py-3">
        {#if $isBackButtonVisible}
            <a
                href={$backUrl}
                class="absolute left-3 top-1/2 -translate-y-1/2">
                <HeroiconsChevronLeft16Solid
                    width="35"
                    height="35"
                />
            </a>
        {/if}
        <p class="text-2xl font-bold tracking-wide">Golden Fork</p>
    </nav>
{/if}
