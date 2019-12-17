export default {
    async nuxtServerInit({commit},{error}){
        try{
            commit('increment','this is an app')
        }catch(err){
          console.log(err)
        }  
    }
}