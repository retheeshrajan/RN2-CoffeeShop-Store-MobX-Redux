import { Component } from 'react'
import axios from 'axios'
import { decorate, observable } from 'mobx'

class CoffeeStore extends Component {
  coffeeshops = null
  coffeeshop = null
  loading = true

  fetchAllCoffeeShops = async () => {
    try {
      const res = await axios.get('http://coffee.q8fawazo.me/api/?format=json')
      const data = res.data
      this.coffeeshops = data
      this.loading = false
    } catch (err) {
      console.log(err)
    }
  }
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  coffeeshop: observable,
  loading: observable
})

const coffeeStore = new CoffeeStore()
coffeeStore.fetchAllCoffeeShops()
export default coffeeStore
