<template>
    <section v-if="likedImages">
        <v-row justify="space-between">
            <v-col cols="auto" v-for="img in likedImages">
                <v-img
                height="150"
                width="200"
                :src="`${img}`"
                ></v-img>
            </v-col>
        </v-row>
    </section>
</template>


<script>
export default {
    name : "gifList",
    props : ['likedImages'],
    mounted (){
       
    }
}
</script>
