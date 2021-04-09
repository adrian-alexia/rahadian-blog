export default function ({ $axios }) {
  $axios.interceptors.response.use(
    (response) => {
      return response.data
    },
    (err) => {
      return Promise.reject(err)
    }
  )
}
