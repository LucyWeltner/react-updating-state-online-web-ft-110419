import React from 'react'
export default class ClickityClick extends React.Component {
	state = {
		toggled: false
	}

	handleClick = () => {
		this.setState(prevstate => {
			return {toggled: !prevstate.toggled}
		})
	}
	

	render() {
		return (
			<button onClick = {this.handleClick} >I am {this.state.toggled ? 'off' : 'on'}</button>
		)
	}

}
