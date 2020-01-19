import axios from "axios"

const state = {
    banco: [],
    carrinho: [],
    busca: ""
}

//O mapGetter permite acessar esses getters ja salvos no Vuex
const getters = {
    allItens: (state) => state.banco,
    getFiltrado: (state) => state.banco.filter(item => { if(item.descricao.toUpperCase().includes(state.busca.toUpperCase()))return true}),
    getCarrinho: (state) => state.carrinho
}

// o mapActions solicita a Api do Backend modificações
const actions = {
    async fetchItens({ commit }){
        console.log("Fetching")
        const response = await axios.get("http://localhost:3000/roupas")
        commit("setItens", response.data)
    },
    async deleteById({commit}, id){
        if(confirm("Voce tem Certeza que deseja deletar?")){
        const response = await axios.delete(`http://localhost:3000/roupas/del/${id}`)
        if(response.data.deletedCount > 0){
            commit("delete", id)
        }else{
            commit("log","Failed to Delete")
        }}
        // Atualizar Banco
    },
    async adicionarItem({commit}, item){
        const response = await axios.post("http://localhost:3000/roupas", item)
        commit("log", response)
        
    },
    adicionarCarrinho({commit}, item){
        if(state.carrinho.includes(item)){
            commit("log", "Este Item Ja esta no Carrinho")
        }else{
            commit("adicionarCarrinho", item)
        }
    },
    removerCarrinho({commit}, id){
        if(confirm("Deseja remover do carrinho")){
            var arr = state.carrinho.filter(item => {
                if(item._id != id) 
                return true
            })
            commit("setCarrinho", arr)
        } 
        
    },
    async removerEstoque({commit, state},){
        if(confirm("Deseja excluir do estoque os itens do carrinho?")){
            
            state.carrinho.forEach(async function(item){
                console.log(await (await axios.delete(`http://localhost:3000/roupas/del/${item._id}`)).statusText)
            })
            commit("setCarrinho",[])
            
        } 
        
    },
    buscar({commit}, key){
        commit("buscar",key)
    }
}

//Devem ser Síncronas, o primeiro parametro sempre é o state
const mutations = {
    setItens: (state, res) => (state.banco = res),
    delete: (state, id) => state.banco = state.banco.filter(item => {if(item._id != id) return true}),
    log: (state, text) => console.log(text),
    buscar: (state, key) => state.busca = key,
    adicionarCarrinho: (state, item) => state.carrinho.push(item),
    setCarrinho: (state, array) => state.carrinho = array
        
    
    //removerCarrinho: (state, id) => state.carrinho.filter(item => {if(item._id != id) return true}),
}

export default {
    state,
    getters,
    actions,
    mutations
}