import React, {Component} from 'react'
import ShopIndexTile from '../components/ShopIndexTile'

class ShopIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shops: [],
      shopFilter: '',
    }
  }

  componentDidMount() {
    fetch('/api/v1/shops',
    {
      credentials: 'same-origin',
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState( { shops: data } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleShopFilterChange = (e) => {
    const search = e.target.value
    this.setState({ shopFilter: search })
  }

  filterShops = (shops) => {
    const { shopFilter } = this.state
    return shops.filter(shop => shop.name.toLowerCase().indexOf(shopFilter.toLowerCase()) > -1)
  }

  render() {
    const { shops, shopFilter } = this.state
    const filteredShops = this.filterShops(shops).map((shop) => <ShopIndexTile
      key={shop.id}
      id={shop.id}
      name={shop.name}
      address={shop.address}
      city={shop.city}
      state={shop.state}
      zip={shop.zip}
      phoneNumber={shop.phone_number}
    />)

    return(
      <div>
        <div className="container">
          <input
            type="text"
            value={shopFilter}
            placeholder="Type to filter on name"
            onChange={this.handleShopFilterChange}
          />
        </div>
        { filteredShops }
      </div>
      )
  }
}

export default ShopIndexContainer
