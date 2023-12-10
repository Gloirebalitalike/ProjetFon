<template>
    <div>
        <h1>Profil de {{ utilisateur.nom }} {{ utilisateur.prenom }}</h1>
        <p>Biographie</p>
        <div>Email: {{ utilisateur.email }}</div>
        <div>Date de naissance: {{ utilisateur.dateDeNaissance }}</div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

// Retrieve route variables
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('route', route);
const { id } = route.params;

// Function/Service to retrieve a user from the database
import useUtilisateur from '../../services/serviceUtilisateur';

const { getUtilisateurById } = useUtilisateur();

const utilisateur = ref({});

onBeforeMount(() => {
    if (id)
        getUtilisateurById(id).then((data) => {
            console.log('Utilisateur', data);
            utilisateur.value = data;
        }).catch(err => console.log('Détail utilisateur', err));
});
</script>

<style lang="scss" scoped></style>
