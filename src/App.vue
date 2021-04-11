<template>
    <div id="app">
        <!-- <Menu/> -->
        <router-view :key="$route.path"></router-view>
    </div>
</template>

<script>
// import Menu from './components/menu'
export default {
    name: 'App',
    components: {
        // Menu
    },
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.min.css";
@import "../node_modules/bulma/css/bulma.css";
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    /* color: #2c3e50; */
    /* margin-top: 60px; */
}
.modal-card-head, .modal-card-foot {
    padding: 15px;
}
.card{
    border-radius: 0;
}

</style>
