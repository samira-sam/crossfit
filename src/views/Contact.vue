<template>
    <div class="contact-container">
      <!-- Formulaire sur le côté gauche -->
      <div class="form-container">
        <form>
            <label for="nom">NOM</label>
          <input type="text" />
          <label for="prenom">PRENOM</label>
          <input type="text"  />
          <label for="email">EMAIL</label>
          <input type="email"  />
          <button type="submit">VALIDER</button>
        </form>
      </div>
  
      <!-- Carte et adresse sur le côté droit -->
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20221.462063890576!2d3.145282750433393!3d50.68871340445741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32891f6ff8a69%3A0x40af13e816459b0!2s59100%20Roubaix!5e0!3m2!1sfr!2sfr!4v1743088351551!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="address">
        <p>Adresse:  41 rue de Chanzy, Roubaix, 59100

</p>
        <p>Téléphone: 03.20.73.80.80</p>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact",
  };
  </script>
  
  <style scoped>
  
  .contact-container {
    display: flex;
    margin: 20px;
    gap:300px;
    margin-top: 200px;
    margin-right: 200px;
    margin-left:200px;
   
  }
  
  /* Conteneur du formulaire */
  .form-container {
    width: 600px;
    height: 630px;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    
    padding-top:100px;
    background-color: rgba(217, 217, 217, 0.8);

    
  }
  
  /* Formulaire et ses éléments */
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Répartit les éléments sur toute la hauteur */
    align-items: center; 
    
  }
  
  /* Labels */
form label {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-right: 410px;
  display: block;
  width: 70px;
}
 
  .form-container input {
    width: 80%;
    height: 45px;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 16px;
    text-align: center;
  }
  .form-container button {
    width: 280px;
    height: 45px; 
    margin-bottom: 15px;
    padding: 10px;
    font-size: 20px;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    cursor: pointer;
    margin-bottom:100px;
    margin-top:40px;
    font-weight: 505;
  }
  
 
  
  /* Conteneur de la carte */
  .map-container {
    width: 600px;
    height: 700px;
   
    flex-direction: column;
    padding: 20px;
    background-color: rgba(217, 217, 217, 0.8);
    align-items: flex-start;
    
  }
  
  .map-container iframe {
    width: 100%;
    height: 75%;
  }
  
  .map-container p {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    text-align: left;
   
  }
  /* adresse alignée à gauche */
.address {
    padding-top:20px;
 
  margin-top: 30px;
  padding-left: 10px;
  background-color: #ffffff;
  font-weight: 505;
  
 
}

.address p {
  font-size: 20px;
  margin: 5px 0;
  padding-bottom: 20px;
}
  </style>
  