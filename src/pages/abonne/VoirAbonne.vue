<template>
    <div class="container-md pt-4">
        <div class="d-flex align-items-center justify-content-around mb-3">
            <bs-button class="btn-lg">
                Imprimer la carte de membre
                <bs-icon name="printer-fill" />
            </bs-button>
            <bs-button class="btn-lg" color="success">
                Rénouveler l'abonnement
                <bs-icon name="cash-stack" />
            </bs-button>
        </div>
        <div class="card" style="max-width: 675px" v-if="!enCoursDeChargement">
            <div class="card-body">
                <div
                    class="d-flex align-items-center justify-content-between gap-2 w-full"
                >
                    <div>
                        <h2 class="text-secondary">Maison Christopher</h2>
                        <h1>{{ abonne.name }}</h1>
                        <p>
                            Abonnement :
                            <strong class="text-success">{{
                                abonne.subscription
                            }}</strong>
                        </p>
                        <div class="badge rounded-pill bg-success p-1">
                            Actif
                        </div>
                        <p>
                            Depuis
                            <span class="text-secondary">{{
                                abonne.start_date
                            }}</span>
                        </p>
                        <p>
                            <strong>{{ abonne.price }} $</strong>
                        </p>
                    </div>
                    <div>
                        <div
                            class="border rounded bg-white p-3 inline-block"
                            style="
                                display: block;
                                width: calc(250px + 2rem);
                                height: calc(250px + 2rem);
                                aspect-ratio: 1/1;
                                padding: 1rem;
                            "
                        >
                            <Qrcode :value="qrCodeText" :size="250" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="spinner spinner-border"></div>
        </div>
    </div>
</template>

<script setup>
import { apiUrl, usersEndPoint } from "@/api/infos";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BsButton from "@/components/BsButton.vue";
import BsIcon from "@/components/BsIcon.vue";
import Qrcode from "qrcode.vue";

const abonne = ref({});
const route = useRoute();
const id = route.params.id;
const enCoursDeChargement = ref(true);
const qrcodeElement = ref(null);
const qrCodeText = ref("");
const qrcode = ref(null);

onMounted(() => {
    fetch(`${apiUrl}/${usersEndPoint}/get.php?id=${id}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
            if (data.message) {
                console.log(data.message);
            } else if (data.name) {
                abonne.value = data;
                qrCodeText.value = `${
                    abonne.value.name
                }, abonné à la salle de sport de la maison Christopher,\npour un abonnement "${abonne.value.subscription.toLowerCase()}" à ${
                    abonne.value.price
                }$.`;
                // setTimeout(() => {
                //     qrcode.value = new QRCode(qrcodeElement.value, {
                //         text: qrCodeText,
                //         width: 200,
                //         height: 200,
                //     });
                // }, 1000);
            }
            enCoursDeChargement.value = false;
        });
});
</script>

<!-- <div
    class="border rounded bg-white p-3 inline-block"
    style="
        width: calc(300px + 2rem);
        aspect-ratio: 1/1;
        padding: 1rem;
    "
>
    <QRCodeVue3
        :value="qrCodeText"
        :width="300"
        v-if="qrCodeText"
    />
</div> -->
