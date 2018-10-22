
import React, { Component } from 'react'
import ShopShowTile from '../components/ShopShowTile'
import ReviewShowContainer from './ReviewShowContainer'

class ShopShowContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			shop: {}
		}
	}

	componentDidMount() {
		let shopId = this.props.params.id
		fetch(`/api/v1/shops/${shopId}`,
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
        this.setState( { shop: data } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
  	return(
      <div>
    		<ShopShowTile
    			key={this.state.shop.id}
    			id={this.state.shop.id}
    			name={this.state.shop.name}
    			address={this.state.shop.address}
    			city={this.state.shop.city}
    			state={this.state.shop.state}
    			zip={this.state.shop.zip}
    			phoneNumber={this.state.shop.phone_number}
    		/>
        <ReviewShowContainer
          shopId={this.props.params.id}
        />
      </div>
		)
  }
}

export default ShopShowContainer
