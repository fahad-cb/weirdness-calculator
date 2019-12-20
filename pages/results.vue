<template>
  <v-content>
    <v-container  >
      <v-row >
        <v-col cols="12" sm="6" vs-type="flex">
          THis is results page
        </v-col>
        <v-col cols="12" sm="6">
          
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      appName : 'Weirdness calculator',
    }
  },
  methods : {
    
  },
  beforeMount () {
  },
  mounted () {
    console.log(this.$store.getters)
    this.$myFunction('Results page')
  }
}


  
</script>
