<!-- Main Component(Controls the whole app) -->
<template>
  <v-app id="inspire">
    <appHeader/>
    <nuxt /> 
    <snackBar/>
    <appFooter/>
  </v-app>
</template>
<script>



export default {
    layout : 'default',
    components : {
        snackBar  : () => import ('~/components/snackbar'),
        appHeader : () => import ('~/components/appHeader'),
        appFooter : () => import ('~/components/appFooter'),
    }
}
</script>