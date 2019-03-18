import { Component } from 'react'
import { decorate, observable } from 'mobx'
class CartStore extends Component {
  items = [
    {
      drink: 'Americano',
      option: 'Small',
      quantity: 2
    },
    {
      drink: 'Espresso',
      option: 'Large',
      quantity: 1
    }
  ]
}

decorate(CartStore, {
  items: observable
})

const cartStore = new CartStore()

export default cartStore
