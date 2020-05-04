import sty from '~/assets/json/sty.json'
import droolcover from '~/assets/json/droolcover.json'
import gauzehandkerchief from '~/assets/json/gauzeHandkerchief.json'
import niginigi from '~/assets/json/niginigi.json'
import nametag from '~/assets/json/nameTag.json'
import other from '~/assets/json/other.json'
import wrapping from '~/assets/json/wrapping.json'
import message from '~/assets/json/message.json'

export const state = () => ({
  data: {
    ...sty,
    ...droolcover,
    ...gauzehandkerchief,
    ...niginigi,
    ...nametag,
    ...other,
    ...wrapping,
    ...message
  }
})

export const getters = {
  getAll (state) {
    return state.data
  }
}
