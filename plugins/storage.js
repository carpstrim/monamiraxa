import Vue from 'vue'
import LocalStorage from '~/lib/storage'

Vue.prototype.$storageMessage = new LocalStorage('cart')
Vue.prototype.$storageMessage.init()
