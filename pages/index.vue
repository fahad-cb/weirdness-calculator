<template>
  <v-content>
    <v-container  >
      <v-row no-gutters>
        <v-col cols="12" sm="6" vs-type="flex">
          <p>Find out how weird you are by selecting GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
          <p>When you find a GIF you like, press the like button. Once you like 5 GIFs, we'll show you how weird are you.</p>
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
          <div class="text-center" >
            <h2 >Liked GIFS</h2>
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
