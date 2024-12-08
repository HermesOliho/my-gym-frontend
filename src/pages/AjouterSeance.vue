<template>
    <div class="container pt-4">
        <h1>Programmer une séance</h1>
        <form action="" method="post">
            <TextField label="Nom de la séance" />
            <!-- <TextField label="Date et heure de début" type="datetime" /> -->
            <label for="#" class="form-label">Date et heure de début</label>
            <div class="input-group mb-3">
                <input type="date" name="" id="" class="form-control" />
                <div class="input-group-text">à</div>
                <input type="time" name="" id="" class="form-control" />
            </div>
            <TextField label="Durée (en minutes)" type="number" />
            <BsButton type="submit">Enregistrer</BsButton>
        </form>
    </div>
</template>

<script setup>
import BsButton from "@/components/BsButton.vue";
import SelectField from "@/components/SelectField.vue";
import TextField from "@/components/TextField.vue";
// start_time DATETIME NOT NULL,
// name VARCHAR(100) NOT NULL,
// duration INT NOT NULL, -- Durée en minutes
// user_id INT NOT NULL,
</script>
