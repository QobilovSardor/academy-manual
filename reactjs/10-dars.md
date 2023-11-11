# 📔 10-dars

## Amaliyot. Funksiyonla komponentlarda  clicker yasash
Quyidagi class componentni functional componentga o'girish

```js
import React from 'react'

export default class Nimadir extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			isCounting: false
		}
	}
	componentDidMount(){ 
		console.log('componentDidMount');
		const userCount = localStorage.getItem("timer")
		if(userCount){
			this.setState({count: +userCount})
		}

	}
	componentDidUpdate() {
		console.log('componentDidUpdate');
		localStorage.setItem("timer", this.state.count);
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	hendleStart = () => {
		this.setState({isCounting: true});
		
		this.counterId = setInterval(() => {
			this.setState({ count: this.state.count+1})
		}, 1000)
	}

	hendleStop = () => {
		this.setState({isCounting: false})

		clearInterval(this.counterId)
	}

	hendleReset = () => {
		this.setState({isCounting: false, count: 0})
		clearInterval(this.counterId)
	}

	render() {
		return (
			<>
				<h3>React timer</h3>
				<h2>{this.state.count}</h2>
				{!this.state.isCounting ?
					<button onClick={this.hendleStart}>Start</button>
					: (
						<button onClick={this.hendleStop}>Stop</button>
					)
				}
				<button onClick={this.hendleReset}>Reset</button>
			</>
		)
	}

}
```


## Amaliyot Movie App loyihasini functional componentlarga o'girish

## Amaliyot Todo-list loyihasini functional componentlarga o'girish
