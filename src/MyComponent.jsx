import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class MyComponent extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>MyComponent</div>
		)
	}
}

MyComponent.propTypes = {}

export default MyComponent