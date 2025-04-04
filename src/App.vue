<template>
  <div id="app" class="background">
    <nav>
      <div class="logo"><img src="@/assets/images/logo.png" alt="Logo" /></div>
      <router-link class="navlink"
        to="/" 
        :class="{ 'active-link': isActive('/') }">
        ACCEUIL
      </router-link>
      <router-link class="navlink"
        to="/subscription" 
        :class="{ 'active-link': isActive('/subscription') }">
        ABONNEMENT
      </router-link>
      <router-link 
        to="/contact" class="navlink"
        :class="{ 'active-link': isActive('/contact') }">
        CONTACT
      </router-link>
    </nav>

   
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

// fonction pour vérifier si la route actuelle correspond à un chemin précis
function isActive(path) {
  return route.path === path;
}
</script>

<style>

.background {
  background-image: url('@/assets/images/fond.jpg'); 
  background-size: cover;  /* Ajuste la taille pour couvrir toute la page */
  background-position: center; /* centre l’image */
  background-repeat: no-repeat; /* Empêche la répétition */
  width: 100vw; /* Largeur de la fenêtre */
  height: 100vh; /* Hauteur de la fenêtre */
  position: fixed; /* Fixe l'image pour éviter les défilements */
  top: 0;
  left: 0;
}

nav {
  position: absolute;
  width: 100%;
  display: flex;
  
  align-items: center;}
.navlink{ 
  margin-right: 70px;
  margin-top: 37px;
  text-decoration: none;
  color: black;
  font-weight: 505;
  font-size: 24px;
  font-family: sans-serif;}


/*  uniquement pour lien actif */
.active-link {
  text-decoration: underline 3px solid black;
  text-underline-offset: 6px; /* Augmente la distance entre le texte et le trait */
}
.logo img{
  width:141px ;
  height: 141px;
  margin-right: auto; 
  margin-top:23px;
  margin-left: 46px;
    
   
}
.logo{margin-right: auto; }

</style>
