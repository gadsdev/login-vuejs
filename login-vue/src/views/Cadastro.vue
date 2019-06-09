<template>
  <div class="cadastro">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormCadastro/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormCadastro from '../components/login-form/FormCadastro';

export default {
  name: 'cadastro',
  components: {
    FormCadastro,
  },
};
</script>
