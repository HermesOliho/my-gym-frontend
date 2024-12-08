<script setup>
import BsIcon from "./BsIcon.vue";
</script>

<template>
    <!-- Sidebar -->
    <!-- Sidebar -->
    <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
        style="position: sticky; top: 65px; margin: 0; box-sizing: border-box"
    >
        <!-- Sidebar -->
        <div
            style="
                width: 250px;
                height: 100vh;
                padding: 35px;
                padding-left: 5px;
                padding-top: 5px;
            "
        >
            <h5>Menu</h5>
            <ul class="nav flex-column">
                <!-- Lien 1 -->
                <li class="nav-item">
                    <a class="nav-link" href="#">Accueil</a>
                </li>
                <!-- Groupe Lien 2 avec collapse -->
                <li class="nav-item">
                    <a
                        class="nav-link collapsed"
                        data-bs-toggle="collapse"
                        href="#collapseExample1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                    >
                        Abonnés <bs-icon name="caret-down-fill" />
                    </a>
                    <div class="collapse" id="collapseExample1">
                        <ul class="list-unstyled">
                            <li>
                                <router-link
                                    class="nav-link"
                                    to="/ajouter-abonne"
                                >
                                    Ajouter un abonné
                                </router-link>
                            </li>
                            <li>
                                <router-link class="nav-link" to="/abonnes">
                                    Tous les abonnés
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Groupe Lien 3 avec collapse -->
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-bs-toggle="collapse"
                        href="#collapseExample2"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample2"
                    >
                        Abonnements <bs-icon name="caret-down-fill" />
                    </a>
                    <div class="collapse" id="collapseExample2">
                        <ul class="list-unstyled">
                            <li>
                                <RouterLink
                                    class="nav-link"
                                    to="/ajouter-type-abonnement"
                                >
                                    Ajouter un abonnement
                                </RouterLink>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Tous les abonnements
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Abonnements actifs
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Abonnements inactifs
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-bs-toggle="collapse"
                        href="#collapseExample3"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample3"
                    >
                        Séances <bs-icon name="caret-down-fill" />
                    </a>
                    <div class="collapse" id="collapseExample3">
                        <ul class="list-unstyled">
                            <li>
                                <RouterLink
                                    class="nav-link"
                                    :to="{ name: 'ajouter_seance' }"
                                >
                                    Programmer une séance
                                </RouterLink>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Tous les abonnements
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Abonnements actifs
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Abonnements inactifs
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-bs-toggle="collapse"
                        href="#collapseExample4"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample4"
                    >
                        Paiements <bs-icon name="caret-down-fill" />
                    </a>
                    <div class="collapse" id="collapseExample4">
                        <ul class="list-unstyled">
                            <li>
                                <RouterLink
                                    class="nav-link"
                                    :to="{ name: 'ajouter_paiement' }"
                                >
                                    Enregistrer un paiement
                                </RouterLink>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Tous les abonnements
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Abonnements actifs
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Abonnements inactifs
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <!-- Lien 4 -->
                <li class="nav-item">
                    <a class="nav-link text-danger" href="#">Se déconnecter</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
/* Style de la sidebar */
.sidebar {
    height: 100vh;
    background-color: #343a40;
    padding: 15px;
}
.sidebar a {
    color: #ffffff;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
}
.sidebar a:hover {
    background-color: #495057;
}
.sidebar .nav-item > a:not(a:last-child) {
    border-bottom: 1px solid rgba(128, 128, 128, 0.308);
}
.sidebar .router-link-active {
    background-color: #007bff;
}
.nav-item:has(.router-link-active) {
    font-weight: 600;
}
.nav-item .bi {
    display: inline-block;
    transform: rotate(-90deg);
}
.nav-item:has(.collapse.show) .bi {
    transform: rotate(0deg);
}
</style>
