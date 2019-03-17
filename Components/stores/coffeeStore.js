import { Component } from 'react'
import axios from 'axios'
import { decorate, observable } from 'mobx'
class CoffeeStore extends Component {
  coffeeshops = []
  coffeeshop = null
  loading = true

  fetchAllCoffeeShops = async () => {
    const res = await axios.get('http://coffee.q8fawazo.me/api/?format=json')
    this.coffeeshops = res.data
    this.loading = false
  }
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  coffeeshop: observable
})

const coffeeStore = new CoffeeStore()
coffeeStore.fetchAllCoffeeShops()
export default coffeeStore
