export const state = () => ({
  items: [],
  latestItem: null
})

export const getters = {

}

export const mutations = {
  setItems (state, items) {
    state.items = items
  },
  setLatestItem (state, latestItem) {
    state.latestItem = latestItem
  }
}

export const actions = {
  async getArticles ({ commit }) {
    const articles = await this.$axios.get('articles')
    commit('setItems', articles)
  },
  async getLatestArticle ({ commit }) {
    const [latestArticle] = await this.$axios.get('articles', {
      params: {
        _limit: 1,
        _sort: 'published_at:desc'
      }
    })
    commit('setLatestItem', latestArticle)
  }
}
