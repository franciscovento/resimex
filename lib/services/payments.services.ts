import axios from '../helpers/axios.helper';

function payProduct(data: { success_url: string; cancel_url: string }) {
  return axios.post('/payments/pay-product', data);
}

export { payProduct };
