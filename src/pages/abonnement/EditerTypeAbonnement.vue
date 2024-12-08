<template>
    <div class="container pt-4">
        <h1>
            {{
                isEditMode
                    ? "Modifier le type d'abonnement"
                    : "Ajouter un type d'abonnement"
            }}
        </h1>
        <form @submit.prevent="handleSubmit">
            <TextField
                id="name"
                name="name"
                label="Nom du type d'abonnement"
                placeholder="Nom du type d'abonnement"
                required
                v-model="form.name"
            />
            <TextField
                id="price"
                name="price"
                type="number"
                label="Prix"
                placeholder="Prix de l'abonnement"
                required
                v-model="form.price"
            />
            <BsButton type="submit">{{
                isEditMode ? "Mettre à jour" : "Ajouter"
            }}</BsButton>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import TextField from "@/components/TextField.vue";
import BsButton from "@/components/BsButton.vue";
import { apiUrl, subscriptionsEndPoint } from "@/api/infos";

const router = useRouter();
const route = useRoute();

const isEditMode = computed(() => !!route.params.id);
const form = ref({
    name: "",
    price: "",
});

onMounted(() => {
    if (isEditMode.value) {
        fetch(
            `${apiUrl}/${subscriptionsEndPoint}/get-types.php?id=${route.params.id}`
        )
            .then((response) => response.json())
            .then((data) => {
                form.value.name = data.name;
                form.value.price = data.price;
            })
            .catch((error) =>
                console.error(
                    "Erreur lors de la récupération du type d'abonnement :",
                    error
                )
            );
    }
});

const handleSubmit = () => {
    const url = isEditMode.value
        ? `${apiUrl}/${subscriptionsEndPoint}/update-type.php`
        : `${apiUrl}/${subscriptionsEndPoint}/add-type.php`;

    fetch(url, {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        body: JSON.stringify({
            id: route.params.id,
            ...form.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                router.push("/types-abonnement");
            } else {
                console.log("Erreur lors de l'enregistrement :", data);
            }
        })
        .catch((error) => console.error("Erreur :", error));
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: auto;
}
</style>
