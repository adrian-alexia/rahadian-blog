export default function (_, inject) {
  // eslint-disable-next-line require-await
  inject('checkLastFetched', async function (state, key, minFetchMillis = 30000) {
    const lastFetchedKey = `${key}LastFetched`
    if (lastFetchedKey in state === false) {
      throw new Error(`${lastFetchedKey} must be initialized in module state`)
    }
    const now = Date.now()
    const lastFetched = state[lastFetchedKey]
    return lastFetched - now >= minFetchMillis
  })
}
