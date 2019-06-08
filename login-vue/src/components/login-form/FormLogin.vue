<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Login</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"        
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item>
        <v-card-text>

         <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
        ></v-text-field>
    
        <v-text-field
            v-model="senha"
            :error-messages="nameErrors"
            :counter="10"
            label="Senha"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
            type="password"
        ></v-text-field>       
       
          
        <span class="caption grey--text text--darken-1">
           Esquesceu sua senha ?
        </span>

        </v-card-text>

      </v-window-item>    

    </v-window>

    <v-card-actions>

      <v-spacer></v-spacer>

      <v-btn        
        color="blue"
        depressed
        @click="validate"
      >
      Entrar
      </v-btn>      

      <v-spacer></v-spacer>

    </v-card-actions>

  </v-card>

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'FormLogin',   
  methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
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
