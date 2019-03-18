import React, { Component } from 'react'
import { observer } from 'mobx-react'
// NativeBase Components
import { List, Content } from 'native-base'

// Store
// import coffeeshops from './list'

import coffeeStore from '../stores/coffeeStore'

// Component
import CoffeeItem from './CoffeeItem'

class CoffeeList extends Component {
  render () {
    let shops
    if (coffeeStore.coffeeshops) {
      shops = coffeeStore.coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ))
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    )
  }
}

export default observer(CoffeeList)
