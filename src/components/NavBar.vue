<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/"
                >Maison Christopher</router-link
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Home' }">
                            Accueil
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Abonnes' }">
                            Abonnés
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'TypesAbonnement' }"
                        >
                            Types d'Abonnement
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/seances">
                            Séances
                        </router-link>
                    </li>
                    <!-- Ajoutez d'autres liens ici -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.navbar {
    margin-bottom: 20px;
}
</style>
