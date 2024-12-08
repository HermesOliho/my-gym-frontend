<template>
    <button
        :type="type ?? 'button'"
        :class="{ btn: true, 'btn-primary': !color, [`btn-${color}`]: color }"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    color?: string;
    type?: "button" | "reset" | "submit";
}>();
</script>
