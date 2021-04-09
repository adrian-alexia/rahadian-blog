export const state = () => ({

})

export const getters = {

}

export const mutations = {

}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await Promise.all([
      dispatch('articles/getArticles', null, { root: true }),
      dispatch('articles/getLatestArticle', null, { root: true })
    ])
  }
}
