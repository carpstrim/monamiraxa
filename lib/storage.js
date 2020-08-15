export default class {
  constructor (key) {
    this.key = key
    this.data = []
  }

  init () {
    this.data = JSON.parse(localStorage.getItem(this.key)) || []
  }

  save () {
    localStorage.setItem(this.key, JSON.stringify(this.data))
  }

  regist (payload) {
    this.data.push(payload)
    this.save()
  }

  remove (payload) {
    this.data = this.data.filter(el => el !== payload)
    this.save()
  }
}
