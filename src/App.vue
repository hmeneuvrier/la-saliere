<template>
  <div id="app">
    <h1>Hello La Salière </h1>
    <ad :ad="ad"></ad> 
  </div>
</template>
 
<script>
import Ad from './Ad.vue'
 
export default {
  name: 'application',
  data () {
    return {
    }
  },
  components: {
    Ad
  }
}
</script>

