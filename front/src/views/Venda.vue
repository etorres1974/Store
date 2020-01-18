<template>
  <v-container>
    <div class="text-center">
      <h2 v-if="!printing">Carrinho</h2>
      <h2 v-else >Nota de Orçamento</h2>
      <h4 v-show="printing" class="text-left">{{dataBr}}</h4>

    <v-list>
    <v-list-item-group >
          <v-list-item v-for="(item, i) in getCarrinho" :key="item._id">
            <v-list-item-title align="start" v-text="item.descricao"></v-list-item-title>
            <v-list-item-icon>
              <v-spacer></v-spacer>
              {{item.preco}}
              <v-icon v-if="!printing" right small @click="removerCarrinho(i)">mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content></v-list-item-content>
          </v-list-item>
          <v-list-item v-if="getCarrinho.length == 0">Vazio</v-list-item>
          <v-list-item v-else>
            TOTAL
            <v-spacer></v-spacer>
            {{total}}
          </v-list-item>
      </v-list-item-group>
      </v-list>

    </div>
    
    <v-btn block align="center" class="naoImprimir" v-on:click.stop="imprimir">Finalizar Compra</v-btn>
    <br>
    <v-btn block align="center" class="naoImprimir" v-on:click.stop="removerEstoque">Remover Itens Do Estoque</v-btn>
  </v-container>
</template>

<script>
// @ is an alias to /src
import {mapGetters ,mapActions, mapMutations} from "vuex"
export default {
  name: "venda",
  
  data() {
    return {
      printing: false,
      
    };
  },
  methods: {
    async imprimir() {
      await this.inverter();
      await print();
      this.printing = !this.printing;
    },
    inverter() {
      this.printing = !this.printing;
    },
    ...mapMutations(['removerCarrinho']),
    
  },
  computed: {
    total: function() {
      var total = 0;
      this.getCarrinho.forEach(item => {
        total += item.preco;
      });
      
      return total;
    },
    dataBr: function() {
      var d = new Date();
      var dia = d
        .getDate()
        .toString()
        .padStart(2, "0");
      var mes = (d.getMonth() + 1).toString().padStart(2, "0"); //+1 pois no getMonth Janeiro começa com zero.
      var ano = d.getFullYear();
      var hora = d.getHours();
      var minutos = d.getMinutes().toString().padStart(2, "0");;
      return `${dia}/${mes}/${ano}  ${hora}:${minutos}`;
    },
    ...mapGetters(['getFiltrado']),
    ...mapGetters(['getCarrinho']),
    
    

  }
};
</script>
<style >
@media print {
  .naoImprimir {
    display: none;
  }
}
</style>