<template>
    <div class="form-group mb-3">
        <label for="id" v-if="label">
            {{ label }}
            <span class="text-danger" v-if="required">*</span>
        </label>
        <input
            :type="type ?? 'text'"
            :name="name"
            :id="id"
            :class="{ 'form-control': true, 'is-invalid': error }"
            v-model="model"
            :required="required"
            :step="step"
        />
        <div class="invalid-feedback" v-if="error">{{ error }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    type?:
        | "text"
        | "email"
        | "tel"
        | "date"
        | "password"
        | "number"
        | "datetime";
    id?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    required?: boolean;
    step?: number;
}>();

const model = defineModel<string | number>({ required: true });
</script>
