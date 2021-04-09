import https from 'https'

export default function ({ $axios }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  $axios.interceptors.response.use(
    (response) => {
      return response.data
    },
    (err) => {
      return Promise.reject(err)
    }
  )
}
