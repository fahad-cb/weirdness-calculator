export default {
    async nuxtServerInit({commit},{error}){
        try{
           console.log('sever init')
        }catch(err){
          console.log(err)
        }  
    }
}