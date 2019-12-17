<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <p>Search any of the the image</p>
          <v-text-field 
            @keyup="searchGiphy" 
            v-model="SearchQuery" 
            clearable
            hide-no-data
            hide-details
            >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <div>
            Selected Images
          </div>
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
      appName : this.$store.getters.counter,
      SearchQuery:[],
    }
  },
  methods : {
    searchGiphy (e) {
      let query = this.SearchQuery.trim()
      console.log(query)
    }
  },
  beforeMount () {
  },
  mounted () {
    this.$myFunction('this my app again')
  }
}


  
</script>
