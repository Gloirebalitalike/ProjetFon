<template>
    <div>
        <form @submit.prevent="soumettre">
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
                <input v-model="commande.dateDeCommande" type="date" class="form-control" id="dateDeCommande">
            </div>

           
            <button type="submit" class="btn btn-primary">AjouterCommande</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCommande from '../../services/serviceCommande';
const router = useRouter()
const { ajouterCommande } = useCommande()

const commande = ref({
    produit: '',
    quantite: '',
    dateDeCommande: '',
  
})

const soumettre = () => {
    console.log('commande', commande.value)
    ajouterCommande(commande.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout", err))
}
</script>

<style lang="scss" scoped></style>
