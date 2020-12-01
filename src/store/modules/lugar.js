import axios from 'axios';

const state = {
    lugares: []
}

const getters = {
    lugaresEncontrados: state => state.lugares,
}

const actions = {
    pegarLocaisMaisProximosPorTexto({ commit }, { lat, long, search }){
        console.log(search);
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?location=${lat},${long}&radius=1500&query=${search}&key=AIzaSyBouFPwLmPCen4qxUFBRcMMAFEPq2NyL34`)
        .then(response => {
            //console.log(JSON.stringify(response.data.results));
            commit('pegarLocaisMaisProximosPorTexto', response.data.results);
        }).catch(()=> commit('pegarLocaisMaisProximosPorTexto', false))
    },
}

const mutations = {
    pegarLocaisMaisProximosPorTexto: (state, data) => state.lugares = data,
}

export default {
    state,
    getters,
    actions,
    mutations
}