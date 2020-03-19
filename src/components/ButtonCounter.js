import React from 'react'
export default class ButtonCounter extends React.Component {
	state = {
		count: 0
	}

	handleClick = () => {
		this.setState(prevstate => {
			return {count: prevstate.count+1}
		})
	}

	render(){
		return(
			<button onClick={this.handleClick}>I have been clicked {this.state.count} time(s)</button>
		)
	}
}