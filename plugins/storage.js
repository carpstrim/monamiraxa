import Vue from 'vue'
import LocalStorage from '~/lib/storage'

Vue.prototype.$cart = new LocalStorage('cart')
Vue.prototype.$cart.init()

Vue.prototype.$customerInfo = new LocalStorage('customer')
Vue.prototype.$customerInfo.init()
