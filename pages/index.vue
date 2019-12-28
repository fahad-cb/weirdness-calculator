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
                <v-img :src="`${selectedImage}`" :ref="'image'+selectedImage" max-width="600" max-height="300"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="12" >
              <v-slider
                v-model="weirdness"
                step="10"
                ticks="always"
                tick-size="2"
                @change="searchGiphy"
              ></v-slider>
            </v-col>
            <v-col cols="12" sm="12" >
              <div class="text-xs-center">
                <v-btn text icon color="deep-orange" v-if="!liked" @click="saveImage">
                  <v-icon>mdi-thumb-up</v-icon>
                  Like
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="text-center">
          <div>
            <h2 >Liked GIFS</h2>
          </div>
          <likedImages :likedImages="likedImages" />
          <no-ssr>	
           <v-btn  class="text-center" @click="calculateWeirdness" v-if="likedImages && likedImages.length > 4">
             Calculate Weirdness
           </v-btn>
          </no-ssr>
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
      SearchQuery:[],
      color : 'red',
      searchLoading : false,
      liked : false,
      selectedImage: '',
      lazySelectedImage : '',
      weirdness : 0,
      likedImages : this.$store.getters.likedImages,
    }
  },
  components : {
    likedImages: ()=> import('~/components/likedImages')
  },  
  methods : {
    searchGiphy (e) {
      this.liked = false;
      this.searchLoading = true;
      if (this.SearchQuery.length > 3){
        let query = this.SearchQuery.trim()
        let weirdness = this.weirdness / 10
        this.$axios.get(`translate?api_key=${this.$store.getters.apiKey}&s=${query}&weirdness=${weirdness}`).then((response) => {
          if (response){
            this.searchLoading = false;
            let Images = response.data.data.images;  
            this.selectedImage = Images.downsized.url;
            this.lazySelectedImage = Images.fixed_height_small_still.url;
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    saveImage (e){
      this.liked = true;
      let weirdness = this.weirdness / 10
      if (this.likedImages.length < 5 ){
        this.$store.commit('addGif',this.selectedImage);
        this.$store.commit('addWeirdness',weirdness);
        this.$store.commit('snackIt','You liked ('+this.likedImages.length+') Gif(s)')
      }else{
        this.$store.commit('snackIt','Cannot add more, max limit is 5')
      }
    },
    calculateWeirdness (){
      this.$router.push('/results');
    }
  },
  beforeMount () {
  },
  mounted () { 
  }
}


  
</script>
