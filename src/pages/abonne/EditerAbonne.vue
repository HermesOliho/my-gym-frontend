<template>
    <div class="container pt-4">
        <h1>Ajouter un abonné</h1>
        <form @submit.prevent="handleSubmit">
            <TextField
                id="name"
                name="name"
                label="Nom"
                placeholder="Le nom du client"
                required
                v-model="form.name"
            />
            <TextField
                id="contact"
                type="text"
                name="contact"
                label="Contact"
                placeholder="Numéro de téléphone ou adresse e-mail du client"
                required
                v-model="form.contact"
            />
            <SelectField
                id="abonnement"
                name="abonnement"
                label="Type d'abonnement"
                :options="visibleSubscriptionsTypes"
                required
                v-model="form.subscription"
            />
            <TextField
                id="start_date"
                name="start_date"
                type="date"
                label="Date de début"
                placeholder="Début de l'abonnement"
                v-model="form.start_date"
                required
            />
            <TextField
                id="end_date"
                name="end_date"
                type="date"
                label="Date de fin"
                placeholder="Fin de l'abonnement"
                v-model="form.end_date"
                required
            />
            <BsButton type="submit">Enregistrer le client</BsButton>
        </form>
    </div>
</template>

<script setup>
import { apiUrl, subscriptionsEndPoint, usersEndPoint } from "@/api/infos";
import BsButton from "@/components/BsButton.vue";
import SelectField from "@/components/SelectField.vue";
import TextField from "@/components/TextField.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const subscriptionsTypes = ref([]);
const id = route.params.id;

const oldSubscriber = ref({
    name: "",
    contact: "",
    subscription: "",
    start_date: "",
    end_date: "",
});

const form = ref({
    name: "",
    contact: "",
    subscription: "",
    start_date: "",
    end_date: "",
});

// Mettre à jour `form` chaque fois que `oldSubscriber` change
watch(
    oldSubscriber,
    (newVal) => {
        form.value = { ...newVal };
    },
    { immediate: true }
);

const visibleSubscriptionsTypes = computed(() => {
    return subscriptionsTypes.value.map((type) => ({
        value: type.id,
        text: `${type.name} : ${type.price}`,
    }));
});

const canSubmit = computed(() => {
    return form.value.name.trim() && form.value.contact.trim();
});

const handleSubmit = () => {
    if (canSubmit.value) {
        const url = id
            ? `${apiUrl}/${usersEndPoint}/update.php`
            : `${apiUrl}/${usersEndPoint}/create.php`;
        fetch(url, {
            method: "POST",
            body: id
                ? JSON.stringify({ ...form.value, id: id })
                : JSON.stringify(form.value),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    router.push({ name: "Abonnes" });
                } else {
                    console.log("Erreur lors de la sauvegarde : ", data);
                }
            })
            .catch((error) => {
                console.error("Erreur : ", error);
            });
    }
};

onMounted(() => {
    if (id) {
        fetch(`${apiUrl}/${usersEndPoint}/get.php?id=${id}`)
            .then((r) => r.json())
            .then((data) => {
                oldSubscriber.value = data;
            })
            .catch((error) =>
                console.error(
                    "Erreur lors de la récupération de l'abonné : ",
                    error
                )
            );
    }
    fetch(`${apiUrl}/${subscriptionsEndPoint}/get-types.php`)
        .then((r) => r.json())
        .then((data) => {
            subscriptionsTypes.value = data;
        })
        .catch((error) =>
            console.error(
                "Erreur lors de la récupération des types d'abonnement : ",
                error
            )
        );
});
</script>
