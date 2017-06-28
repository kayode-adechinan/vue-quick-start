<template>
<div class="notfound"> 

{{msg}}

</div> 


</template>

<script>
export default {
  name: 'notfound',
  data () {
    return {
      msg: 'the page you\'re looking fo doesn\'t exist'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
