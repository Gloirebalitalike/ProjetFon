import axios from "axios"
const useAuth = () => {
    const login = async (email, motDePasse) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, { email, motDePasse })
        return result.data

    }

    return { login }
}

export default useAuth