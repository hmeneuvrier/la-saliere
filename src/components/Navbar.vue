<template>

    <div class="bg-indigo" v-if="isLogged">
        <p>
            {{greeting}} personne connectée !
        </p>
    </div>
    <div v-else>
        connectez-vous
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