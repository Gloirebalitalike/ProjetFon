<template>
    <div class="wrapper">
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input :style="{ border: errors.nom ? '2px red solid' : '' }" v-model="utilisateur.nom" type="text"
                    class="form-control" id="nom">
                <div class="text-danger pb-2" v-if="errors.nom">{{ errors.nom }}</div>
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input :style="{ border: errors.prenom ? '2px red solid' : '' }" v-model="utilisateur.prenom" type="text"
                    class="form-control" id="prenom">
                <div class="text-danger pb-2" v-if="errors.prenom">{{ errors.prenom }}</div>
            </div>
            <div class="mb-3">
                <label for="naissance" class="form-label">Date de naissance</label>
                <input :style="{ border: errors.dateDeNaissance ? '2px red solid' : '' }" v-model="utilisateur.dateDeNaissance"
                    type="date" class="form-control" id="naissance">
                <div class="text-danger pb-2" v-if="errors.dateDeNaissance">{{ errors.dateDeNaissance }}</div>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input :style="{ border: errors.email ? '2px red solid' : '' }" v-model="utilisateur.email" type="email"
                    class="form-control" id="email">
                <div class="text-danger pb-2" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input :style="{ border: errors.motDePasse ? '2px red solid' : '' }" v-model="utilisateur.motDePasse"
                    type="password" class="form-control" id="mdp">
                <div class="text-danger pb-2" v-if="errors.motDePasse">{{ errors.motDePasse }}</div>
            </div>
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import useUtilisateur from '../../services/serviceUtilisateur';
const router = useRouter()
const { ajouterUtilisateur } = useUtilisateur()

const utilisateur = ref({
    nom: '',
    prenom: '',
    dateDeNaissance: '',
    email: '',
    motDePasse: ''
})

const errors = ref({
    nom: '',
    prenom: '',
    dateDeNaissance: '',
    email: '',
    motDePasse: ''
})

const soumettre = async () => {
    try {
   
    const resultat = await ajouterUtilisateur(utilisateur);
    router.push ('/ajout')
} catch (error) {
    console.log ({error:error.message})
  console.error("Erreur capturée:", error);
 
  if (error.response && error.response.data) {
    const messageErreur = error.response.data.errors || error.response.data.error;
    console.error("Message d'erreur du serveur:", messageErreur);
  } else {
    console.error("Une erreur est survenue dans le front-end");
  }
}
 
  
}
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const nomRegex = /^[a-zA-Z]{4,}$/

const valider = utilisateur => {
    for (let champ in utilisateur) {
        validerChamp(champ, utilisateur)
    }

    if (!mdpRegex.test(utilisateur.motDePasse) || !emailRegex.test(utilisateur.email) || !nomRegex.test(utilisateur.nom) || !nomRegex.test(utilisateur.prenom) || !isNaN(new Date(utilisateur.dateDeNaissance)))
        return false
    return true
}

const validerChamp = (champ, utilisateur) => {
    switch (champ) {
        case 'nom':
        case 'prenom':
            if (!nomRegex.test(utilisateur[champ])) {
                errors.value[champ] = `${champ} est invalide!`
            }
            break
        case 'motDePasse':
            if (!mdpRegex.test(utilisateur[champ])) {
                errors.value[champ] = `Le mot de passe est invalide!`
            }
            break
        case 'email':
            if (!emailRegex.test(utilisateur[champ])) {
                errors.value[champ] = `L'email est invalide!`
            }
            break
    }
}

watchEffect(() => {
    errors.value.nom = ''
    if (utilisateur.value.nom != '' && !nomRegex.test(utilisateur.value.nom)) {
        errors.value.nom = "Nom incorrect"
        return
    }
    errors.value.prenom = ''
    if (utilisateur.value.prenom != '' && !nomRegex.test(utilisateur.value.prenom)) {
        errors.value.prenom = "Prenom incorrect"
        return
    }
    errors.value.motDePasse = ''
    if (utilisateur.value.motDePasse != '' && !mdpRegex.test(utilisateur.value.motDePasse)) {
        errors.value.motDePasse = "Mot de passe ne suit pas les regles"
        return
    }
    errors.value.email = ''
    if (utilisateur.value.email !== '' && !emailRegex.test(utilisateur.value.email)) {
        errors.value.email = "Email ne suit pas les regles"
        return
    }
})
</script>

<style lang="scss" scoped></style>
