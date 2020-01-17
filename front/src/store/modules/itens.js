import axios from "axios"

const state = {
    banco: []
}

//O mapGetter permite acessar esses getters ja salvos no Vuex
const getters = {
    allItens: (state) => state.banco
}

// o mapActions solicita a Api do Backend modificações
const actions = {
    async fetchItens({ commit }){
        const response = await axios.get("http://localhost:3000/roupas")
        commit("setItens", response.data)
    },
    test({commit}, text){
      commit('log',text)  
    },
    async deleteById({commit}, id){
        const response = await axios.delete(`http://localhost:3000/roupas/del/${id}`)
        commit("log", response.data.deletedCount)
        // Atualizar Banco
    }
}

//Devem ser Síncronas, o primeiro parametro sempre é o state
const mutations = {
    setItens: (state, res) => (state.banco = res),
    log: (state, text) => console.log(text)
    
}

export default {
    state,
    getters,
    actions,
    mutations
}