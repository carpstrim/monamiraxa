import itemData from '~/assets/json/itemdata.json'

export const state = () => ({
  data: itemData
})

export const getters = {
  getAll (state) {
    return state.data
  }
}
