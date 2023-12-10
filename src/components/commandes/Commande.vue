<template>
    <div>
        <h1>Commande du client {{ commande.produit }} {{ commande.quantite }}</h1>
        <p>Biographie</p>
        <div>Date de commande: {{ commande.dateDeCommande }}</div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

// Retrieve route variables
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('route', route);
const { id } = route.params;

// Function/Service to retrieve a command from the database
import useCommande from '../../services/serviceCommande';

const { getCommandeById } = useCommande();

const commande = ref({});

onBeforeMount(() => {
    if (id)
        getCommandeById(id).then((data) => {
            console.log('Commande', data);
            commande.value = data;
        }).catch(err => console.log('Détail commande', err));
});
</script>

<style lang="scss" scoped></style>
