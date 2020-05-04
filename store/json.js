import sty from '~/assets/json/sty.json'
import message from '~/assets/json/message.json'

export const state = () => ({
  data: { ...sty, ...message }
})

export const getters = {
  getAll (state) {
    return state.data
  }
}
