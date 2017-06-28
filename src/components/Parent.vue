<template>
<div class="parent"> 

	{{msg}}
	<child></child>

</div> 


</template>

<script>
import Child from './Child'

export default {
  name: 'parent',
  data () {
    return {
      msg: 'am parent'
    }
  },
  components: {
    Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
