<template>
    <v-snackbar v-model="snackbar"  :timeout="timeout">
      {{ message }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
</template>


<script>
export default {
    name : "snackbar",
    data () {
        return {
            message : "this is a text message",
            snackbar : false,
            timeout : 4000,
        }
    },
    created (){
        this.$store.watch(state => state.snack, () =>{
            const msg = this.$store.state.snack;
            if (msg != ''){
                this.message = msg;
                this.snackbar = true;
                this.$store.commit('snackIt','')
            }
        })
    },
}
</script>
