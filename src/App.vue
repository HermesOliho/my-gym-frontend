<template>
    <!-- Barre de navigation supérieure -->
    <NavBar />
    <main>
        <RouterView />
    </main>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";

const route = useRoute();
</script>

<style>
body {
    width: 100dvw;
    overflow-x: hidden;
}
</style>
