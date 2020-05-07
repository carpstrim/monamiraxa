import itemData from '~/assets/json/itemdata.json'
import message from '~/assets/json/message.json'

export const state = () => ({
  data: { ...itemData, ...message }
})

export const getters = {
  getAll (state) {
    return state.data
  }
}
