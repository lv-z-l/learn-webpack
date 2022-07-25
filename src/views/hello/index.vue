<template>
  <div id="box">
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'HELLO'
    }
  }
}
</script>

<style>
div#box {
  background-image: url('../../../public/assets/images/1920x1080pro_Moment1.jpg');
  height: 98vh;
}
</style>
