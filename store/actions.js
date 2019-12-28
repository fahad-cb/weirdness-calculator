export default {
    async nuxtServerInit({commit},{error}){
        try{
           console.log('server init')
        }catch(err){
          console.log(err)
        }  
    }
}