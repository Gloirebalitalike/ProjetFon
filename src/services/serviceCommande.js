import axios from 'axios';

const useCommande = () => {
    const getCommandes = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/commandes`);
        return result.data.data;
    };

    const getCommandeById = async (id) => {
        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/commandes/${id}`);
        return result.data.data;
    };

    const ajouterCommande = async (commande) => {
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/commandes`, commande);
        return result.data.data;
    };

    const supprimerCommande = async (id) => {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/commandes/${id}`);
        return result.data.data;
    };

    const mettreAJourCommande = async (id, commande) => {
        const result = await axios.put(`${import.meta.env.VITE_BASE_URL}/commandes/${id}`, commande);
        return result.data.data;
    };

    return { getCommandes, getCommandeById, ajouterCommande, supprimerCommande, mettreAJourCommande };
};

export default useCommande;
