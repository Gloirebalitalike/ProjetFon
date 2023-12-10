import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListeUtilisateur from '../components/utilisateurs/ListeUtilisateur.vue';
import DetailUtilisateur from '../components/utilisateurs/DetailUtilisateur.vue';
import AjouterUtilisateur from '../components/utilisateurs/AjouterUtilisateur.vue';


import MettreAJour from '../components/utilisateurs/MettreAJour.vue';
import Login from '../components/auth/Login.vue';
import test from '../components/utilisateurs/test.vue';
import AjouterCommentaire from '../components/utilisateurs/AjouterCommentaire.vue'
import AjouterCommande from '../components/utilisateurs/AjouterCommande.vue'
//import Valider


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListeUtilisateur
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailUtilisateur
    },
    {
      path: '/ajout',
      name: 'ajout',
      component: AjouterUtilisateur
    },
    {
      path: '/ajouter',
      name: 'ajouter',
      component: test
    },
    {
      path: '/mise-a-jour/:id',
      name: 'mise-a-jour',
      component: MettreAJour
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/ajoutercommentaire',
      name: 'ajoutercommentaire',
      component: AjouterCommentaire
    },
    {
      path: '/ajoutercommande',
      name: 'ajoutercommande',
      component: AjouterCommande
    },
    
  ]
});





export default router;
