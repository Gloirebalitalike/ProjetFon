<template>
    <div>
        <form @submit.prevent="connecter">
        
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="loginInfo.email" type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input v-model="loginInfo.motDePasse" type="password" class="form-control" id="mdp">
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from '../../services/serviceAthentification';
const router = useRouter()
const { login } = useAuth()

const loginInfo = ref({
    email: '',
    motDePasse: ''
})

const connecter = () => {
    console.log('login', loginInfo.value)
    login(loginInfo.value.email,loginInfo.value.motDePasse).then((data) => {
        console.log('utilisateur',data)
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout", err))
}
</script>

<style lang="scss" scoped></style>