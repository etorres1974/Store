<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      @click.stop="drawer = !drawer"
    >
      <v-list v-for="(item,i) in items" :key="i">
        <v-list-item @click.stop="drawer = !drawer" :to="item.link">
          <v-list-item-action  >
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      class="naoImprimir"
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer" />
      <v-toolbar-title>Loja</v-toolbar-title>
      <v-text-field
        class="mx-4 r"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        v-model="search"
        @keyup="buscar(search)"
        
      ></v-text-field>
        

    </v-app-bar>


    <v-content >
        <v-container fluid>
        <!--<router-link to="/roupas">Roupas</router-link> -->
        <v-spacer></v-spacer>
        
        <router-view></router-view>
        </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
      drawer: false,

      search: "",
      items:[
        {icon:"mdi-home", link:"/admin", name:"Admin"},
        {icon: "mdi-hanger", link:"/vitrine", name:"Vitrine"},
        {icon: "mdi-shopping", link:"/venda", name:"venda"}
        
      ]
    }),
  methods:{
      ...mapActions(['buscar'])
    }
}
;
</script>
