export const state = () => ({
  counter: 0
})
export const mutations = {
  increment(state) {
    console.log('执行 increment')
    state.counter++
  }
}
export const actions = {
  incrementCommit(context) {
    console.log('执行 incrementCommit', context)
    context.commit('increment')
  }
}
