<template>
  <div id="app">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      text: 'hello world'
    }
  }
}
</script>

<style>
  p {
    color: red;
    font-size: 40px;
  }
</style>
