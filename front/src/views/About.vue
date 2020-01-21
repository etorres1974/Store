<template>
  <v-container class="about">
    <v-row>
      <v-icon>mdi-information-outline</v-icon>
      <h1>About</h1>
    </v-row>

    <v-row>
      <h4>Esse aplicativo simula um cadastro produtos, aqui estão um resumo das funcionalidades de cada aba do menu  <v-icon color="black"> mdi-menu</v-icon></h4>
      
    </v-row>
    <br />

    <v-row>
      <v-icon color="black">mdi-home</v-icon>
      <h3>Admin :</h3>
    </v-row>
    <h4>Neste Menu é possível adicionar produtos ao banco de dados</h4>
    <br />

    <v-row>
      <v-icon color="black">mdi-hanger</v-icon>
      <h3>Vitrine:</h3>
    </v-row>
    <h4>Os produtos cadastrados no banco de dados são mostrados nessa pagina, podendo ser exluídos do banco ou adicionados a sacola de Compras</h4>
    <br />
    
    <v-row>
      <v-icon color="black">mdi-shopping</v-icon>
      <h3>Sacola :</h3>
    </v-row>

    <h4>Com os produtos ja na sacola é possível, retirar algum item da sacola, emitir uma Nota de Orçamento para confirmar o pedido e por fim deletar os itens do banco de dados</h4>

    <br />
    
    <v-row>
      <v-icon color="black">mdi-magnify</v-icon>
      <h3>Buscar :</h3>
    </v-row>
    <h4> No topo da Página uma barra de pesquisa fixada pode ser utilizada para filtrar os resultados mostrados</h4>

  </v-container>
</template>

<script>
export default {
  components: {}
};
</script>