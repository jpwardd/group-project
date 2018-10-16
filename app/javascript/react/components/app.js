
import React from 'react'
import { browserHistory, Route, IndexRoute, Router } from 'react-router'
import ShopIndexContainer from '../containers/ShopIndexContainer'
import ShopShowContainer from '../containers/ShopShowContainer'

export const App = (props) => {
  return (
  	<div>
	  	<Router history={browserHistory}>
	  		<Route path="/" component={ShopIndexContainer} />
	  		<Route path="/shop/:id" component={ShopShowContainer} />
	  	</Router>
  	</div>
	)
}

export default App