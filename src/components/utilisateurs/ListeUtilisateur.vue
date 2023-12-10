<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Date de naissance</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <Utilisateur v-for="user in utilisateurs" :key="user.id" :utilisateur="user" @supprimer="supprimer" />
        </tbody>
    </table>


    <button class="btn btn-primary" @click="ajoutercommentaire">Ajouter un commentaire</button>


    <button class="btn btn-primary" @click="allerAjouterUtilisateur">Ajouter un utilisateur</button>
    <button class="btn btn-primary" @click="ajoutercommande">Ajouter une commande</button>

        <button class="btn btn-primary" @click="validerpanier">Valider mon panier</button>


</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import useUtilisateur from '../../services/serviceUtilisateur.js';
import { useRouter } from 'vue-router';
const router = useRouter();

const utilisateurs = ref([]);
const { getUtilisateurs, supprimerUtilisateur } = useUtilisateur();

onBeforeMount(() => {
    getUtilisateurs().then(data => {
        utilisateurs.value = data;
        console.log('Liste utilisateur', data);
    });
});

const supprimer = (id) => {
    console.log('emits', id);
    supprimerUtilisateur(id).then(() => {
        getUtilisateurs().then(data => {
            utilisateurs.value = data;
            console.log('Liste utilisateur', data);
        }).catch(err => {
            console.log(err.message);
        });
    });
};

const allerAjouterUtilisateur = () => {
    router.push('/ajout');

    

};
const ajoutercommentaire = ()=> {
     router.push('/ajoutercommentaire');
    };

    const ajoutercommande = ()=> {
     router.push( '/ajoutercommande');
    };
</script>

<style lang="scss" scoped></style>
