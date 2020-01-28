<template>
  <v-container>
    <h1>Adicionar Roupas</h1>
    <v-row>
      <v-col>
        <v-file-input v-model="selectedFile" show-size label="Foto" @change="onFileSelected" prepend-icon="mdi-camera"></v-file-input>
        <v-text-field v-model="roupa.descricao" placeholder="Descrição"></v-text-field>
        <v-text-field type=number v-model="roupa.quantidade" placeholder="Quantidade"></v-text-field>
        <v-text-field type=number v-model="roupa.preco" placeholder="Preço"></v-text-field>
        

        
      </v-col>
      
    </v-row>
    <v-row>
        <v-img v-if="imagePreview"  :src="imagePreview" contain max-height="300" max-width="300" />
      </v-row>
      <v-row><br></v-row>
      <v-row >
        <v-btn block align="center" @click="adicionar()">Salvar</v-btn>
      </v-row>
      
        <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="(item) in getFiltrado"
          :key="item._id"
        >
          <v-list-item-title v-text="item.descricao"></v-list-item-title>
          <v-list-item-icon>
            <v-spacer></v-spacer>
            <v-icon right small @click="deleteById(item._id)"> mdi-delete </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <h3 v-show="getFiltrado.length == 0"> Vazio</h3>

    

    <v-snackbar :color="color" v-model="snackbar">
      {{ text }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import {mapGetters ,mapActions } from "vuex"

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
      roupa: {},

      // Imagem
      selectedFile: null,
      imagePreview: ""
    };
  },
  methods: {
    limparFormulario(){
      this.roupa = {}
      this.imagePreview = ""
      this.selectedFile = null
      this.snackbar = true
    },
    async onFileSelected(file) {
      console.log(file)
      //this.selectedfile = file
      console.log(this.selectedFile)
      
      /*
      try {
        let contentBuffer = await readFileAsync(file);
        this.roupa.img = contentBuffer;
        this.imagePreview = contentBuffer;
      } catch (err) {
        console.log(err);
      }
      function readFileAsync(file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();

          reader.onload = () => {
            resolve(reader.result);
          };

          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      } */
    },
    async adicionar(){
      
      var formData = new FormData()
      formData.append('image', this.selectedFile)
      formData.append('descricao', this.roupa.descricao)
      formData.append('quantidade', this.roupa.quantidade)
      formData.append('preco', this.roupa.preco)
      
      let config = {
      header : {
       'Content-Type' : 'multipart/form-data'
        }
      }
      var data = {form: formData, config: config}
      console.log(...data.form)
      this.text = await this.adicionarItem(data)
      //this.text = await this.adicionarItem(form)
      /*
      this.text = await this.adicionarItem(this.roupa)
      this.limparFormulario()
      this.fetchItens() */
    },
    ...mapActions(["fetchItens"]),
    ...mapActions(["deleteById"]),
    ...mapActions(["adicionarItem"])
  },
  computed: {
    ...mapGetters(['allItens']),
    ...mapGetters(['getFiltrado'])
  },
  
  created(){
    this.fetchItens()
    
  }
};
</script>
