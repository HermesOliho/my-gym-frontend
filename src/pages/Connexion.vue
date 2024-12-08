<template>
    <section
        class="bg-light pt-5 d-flex align-items-center"
        style="height: calc(100dvh - 65px)"
    >
        <div
            class="container-sm bg-white p-3 rounded shadow"
            style="max-width: 512px"
        >
            <h1>Ravi de vous revoir</h1>
            <p class="text-secondary">
                <span class="fw-bold">
                    Identifiez-vous pour accéder à l'application.
                </span>
                <br />
                #pour gérer le gymnase 😉
            </p>
            <hr />
            <form action="" method="post" @submit.prevent="handleSubmit">
                <div class="form-group mb-3">
                    <label for="identifiant" class="form-label">
                        Identifiant
                    </label>
                    <input
                        type="text"
                        name="identifiant"
                        id="identifiant"
                        class="form-control"
                        placeholder="Nom, numéro de téléphone ou e-mail"
                        v-model="credentials.email"
                    />
                </div>
                <div class="form-group mb-3">
                    <label for="password" class="form-label">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        placeholder="Entrez votre mot de passe"
                        v-model="credentials.password"
                    />
                </div>
                <div class="form-group mb-3">
                    <button
                        class="btn btn-primary w-full"
                        style="display: inline-block; width: 100%"
                        type="submit"
                    >
                        Connexion
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const credentials = ref({
    email: "",
    password: "",
});
const router = useRouter();

const handleSubmit = () => {
    console.log(credentials.value);
    if (
        credentials.value.email.trim().length > 0 &&
        credentials.value.password.trim().length > 0
    ) {
        router.push("/abonnes");
    }
};
</script>
