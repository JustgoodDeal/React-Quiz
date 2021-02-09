import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-ca4ad-default-rtdb.europe-west1.firebasedatabase.app/'
})
