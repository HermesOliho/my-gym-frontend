import Abonnes from "@/pages/abonne/Abonnes.vue";
import EditerAbonne from "@/pages/abonne/EditerAbonne.vue";
import VoirAbonne from "@/pages/abonne/VoirAbonne.vue";
import EditerTypeAbonnement from "@/pages/abonnement/EditerTypeAbonnement.vue";
import TypesAbonnements from "@/pages/abonnement/TypesAbonnements.vue";
import Connexion from "@/pages/Connexion.vue";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Connexion,
        },
        {
            path: "/abonnes",
            name: "Abonnes",
            component: Abonnes,
        },
        {
            path: "/abonnes/:id",
            name: "VoirAbonne",
            component: VoirAbonne,
        },
        {
            path: "/types-abonnement",
            name: "TypesAbonnement",
            component: TypesAbonnements,
        },
        {
            path: "/add-abonne",
            name: "AddAbonne",
            component: EditerAbonne,
        },
        {
            path: "/edit-abonne/:id",
            name: "EditAbonne",
            component: EditerAbonne,
            // props: true, // Permet de passer l'ID en tant que prop au composant
        },
        {
            path: "/add-type-abonnement",
            name: "AddTypeAbonnement",
            component: EditerTypeAbonnement,
            // props: true, // Utilise le même composant pour l'édition d'un type d'abonnement
        },
        {
            path: "/edit-type-abonnement/:id",
            name: "EditTypeAbonnement",
            component: EditerTypeAbonnement,
            // props: true, // Utilise le même composant pour l'édition d'un type d'abonnement
        },
    ],
});
