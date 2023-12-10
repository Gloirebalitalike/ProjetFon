import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
const useAuthStore = defineStore('auth', () => {
    // Donnees dont nous avons besoin apres la connexion
    const user = ref({})
    const token = ref()
    const router = useRouter()

    //Les fonctions qui permettent de mettre a jour les valeurs des variables precedentes
    // Appelees setters

    const setUser = currentUser => {
        user.value = currentUser
    }

    const setToken = (currentToken) => {
        token.value = currentToken
    }

    const logout = () => {
        user.value = null
        token.value = null
        router.push('/login')

    }

    //Les fonctions qui retournent la valeur courante
    // computed permet de relire seulement s'il y'a une modification
    const loggedInUser = computed(() => user.value)
    const getToken = computed(() => token.value)

    return { user, token, setToken, setUser, loggedInUser, getToken, logout }
},
    {
        persist: true
    }
)

export default useAuthStore