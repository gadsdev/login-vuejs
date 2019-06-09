<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormLogin/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from '../components/login-form/FormLogin';

export default {
  name: 'login',
  components: {
    FormLogin,
  },
};
</script>
