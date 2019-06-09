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

    <v-window>
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
            v-model="password"
            :error-messages="passwordErrors"
            :counter="3"
            label="Senha"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
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
        @click="submit"
      >
      Entrar
      </v-btn>      

      <v-spacer></v-spacer>

    </v-card-actions>

  </v-card>

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'FormLogin',  

  mixins: [validationMixin],
  // Validações
  validations: {
      password: { required, minLength: minLength(3) },
      email: { required, email },       
  },

  data: () => ({
      email: '',     
      password: '',     
  }),

  computed: {     
      //Mensagem de erro da senha
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        // Menro que o minLength
        !this.$v.password.minLength && errors.push('Senha deve ser maior que 3 digitos')
        // Vazio
        !this.$v.password.required && errors.push('Preencha a senha.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        // Não é email
        !this.$v.email.email && errors.push('E-mail não cadastrado')
        // Vazio
        !this.$v.email.required && errors.push('Preencha o E-mail')
        return errors
      }
    },

  
  methods: {
      // Se valido tenta fazer login
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      submit () {
        // Pŕe validate
        this.$v.$touch()
        if(!this.$v.$invalid){
           console.log('Valido')
        }    
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  color:brown
}
</style>
