import axios from 'axios'

export const getBrands = () =>
  axios.get('http://localhost:3000/brands')