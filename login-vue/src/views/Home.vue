<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">    
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from '../components/login-form/FormLogin';

export default {
  name: 'home',
  components: {
    FormLogin,
  },
};
</script>
