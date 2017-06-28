<template>
<div class="detail"> 

<div>Detail {{ id }}</div>

</div> 


</template>

<script>
export default {
  name: 'detail',
  props: ['id'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
