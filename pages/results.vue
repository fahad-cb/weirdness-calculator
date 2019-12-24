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
          <v-row justify="space-between">
            <v-col cols="auto" v-for="img in likedImages">
              <v-img
                height="150"
                width="200"
                :src="`${img}`"
              ></v-img>
            </v-col>
          </v-row>
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
  methods : {
    startOver (){
      this.commit()
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
