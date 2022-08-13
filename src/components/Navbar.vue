<template>
  <header>
    <h1>Blog System Project</h1>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="{name:'create'}">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
header h1{
    color: #dfdfdf;
    font-size: 48px;
}
header a{
    color: #bbb !important;
    text-decoration: none;
    margin-left: 20px;
}
nav a.router-link-exact-active{
    color: #444 !important;
    font-weight: bold;
}
</style>