<template>
  <div id="app">
    <navbar></navbar> 
    <h1>Hello La Salière 2 </h1>
    <ad></ad> 
  </div>
</template>
 
<script>
import Navbar from './components/Navbar.vue'
import Ad from './components/Ad.vue'
 
export default {
  name: 'application',
  data () {
    return {
    }
  },
  components: {
    Navbar, Ad
  }
}
</script>

