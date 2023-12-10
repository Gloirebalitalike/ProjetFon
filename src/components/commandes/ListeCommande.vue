<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Produit</th>
                <th>Quantite</th>
                <th>dateDeCommande</th>
                
            </tr>
        </thead>
        <tbody>
            <Commande v-for="commande in commandes" :key="commande.id" :commande="commande" @supprimer="supprimer" />
        </tbody>
    </table>

    

    <button class="btn btn-primary" @click="allerAjouterCommande">Ajouter une commande</button>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import useCommande from '../../services/serviceCommande.js';
import { useRouter } from 'vue-router';
const router = useRouter();

const commandes = ref([]);
const { getCommandes, supprimerCommande } = useCommande();

onBeforeMount(() => {
    getCommandes().then(data => {
        commandes.value = data;
        console.log('Liste commande', data);
    });
});

const supprimer = (id) => {
    console.log('emits', id);
    supprimerCommande(id).then(() => {
        getCommandes().then(data => {
            commandes.value = data;
            console.log('Liste commande', data);
        }).catch(err => {
            console.log(err.message);
        });
    });
};

const AjouterCommande = () => {
    router.push('/AjouterCommande');
};
</script>

<style lang="scss" scoped></style>
