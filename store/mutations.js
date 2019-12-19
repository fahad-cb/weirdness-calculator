export default {
    increment (state,payload) {
        state.counter = payload;
    },
    addGif(state,payload){
        state.likedImages.push(payload);
    }
}