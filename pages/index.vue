<template>
  <v-content>
    <v-container  >
      <v-row >
        <v-col cols="12" sm="6" vs-type="flex">
          <p>Find out how weird you are by selecting GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
          <p>When you find a GIF you like, press the like button. Once you like 5 GIFs, we'll show you how weird are you.</p>
          <v-row >
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
          <v-row>
            <v-progress-linear
               v-if="searchLoading"
              :active="true"
              :color="color"
              :indeterminate="true"
              class="ma-0"
              height="4"
            >
            </v-progress-linear>
          </v-row>
          <v-row v-if="selectedImage">
            <v-col cols="12" sm="12" >
              <div class="text-xs-center">
                <v-img :src="`${selectedImage}`"  max-width="500" max-height="300"></v-img>
              </div>
            </v-col>
            <v-slider
              v-model="weirdness"
              step="10"
              ticks="always"
              tick-size="2"
              @change="searchGiphy"
            ></v-slider>
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
      color : 'red',
      searchLoading : false,
      selectedImage: '',
      lazySelectedImage : '',
      weirdness : '1',
    }
  },
  methods : {
    searchGiphy (e) {
      this.searchLoading = true;
      let query = this.SearchQuery.trim()
      let weirdness = this.weirdness / 10
      if (query.length > 3){
        this.$axios.get(`translate?api_key=${this.$store.getters.apiKey}&s=${query}&weirdness=${weirdness}`).then((response) => {
          if (response){
            this.searchLoading = false;
            let Images = response.data.data.images;  
            this.selectedImage = Images.downsized.url;
            this.lazySelectedImage = Images.fixed_height_small_still.url;
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
