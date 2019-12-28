<template>
  <v-content>
    <v-container class="text-center">
      <v-row >
        <v-col cols="12" vs-type="flex">
          <h4 class="text-center">You scored an {{avgerageResult}} out of 10 on the weirdness scale!</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" >          
          <h2> Yours Liked GIFS</h2>
          <likedImages :likedImages="likedImages"/> 
        </v-col>
      </v-row>
      <v-row >
        <v-col cols="12" vs-type="flex">
          <v-btn @click="startOver" >Start over</v-btn>
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
      avgerageResult : 0,
      likedImages : this.$store.getters.likedImages,
    }
  },
  components : {
    likedImages: ()=> import('~/components/likedImages')
  },
  methods : {
    startOver (){
      this.$store.commit('startOver',{});
      this.$router.push('/');
    }
  },
  beforeMount () {
  },
  mounted () {
    let avg = this.$store.getters.weirdnessArr.reduce((a,b) =>  a + b ) / this.$store.getters.weirdnessArr.length;
    this.avgerageResult = avg;
  }
}


  
</script>
