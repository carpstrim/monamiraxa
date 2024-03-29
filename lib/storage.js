export default class {
  constructor (key) {
    this.key = key
    this.data = []
  }

  init () {
    this.data = JSON.parse(sessionStorage.getItem(this.key)) || []
  }

  save () {
    sessionStorage.setItem(this.key, JSON.stringify(this.data))
  }

  regist (payload) {
    this.data.push(payload)
    this.save()
  }

  remove (payload, idKey) {
    this.data = this.data.filter(el => el[idKey] !== payload)
    this.save()
  }

  renew (datas) {
    this.data = datas
    this.save()
  }

  update (el, idKey) { }
}
