<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Realize seu cadastro</span>
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

        <v-text-field
            v-model="confPassword"
            :error-messages="confPasswordErrors"
            :counter="3"
            label="confSenha"
            required
            @input="$v.confPassword.$touch()"
            @blur="$v.confPassword.$touch()"
            type="password"
        ></v-text-field>       
       
          
        <span class="caption grey--text text--darken-1">
           Já tem uma conta ?
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
      Cadastrar
      </v-btn>      

      <v-spacer></v-spacer>

    </v-card-actions>

  </v-card>

</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'FormCadastro',  

  mixins: [validationMixin],
  // Validações
  validations: {     
      password: { required, minLength: minLength(3) },
      email: { required, email },       
      confPassword: { required, sameAs: sameAs('password') },
  },

  data: () => ({
      email: '',     
      password: '',   
      confPassword: '',  
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
      confPasswordErrors () {
        const errors = []
        if (!this.$v.confPassword.$dirty) return errors
        // Senha diferente
        !this.$v.confPassword.sameAs && errors.push('A senha deve corresponder a outra')
        // Vazio
        !this.$v.confPassword.required && errors.push('Preencha a senha.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        // Não é email
        !this.$v.email.email && errors.push('E-mail Invalido')
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
        console.log('email',this.email)
        console.log('password',this.password) 
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
