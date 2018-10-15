
import React from 'react'
import { browserHistory, Route, IndexRoute, Router } from 'react-router'
import ShopIndexContainer from '../containers/ShopIndexContainer'

export const App = (props) => {
  return (
  	<div>
	  	<Router history={browserHistory}>
	  		<Route path="/" component={ShopIndexContainer} />
	  	</Router>
  	</div>
	)
}

export default App