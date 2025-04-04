<template>
  <div class="container">
    <div class="card">
      <div class="top-box">HEBDOMADAIRE</div>
      <div class="price">9.99€ Euros</div>
    </div>
    <div class="card">
      <div class="top-box">MENSUEL</div>
      <div class="price">19.99 Euros</div>
    </div>
    <div class="card">
      <div class="top-box">ANNUEL</div>
      <div class="price">390 Euros</div>
    </div>
  </div>

  <!-- Conditions d'engagement -->
  <div class="subscription-container">
    <div class="conditions-box">
      <a class="conditions" @click="toggleModal">CONDITIONS D'ENGAGEMENT</a>
    </div>
  </div>

  <!-- Modale -->
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <span class="close" @click="toggleModal">&times;</span>
      <p>Conditions d'Engagement – Salle de Sport CrossFit
Article 1 – Objet

Les présentes conditions d'engagement ont pour objet de définir les règles d'utilisation des installations et des services proposés par la salle de sport CrossFit [Nom de votre salle]. En adhérant à nos services, l'abonné reconnaît avoir pris connaissance de ces conditions et s'engage à les respecter.
Article 2 – Adhésion et Abonnement

    L'adhésion à la salle de sport est personnelle et non transférable.

    Toute inscription est effective après la signature du contrat et le paiement des frais d’abonnement.

    L’abonné doit fournir un certificat médical attestant de sa capacité à pratiquer une activité sportive si exigé.

    L’abonnement est valable pour la durée sélectionnée lors de l’inscription (hebdomadaire, mensuel ou annuel).

Article 3 – Accès aux Installations

    L'accès à la salle est autorisé uniquement aux adhérents munis de leur carte d’accès.

    Les horaires d’ouverture sont disponibles sur le site web et à l’accueil de la salle.

    L'abonné s'engage à respecter les consignes de sécurité et les règles de bonne conduite au sein de l'établissement.

    L'accès peut être refusé en cas de comportement inapproprié, dangereux ou irrespectueux envers le personnel ou les autres membres.

Article 4 – Règlement Intérieur et Sécurité

    Tenue sportive obligatoire : une tenue de sport adaptée, des chaussures propres et une serviette sont exigées.

    Hygiène et propreté : il est demandé de nettoyer le matériel après utilisation et d'utiliser les vestiaires de manière responsable.

    Interdiction de fumer, de consommer de l'alcool ou des substances interdites dans l'établissement.

    Toute utilisation inappropriée du matériel engage la responsabilité de l’abonné.

Article 5 – Conditions de Résiliation et Suspension

    L’abonné peut demander une résiliation de son abonnement selon les modalités prévues dans son contrat.

    Un remboursement n'est possible qu'en cas de force majeure justifiée (exemple : blessure grave, déménagement, etc.).

    La salle se réserve le droit de suspendre ou résilier un abonnement en cas de non-respect du règlement.

Article 6 – Responsabilité et Assurances

    L’abonné est responsable de ses affaires personnelles. La salle décline toute responsabilité en cas de vol ou de perte.

    L’adhérent reconnaît pratiquer les activités sportives sous sa propre responsabilité et s’engage à respecter les consignes des coachs.

    La salle est couverte par une assurance responsabilité civile, mais recommande aux abonnés de souscrire une assurance individuelle accident.

Article 7 – Droit à l’image

    L’adhérent autorise la salle à utiliser des photos ou vidéos prises lors des entraînements à des fins de communication (réseaux sociaux, site web), sauf opposition écrite.

Article 8 – Modifications des Conditions

    La salle de sport se réserve le droit de modifier ces conditions. Les abonnés seront informés des changements par email ou affichage dans l’établissement.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Variable réactive pour afficher/cacher la modale
const isModalOpen = ref(false);

// Fonction pour ouvrir/fermer la modale
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<style scoped>
/* Conteneur principal */
.conditions{
  cursor: pointer;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  height: 100vh;
}


.card {
  width: 356px;
  height: 426px;
  background-color: rgba(254, 254, 254, 0.661);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Rectangle en haut */
.top-box {
  width: 308px;
  height: 90px;
  background-color: rgba(254, 254, 254, 0.816);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  font-weight: bold;
}

/* Prix */
.price {
  font-size: 24px;
  font-weight: bold;
}

/* conditions d'engagement */
.subscription-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
}

.conditions-box {
  width: 350px;
  height: 86px;
  background-color: rgba(254, 254, 254, 0.661);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  bottom: 100px;
}

/* modale */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  position: relative;
  padding: 50px;
  background-color: white;
  width: 60%;
  height: 50%;

  
}

/* Croix de fermeture */
.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: black;
}
</style>
