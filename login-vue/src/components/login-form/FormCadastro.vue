<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
            value="john@vuetifyjs.com"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Digite seu e-mail
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Senha"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirmar Senha"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Escreva uma senha para a sua conta
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-3 text-xs-center">
          <v-img
            class="mb-3"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Bem-vindo ao Login-VueJs</h3>
          <span class="caption grey--text">Obrigado por se cadastrar!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        flat
        @click="step--"
      >
        Voltar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="blue"
        depressed
        @click="step++"
      >
        Proximo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'FormCadastro',
    data: () => ({
      step: 1
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Cadastrar'
          case 2: return 'Digite sua senha'
          default: return 'Conta criada com sucesso!!!'
        }
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color:brown
}
</style>
