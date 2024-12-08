<template>
    <i :class="`bi bi-${name}`"></i>
</template>

<script setup>
defineProps({ name: String });
</script>
