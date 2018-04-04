<template>

    <div class="bg-indigo" v-if="isLogged">
        <p>
            Profil | Annonces | Wishlist | Messagerie
        </p>
    </div>
    <div v-else>
        Aide | Inscription | Connexion
    </div>


</template>


 
<script>
 
export default {
  name:"Navbar",
  data: function () {
    return {
        greeting: 'Hello'
    }
  }
}
</script>