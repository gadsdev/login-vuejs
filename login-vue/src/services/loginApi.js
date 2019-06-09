import baseConect from './baseConect';
/*
let defaultItem = {
  username: 'Josep',
  password: '12345',
  email: 'marioDasQuebrada',
};
*/
export default {
  async login(item) {
    const resp = await baseConect.post('/login', item);
    return resp;
  },
  async cadastro(item) {
    const resp = await baseConect.post('/cadastrar', item);
    return resp;
  },
};
