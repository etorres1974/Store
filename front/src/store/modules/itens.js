import axios from "axios"

const state = {
    banco: [],
    busca: ""
}

//O mapGetter permite acessar esses getters ja salvos no Vuex
const getters = {
    allItens: (state) => state.banco,
    getFiltrado: (state) => state.banco.filter(item => { if(item.descricao.toUpperCase().includes(state.busca.toUpperCase()))return true})
}

// o mapActions solicita a Api do Backend modificações
const actions = {
    async fetchItens({ commit }){
        const response = await axios.get("http://localhost:3000/roupas")
        commit("setItens", response.data)
    },
    async deleteById({commit}, id){
        const response = await axios.delete(`http://localhost:3000/roupas/del/${id}`)
        if(response.data.deletedCount > 0)
            commit("delete", id)
        else{
            commit("log","Failed to Delete")
        }
        // Atualizar Banco
    },
    async adicionarItem({commit}, item){
        const response = await axios.post("http://localhost:3000/roupas", item)
        commit("log", response)    
    }
}

//Devem ser Síncronas, o primeiro parametro sempre é o state
const mutations = {
    setItens: (state, res) => (state.banco = res),
    delete: (state, id) => state.banco.splice(id,1),
    log: (state, text) => console.log(text),
    buscar: (state, key) => state.busca = key

    
}

export default {
    state,
    getters,
    actions,
    mutations
}