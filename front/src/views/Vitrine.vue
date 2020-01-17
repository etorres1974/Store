<template>
  <v-container>
    <h1>Vitrine</h1>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(card, i) in allItens" :key="card._id" :cols=4>
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
                <v-icon v-if="card.fav" color="red" @click="favoritar(i)">mdi-heart</v-icon>
                <v-icon v-else @click="favoritar(i)">mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import {mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      //SnackBar
      color: "",
      snackbar: false,
      text: "SnackText",
      error: "",

      arrCategorias: [],

      key: "", // busca

      // Campos para input
      roupa: {
        descricao: "",
        img: "",
        flex: 4,
        fav: false
      },

      // Imagem
      selectedFile: null,
      imagePreview: ""
    };
  },
  methods: {
    ...mapActions(["fetchItens"])
  },
  computed: {
    ...mapGetters(["allItens"])
  },
  created() {
    this.fetchItens();
  }
};
</script>
