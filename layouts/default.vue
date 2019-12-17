<!-- Main Component(Controls the whole app) -->
<template>
  <v-app dark>
    <appHeader/>
    <nuxt /> 
    <appFooter/>
  </v-app>
</template>
<script>



export default {
    layout : 'default',
    components : {
        appHeader : () => import ('~/components/appHeader'),
        appFooter : () => import ('~/components/appFooter'),
    }
}
</script>