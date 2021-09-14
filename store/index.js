export const state = () => ({
  quotes: [{ id: '1', body: 'Quote of the days', author: 'Waziaq' }]
})

export const getters = {
  quotes: state => state.quotes
}

export const mutations = {
  SET_QUOTES: (state, payload) => {
    state.quotes = payload
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.$axios.$get(process.env.API_URL, {
      headers: { 'Authorization': `Token token=${process.env.API_KEY}` }
    })

    const quotes = response.quotes

    commit('SET_QUOTES', quotes)
  }
}
