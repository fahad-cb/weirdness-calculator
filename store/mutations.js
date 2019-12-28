export default {
    addGif(state,payload){
        state.likedImages.push(payload);
    },
    addWeirdness(state,payload){
        state.weirdnessArr.push(payload);
    },
    startOver(state,payload){
        state.weirdnessArr = [];
        state.likedImages = [];
    }
}