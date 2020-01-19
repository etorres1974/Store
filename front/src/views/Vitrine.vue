<template>
  <v-container>
    <h1>Vitrine</h1>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(card, i) in getFiltrado" :key="card._id" :cols=4>
          <v-card>
            <v-img
              :src="card.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400"
              width="400"
            >
              <v-card-title></v-card-title>
            </v-img>

            <v-card-actions>
              {{ card.descricao }}
              <v-spacer></v-spacer>

              <v-btn icon>
              
                <v-icon  @click="deleteById(card._id)">mdi-delete</v-icon>
              </v-btn>

              <v-btn v-if="getCarrinho.includes(card)" @click="removerCarrinho(i)" icon>
                <v-icon color="amber"  >mdi-shopping</v-icon>
              </v-btn>
              
              <v-btn  v-else @click="adicionarCarrinho(card)" icon>
                <v-icon >mdi-shopping</v-icon>
              </v-btn>

              

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters ,mapActions} from "vuex"

export default {
  components: {},
  data() {
    return {
      //SnackBar
      color: "",
      snackbar: false,
      text: "SnackText",
      error: "",

      // Campos para input
      roupa: {
        descricao: "",
        img: "",
        flex: 4,
        fav: false
      },
      
    
    };
  },
  methods: {
    ...mapActions(["fetchItens"]),
    ...mapActions(["deleteById"]),
    ...mapActions(["adicionarCarrinho"]),
    ...mapActions(['removerCarrinho']),
    
  },
  computed: {
    ...mapGetters(['allItens']),
    ...mapGetters(['getFiltrado']),
    ...mapGetters(['getCarrinho']),
  },
  
  created(){
    this.fetchItens()
    
  }
};
</script>
