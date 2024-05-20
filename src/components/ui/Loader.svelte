<script lang="ts">
    import SvgSpinnersTadpole from "~icons/svg-spinners/tadpole";
    import { cn } from "$lib/utils/style";

    export let size = 70;
</script>

<SvgSpinnersTadpole
    width={size}
    height={size}
    class={cn("text-primary-300/50", $$restProps.class)}
/>
