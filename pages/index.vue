<template>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            {{appName}}
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
      appName : this.$store.getters.counter
    }
  },
  methods : {

  },
  beforeMount () {
    console.log('before mounted');
  },
  mounted () {
    console.log('mounted');
  }
}


  
</script>
