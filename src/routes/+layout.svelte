<script>
    import "../app.css";

    import Navbar from "../components/ui/Navbar.svelte";
</script>

<Navbar />
<main class="bg-white flex-1 flex flex-col max-w-app w-full mx-auto">
    <slot />
</main>
