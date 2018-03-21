<template>

    <div class="row">
        <div v-for="annonce in annonces" class="col-sm-4 border border-secondary">
          <b>{{annonce.title}}</b> : <br> {{annonce.description}}<br>
          <img class="img-thumbnail rounded mx-auto d-block" :src="annonce.image">
        </div>
    </div>

</template>

 
<script>
 
export default {
  name:"Ad",
  data: function () {
    return {
        annonces: [
            {title: "Vidange", description: "Ancien mécanicien, je propose de vous montrer comment faire la vidange de votre voiture", image:'http://017ceef6c63d58be7d0b-54fdb269da09e5374665f5eb35cabb49.r77.cf1.rackcdn.com/mmc_vignettes/faire-vidange.jpg'},
            {title: "Graines de tomates", description: "Je donne des semences de variétés anciennes de tomates, noire de crimée...", image:'http://www.mescoursesalaloupe.fr/wp-content/uploads/2017/09/coeur-de-boeuf-150x150.jpeg'},
            {title: "Espagnol", description: "Je vous propose des thé-espagnol pour vous permettre de continuer à pratiquer ...", image:'http://www.dynamictic.info/wp-content/uploads/2012/07/supportrice-espagnole-17-150x150.jpg'}
          ]
    }
  }
}
</script>