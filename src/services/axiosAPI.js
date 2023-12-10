import axios from "axios";
//Amener le authStore pour avoir le token
import useAuthStore from "../stores/auth";
// Mettre l'url par defaut dans axios
const frontAPI = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

//Lier le token au requetes
frontAPI.interceptors.request.use(config => {
    //Recuperation du token depuis le store
    const { getToken: token } = useAuthStore()
    config.headers = {
        'Authorization': token ? `Bearer ${token}` : '',
    }

    return config
})


export default frontAPI
