
import React from 'react'
import { browserHistory, Route, IndexRoute, Router } from 'react-router'
import ShopIndexContainer from '../containers/ShopIndexContainer'
import ShopShowContainer from '../containers/ShopShowContainer'
import ReviewShowContainer from '../containers/ReviewShowContainer'

export const App = (props) => {
  return (
  	<div>
	  	<Router history={browserHistory}>
	  		<Route path="/" component={ShopIndexContainer} />
	  		<Route path="/shops/:id" component={ShopShowContainer}>
	  			<Route path="/reviews/:id" component={ReviewShowContainer} />
	  		</Route>
	  	</Router>
  	</div>
	)
}

export default App
