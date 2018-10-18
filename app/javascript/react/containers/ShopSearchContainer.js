import React, {Component} from 'react';
import ShopIndexTile from '../components/ShopIndexTile';

class ShopSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/search.json',
    {
      credentials: 'same-origin',
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState( { shops: data } )
      })
      .catch(error => console.error(`Error in fetch: $(error.message)`))
  }



  render() {
    let shops = this.state.shops.map((shop) => {
      return(
      <ShopIndexTile
        key={shop.id}
        name={shop.name}
        address={shop.address}
        city={shop.city}
        state={shop.state}
        zip={shop.zip}
        phoneNumber={shop.phone_number}
      />)
    })
    return(
      <div>
        {shops}

        handleclick, that query in that input field is waht is passed as the body
      </div>
      )
  }
}

export default ShopSearchContainer
