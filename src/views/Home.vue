<template>
  <div class="welkome">
    <div class="textwelkome firstwelkome">
      Bienvenue chez CROSSFIT ! 
    </div> 
        
    <div class="welkometwo textwelkome">
      Venez repousser vos limites et rejoindre une communauté passionnée.  
      Prêt à relever le défi ?
    </div>
  </div>

  <div class="footer">
    <div class="footer-item">
      <div class="footer-item-image">
        <img src="@/assets/images/image1.jpeg" alt="Image 1" />
      </div>
      <div class="footer-item-content">
        <h3 class="coach-name">LUCAS BOREAU</h3>
        <h2 class="coach-description">
      
          SPECIALISTE EN FORCE ET ENDURANCE
        </h2>
    <p class="coach-description">
      Expert en CrossFit depuis 10 ans, Alex vous accompagnera dans l’atteinte de vos objectifs avec passion et rigueur.
    </p>
      </div>
    </div>

    <div class="footer-item">
      <div class="footer-item-image">
        <img src="@/assets/images/image2.jpeg" alt="Image 2" />
      </div>
      <div class="footer-item-content">
        <h3 class="coach-name">EMMA LEFEVRE</h3>
        <h2 class="coach-description">
        
     EXPERTE EN MOBILITÉ
    </h2>
    <p class="coach-description">
      Expert en CrossFit depuis 10 ans, Alex vous accompagnera dans l’atteinte de vos objectifs avec passion et rigueur.
    </p>
      </div>
    </div>

    <div class="footer-item">
      <div class="footer-item-image">
        <img src="@/assets/images/image3.jpeg" alt="Image 3" />
      </div>
      <div class="footer-item-content">
        <h3 class="coach-name">MATTHIEU DUBOIS</h3>
    <h2 class="coach-description">
      COACH EN CONDITIONING ET MENTAL STRENGTH
    </h2>
    <p>
      Matthieu est un expert en condition physique et en préparation mentale. Il vous poussera à vous dépasser.
    </p>
      </div>
    </div>   
  </div>
</template>
  
<script setup>
</script>

<style>
.welkome {
  width: 680px; 
  height: 234px; 
  font-family: sans-serif;
  position: absolute;
  top: 265px;
  right: 45px; 
  text-align: center;
  font-size: 32px;
  background-color: white;
  opacity: 0.8; 
}

.textwelkome {
  margin-left: 28px;
  margin-right: 28px;
  font-weight: 500;
  color: #313131;
}

.firstwelkome {
  margin-top: 15px;
}

.welkometwo {
  margin-bottom: 40px;
  margin-top: 30px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 296px;
  background-color: #121212;
  background-color: rgba(18, 18, 18, 0.7);

  display: flex;
  justify-content: space-around; /* espace égal entre les éléments */
  align-items: center; /* Alignement vertical */
  padding: 20px 0;
}

.footer-item {
  width: 452px;
  height: 230px;
  display: flex;
  align-items: center; /* Centre verticalement */
  background-color: #333333;
  overflow: hidden; /* évite que le contenu dépasse */
  margin-bottom: 37px;
}

.footer-item-image {
  width: 215px;
  height: 230px;
  overflow: hidden; 
}

.footer-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-item-content {
  flex: 1; /* Prend tout l'espace restant */
  padding-left:20px ; /* Ajoute de l'espace autour du texte */
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre le texte verticalement */
  align-items: flex-start; /* Aligne le texte à gauche */
  color: rgb(0, 0, 0);
  background-color: #ffffff; 
  height: 230px;
}

.coach-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.coach-description {
  font-size: 14px;
  line-height: 1.4;
  height: 200;
}

</style>
