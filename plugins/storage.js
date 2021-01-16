import Vue from 'vue'
import SessionStorage from '~/lib/storage'

Vue.prototype.$cart = new SessionStorage('cart')
Vue.prototype.$cart.init()

Vue.prototype.$customerInfo = new SessionStorage('customer')
Vue.prototype.$customerInfo.init()
