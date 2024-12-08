<template>
  <div class="container pt-4">
    <h1>Enregistrer un paiement</h1>
    <form action="">
      <SelectField
          :options="[{ value: 1, text: 'Armentho Mweze' }]"
          label="Client concerné"
      />
      <TextField label="Montant versé" type="number"/>
      <TextField label="Date du versement" type="date"/>
      <label class="form-label" for="#">Etat du paiement</label>
      <div class="form-check">
        <input id=""
               class="form-check-input"
               name="status"
               type="radio"
               value="paid"
        />
        <label class="form-check-label" for="">Payé</label>
      </div>
      <div class="form-check">
        <input
            id=""
            checked
            class="form-check-input"
            name="status"
            type="radio"
            value="pending"
        />
        <label class="form-check-label" for="">En attente</label>
      </div>
      <div class="form-check">
        <input
            id=""
            class="form-check-input"
            name="status"
            type="radio"
            value="failed"
        />
        <label class="form-check-label" for="">Échoué</label>
      </div>
      <BsButton class="mt-3">Enregistrer</BsButton>
    </form>
  </div>
</template>

<script setup>
import BsButton from "@/components/BsButton.vue";
import SelectField from "@/components/SelectField.vue";
import TextField from "@/components/TextField.vue";

// user_id INT NOT NULL,
// amount DECIMAL(10, 2) NOT NULL,
// payment_date DATETIME NOT NULL,
// status ENUM('paid', 'pending', 'failed') DEFAULT 'pending',
</script>
