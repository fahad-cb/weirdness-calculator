<template>
  <v-content>
    <v-container  >
      <v-row no-gutters>
        <v-col cols="12" sm="6" vs-type="flex">
          <p>Find out how weird you are by selecting GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
          <p>When you find a GIF you like, press the like button. Once you like 5 GIFs, we'll show you how weird are you.</p>
          <v-row no-gutters>
            <v-col cols="12" sm="8">
              <v-text-field 
                v-model="SearchQuery" 
                clearable
                hide-no-data
                hide-details
                >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn @click="searchGiphy">Search Gify</v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row no-gutters>
            <v-col cols="12" sm="8" class="text-center">
                <v-img v-if="selectedImage" :src="`${selectedImage}`"></v-img>
            </v-col>
          </v-row>
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
      selectedImage: null,
    }
  },
  methods : {
    searchGiphy (e) {
      let query = this.SearchQuery.trim()
      if (query.length > 3){
        this.$axios.get(`translate?api_key=${this.$store.getters.apiKey}&s=${query}&weirdness=2`).then((response) => {
          if (response){
            let Images = response.data.data.images;  
            this.selectedImage = Images.downsized_large.url;
            console.log(this.selectedImage)
            this.$store.commit('addGif',this.selectedImage);
            
          }
        }).catch((err) => {
          console.log(err);
        });
      }
      
    }
  },
  beforeMount () {
  },
  mounted () {
    this.$myFunction('this my app again')
  }
}


  
</script>
