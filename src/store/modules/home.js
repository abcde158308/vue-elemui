/*jshint esversion: 6 */
const state = {
  a:1,
  b:2,
  c:3  
};
const actions = {
    
};

const mutations = {
    changeState(state,num){
        console.log(state);

        console.log(22);
        state.a = num;
    }
};

const getters = {
    a:state => state.a,
    b:state => state.b,
    c:state => state.c
};
export default{
    state,
    actions,
    mutations,
    getters
};