<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="produit" class="form-label">Produit</label>
                <input v-model="commande.produit" type="text" class="form-control" id="produit">
            </div>
            <div class="mb-3">
                <label for="quantite" class="form-label">Quantite</label>
                <input v-model="commande.quantite" type="text" class="form-control" id="quantite">
            </div>
            <div class="mb-3">
                <label for="dateDeCommande" class="form-label">Date de commande</label>
                <input v-model="commande.dateDeNaissance" type="date" class="form-control" id="naissance">
            </div>

          
            <button type="submit" class="btn btn-primary">Mettre à jour</button>
        </form>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const { id } = route.params;

const router = useRouter();
const commande = ref({});

import useCommande from '../../services/serviceCommande';
const { getCommandeById, mettreAJourCommande } = useCommande();

onBeforeMount(() => {
    if (id) getCommandeById(id).then(data => {
        commande.value = data;
    }).catch(err => console.log('erreur mise à jour', err));
});

const mettreAJour = () => {
    mettreAJourCommande(id, commande.value).then(() => {
        router.push('/');
    }).catch(err => console.log('Problème lors de la mise à jour', err));
};
</script>

<style lang="scss" scoped></style>
