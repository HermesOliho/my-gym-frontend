<template>
    <section>
        <div class="container pt-3">
            <div class="d-flex align-items-center justify-content-between mb-4">
                <h1>Abonnés actuels</h1>
                <RouterLink :to="{ name: 'AddAbonne' }" class="btn btn-primary">
                    Nouvel abonné <i class="bi bi-plus fw-bold"></i>
                </RouterLink>
            </div>
            <!-- Affichage des abonnés -->
            <div v-if="abonnes.length > 0">
                <!-- Recherche -->
                <div class="input-group mb-3">
                    <input
                        type="search"
                        class="form-control"
                        placeholder="Rechercher un abonné..."
                        v-model="recherche"
                    />
                    <button class="btn btn-primary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
                <!-- tableau -->
                <table
                    class="table table-responsive table-striped"
                    v-if="abonnesVisibles.length > 0"
                >
                    <thead>
                        <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Nom du client</th>
                            <th scope="col">Abonnement</th>
                            <th scope="col" class="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(abonne, index) in abonnesVisibles"
                            :key="abonne.telephone"
                        >
                            <th>{{ index + 1 }}</th>
                            <td>
                                <RouterLink
                                    :to="`/abonnes/${abonne.id}`"
                                    class="text-decoration-none text-black"
                                >
                                    <span class="fw-bold">{{
                                        abonne.name
                                    }}</span
                                    ><br />
                                    <span
                                        class="text-secondary"
                                        style="
                                            font-size: 0.85em;
                                            font-weight: 600;
                                        "
                                    >
                                        {{ abonne.contact }} | Du
                                        <span class="text-black">
                                            {{ formatDate(abonne.start_date) }}
                                        </span>
                                        au
                                        <span class="text-black">{{
                                            formatDate(abonne.end_date)
                                        }}</span>
                                    </span>
                                </RouterLink>
                            </td>
                            <td class="text-success">
                                {{ abonne.subscription }}
                            </td>
                            <td>
                                <div
                                    class="d-flex align-items-center justify-content-end gap-2"
                                >
                                    <RouterLink
                                        class="btn btn-warning"
                                        :to="{
                                            name: 'EditAbonne',
                                            params: { id: abonne.id },
                                        }"
                                    >
                                        <i class="bi bi-pencil-fill"></i>
                                    </RouterLink>
                                    <button
                                        class="btn btn-danger"
                                        @click="deleteSubscriber(abonne.id)"
                                    >
                                        <i class="bi bi-trash-fill"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="alert alert-info" v-else>Aucun résultat</div>
            </div>
            <div class="alert alert-warning" v-else>
                Vous n'avez pas encore d'abonné !
            </div>
        </div>
    </section>
</template>

<script setup>
import { apiUrl, usersEndPoint } from "@/api/infos";
import { formatDate } from "@/utils";
import { computed, onMounted, ref } from "vue";

const abonnes = ref([]);
const recherche = ref("");

const abonnesVisibles = computed(() => {
    if (recherche.value.trim().length > 0) {
        const s = recherche.value.toLowerCase();
        return abonnes.value.filter((a) => {
            const nom = a.name.toLowerCase();
            return nom.indexOf(s) > -1;
        });
    }
    return abonnes.value;
});

const loadSubscribers = () => {
    fetch(`${apiUrl}/${usersEndPoint}/get.php`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            // throw new Error("Une erreur est survenue");
        })
        .then((data) => {
            if (data.message) {
                console.log(data.message);
            } else if (data.users) {
                abonnes.value = data.users;
            }
        })
        .catch((error) => {
            console.error(
                "Impossible de se connecter à la base des données !",
                error
            );
        });
};

const deleteSubscriber = (id) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet abonné ?")) {
        fetch(`${apiUrl}/${usersEndPoint}/delete.php`, {
            method: "POST", // Utilisez DELETE si votre API le prend en charge
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Abonné supprimé avec succès.");
                    loadSubscribers(); // Redirige vers la liste des abonnés après suppression
                } else {
                    alert("Erreur lors de la suppression de l'abonné.");
                    console.log("Erreur : ", data);
                }
            })
            .catch((error) => {
                console.error("Erreur : ", error);
                alert("Erreur lors de la suppression.");
            });
    }
};

onMounted(() => {
    loadSubscribers();
});
</script>
