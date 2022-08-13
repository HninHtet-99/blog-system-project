<template>
  <div class="spinner">

  </div>
</template>

<script>
export default {

}
</script>

<style>
.spinner{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #ff8800;
    margin: 30px auto;
    animation: loading 1s infinite;
}
@keyframes loading {
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>