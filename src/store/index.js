/*jshint esversion: 6 */
import vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import car  from './modules/car';
vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        home,
        car
    }
});

export default store;