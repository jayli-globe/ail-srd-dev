import axios from 'axios'

// -------- DEV Experience API -------
export const HTTP = axios.create({
  baseURL: 'https://localhost:5002/api/system'
})
