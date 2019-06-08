<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormCadastro/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormCadastro from '../components/login-form/FormCadastro';

export default {
  name: 'home',
  components: {
    FormCadastro,
  },
};
</script>
