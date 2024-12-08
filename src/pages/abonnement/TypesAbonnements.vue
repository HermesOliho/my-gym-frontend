<template>
    <div class="container pt-4">
        <h1>Gestion des Types d'Abonnement</h1>
        <BsButton @click="addSubscriptionType" class="mb-3">
            Ajouter un type d'abonnement
        </BsButton>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="type in subscriptionTypes" :key="type.id">
                    <td>{{ type.name }}</td>
                    <td>{{ type.price }} $</td>
                    <td>
                        <div
                            class="d-flex justify-content-end align-items-center gap-2"
                        >
                            <BsButton
                                color="warning"
                                @click="editSubscriptionType(type)"
                            >
                                Modifier
                            </BsButton>
                            <BsButton
                                color="danger"
                                @click="deleteSubscriptionType(type.id)"
                            >
                                Supprimer
                            </BsButton>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import BsButton from "@/components/BsButton.vue";
import { apiUrl, subscriptionsEndPoint } from "@/api/infos";

const subscriptionTypes = ref([]);
const router = useRouter();

// Charger les types d'abonnement lors du montage du composant
onMounted(() => {
    fetchSubscriptionTypes();
});

// Fonction pour récupérer la liste des types d'abonnement
const fetchSubscriptionTypes = () => {
    fetch(`${apiUrl}/${subscriptionsEndPoint}/get-types.php`)
        .then((response) => response.json())
        .then((data) => {
            if (data && !data.message) {
                subscriptionTypes.value = data;
            } else {
                console.error(
                    "Erreur de chargement des types d'abonnement:",
                    data.message
                );
            }
        })
        .catch((error) => {
            console.error("Erreur :", error);
        });
};

// Rediriger vers la page d'ajout/édition de type d'abonnement
const addSubscriptionType = () => {
    router.push({ name: "AddTypeAbonnement" });
};

// Fonction pour modifier un type d'abonnement existant
const editSubscriptionType = (type) => {
    router.push({ name: "EditTypeAbonnement", params: { id: type.id } });
};

// Fonction pour supprimer un type d'abonnement
const deleteSubscriptionType = (id) => {
    if (confirm("Voulez-vous vraiment supprimer ce type d'abonnement ?")) {
        fetch(`${apiUrl}/${subscriptionsEndPoint}/delete-type.php`, {
            method: "POST",
            body: JSON.stringify({ id }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Type d'abonnement supprimé avec succès.");
                    fetchSubscriptionTypes(); // Actualiser la liste des types d'abonnement
                } else {
                    console.error("Erreur de suppression:", data.message);
                }
            })
            .catch((error) => {
                console.error("Erreur :", error);
            });
    }
};
</script>

<style scoped>
.table {
    width: 100%;
    margin-top: 1rem;
}

.table th,
.table td {
    text-align: left;
}

h1 {
    margin-bottom: 1.5rem;
}
</style>
