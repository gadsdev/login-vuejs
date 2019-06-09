import baseConect from './baseConect';

export default {
  async login() {
    const resp = await baseConect.post('/login');
    return resp;
  },
  async cadastro() {
    const resp = await baseConect.post('/cadastrar');
    return resp;
  },
};
