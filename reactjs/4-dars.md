# 📔 4-dars

## Forimlar bilan ishlash va validation
#### Hozida sizlar bilan boshqarib bo'ladigan formalar haqida gaplashamiz

ReactJSda ikkihil forma turlari mavjud 1.Boshqarib bo'ladigan formalar, 2.Boshqarib bo'lmaydigan formalar.

Misol:
```js
import React from 'react';

export default class Form extends React.Component {
	state = {
		firstName: 'Jack',
		email: 'jack@example.com',
	}

	changeHandler = (e) => {
		this.setState({firstName: e.target.value})
	}

	changeHandlerTwo = (e) => {
		this.setState({ email: e.target.value })
	}

	render() {
		return (
			<form>

				<input
					type="text"
					name='firstName'
					value={this.state.firstName}
					onChange={this.changeHandler}
				/>
				<input
					type="email"
					name='email'
					value={this.state.email}
					onChange={this.changeHandlerTwo}
				/>

			</form>
		)
	}
}
```
Bu yerda biz ikkita input uchun ikkita fuksiyadan(changeHandler, changeHandlerTwo) foydalanayapmiz agarda inputimiz 10ta bo'lsa demak bizning funksiyalarimiz ham 10ta bo'lishi kerakmi?
Bu juda notog'ri yo'l biz funksiyalarimizni universa qilsak bo'ladi 

```js
import React from 'react';

export default class Form extends React.Component {
	state = {
		firstName: 'Jack',
		email: 'jack@example.com',
	}

	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}


	render() {
		return (
			<form>

				<input
					type="text"
					name='firstName'
					value={this.state.firstName}
					onChange={this.changeHandler}
				/>
				<input
					type="email"
					name='email'
					value={this.state.email}
					onChange={this.changeHandler}
				/>

			</form>
		)
	}
}
```

#### Kichik topshiriq. Foydalanuvchi uchun bitta input yarating input type="name" bo'lsin foydalanuvchiga cheklov o'rnating agarda foydalanuvchining (user namesi) 5 ta harif bo'ladigan bo'lsa alertda kechirasiz bizning vebsaytdan ro'yhatdan o'tish uchun sizning user namengiz 5ta harifdan oshgan bo'lishi kerak! deyishingiz kerak. Yordam biz onBlue dan yodalanishimiz kerak 

#### Yana bir mashiq bunda biz emailni to'g'ri kiritilganligni tekshirishimiz kerak buning uchun bizfa regular expresion yordam beradi biz uni tayor variantino googledan olsak bo'ladi.

Javobi:
```js
import React from 'react';

export default class Form extends React.Component {
	state = {
		firstName: 'Jack',
		email: 'jack@example.com',
	}

	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	validate = () => {
		if(this.state.firstName.length <= 5) {
			alert("kechirasiz bizning vebsaytdan ro'yhatdan o'tish uchun sizning user namengiz 5ta harifdan oshgan bo'lishi kerak! deyishingiz kerak")
		}
	}

	validateEmail = () => {
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(this.state.email)) {
			alert('Email is not valid')
		}
	}


	render() {
		return (
			<form>

				<input
					type="text"
					name='firstName'
					value={this.state.firstName}
					onChange={this.changeHandler}
					onBlur={this.validate}
				/>
				<input
					type="email"
					name='email'
					value={this.state.email}
					onChange={this.changeHandler}
					onBlur={this.validateEmail}
				/>

			</form>
		)
	}
}
```

### Keling biroz qiyinroq misol bilan ko'raylik
```js
import React from 'react'

class Form extends React.Component {
	constructor(props) {
		super(props)
	}
	handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);

		fetch('/some-ap', {method: form.method, data: formData})

		const json = Object.fromEntries(formData.entries());
		console.log(json);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Text input <input type="text" name='myInput' placeholder='Text input' defaultValue='Some initial value' />
				</label>
				<hr />
				<label>
					Checkbox <input type="checkbox" name='myCheckbox' defaultChecked />
				</label>
				<hr />
				<label>
					<p>
						Radio buttons: <br />
						<label>
							Option 1
							<input type="radio" name='myRadio' />
						</label><br />
						<label>
							Option 2
							<input type="radio" name='myRadio' defaultChecked />
						</label><br />
						<label>
							Option 3
							<input type="radio" name='myRadio' />
						</label>
					</p>
					<hr />
					<button type="reset">Reset form</button>
					<button type="submit">Submit form</button>
				</label>
			</form>
		)
	}
}

export default Form
```

## Checkbox, radio, textarea, select bilan ishlash

slect bilan ishlash
```js
import React from 'react';

export default class Form extends React.Component {
	state = {
		firstName: 'Jack',
		email: 'jack@example.com',
		select: ''
	}

	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	validate = () => {
		if(this.state.firstName.length <= 5) {
			alert("kechirasiz bizning vebsaytdan ro'yhatdan o'tish uchun sizning user namengiz 5ta harifdan oshgan bo'lishi kerak! deyishingiz kerak")
		}
	}

	validateEmail = () => {
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(this.state.email)) {
			alert('Email is not valid')
		}
	}


	render() {
		return (
			<form>

				<input
					type="text"
					name='firstName'
					value={this.state.firstName}
					onChange={this.changeHandler}
					onBlur={this.validate}
				/>
				<input
					type="email"
					name='email'
					value={this.state.email}
					onChange={this.changeHandler}
					onBlur={this.validateEmail}
				/>
				<select name="select" value={this.state.select} onChange={this.changeHandler}>
					<option  value="1">Value 1</option>
					<option  value="2">Value 2</option>
					<option  value="3">Value 3</option>
				</select>
			</form>
		)
	}
}
```

Checkboxlar bilan ishlash uchun yuqorida yorzan fuksiyamizga o'xshash funksiya yozamiz
Misol
```js
checkedHandler = (e) => {
	this.setState({[e.target.name]: e.target.checked})
}
```

## Amaliyot

## CreateRef haqida batafsil
createRef() metodi React'da class komponentlarda ishlatiladi va DOM elementlariga murojaat qilish uchun foydalaniladi. Bu metoddan foydalanib ref obyekti yaratiladi va undan keyingi DOM elementiga murojaat qilinadi.

Quyidagi misolda createRef() metodining ishlatilishi React class komponentida ko'rsatilgan:
```js
import { Component, createRef } from 'react';

export default class Form extends Component {
	inputRef = createRef();

	handleClick = () => {
		this.inputRef.current.focus();
	}

	render() {
		return (
			<>
				<input ref={this.inputRef} />
				<button onClick={this.handleClick}>
					Focus the input
				</button>
			</>
		);
	}
}
```
Ushbu misolda createRef() metodi yordamida inputRef nomli ref obyekti yaratildi. Ushbu ref obyekti, input elementiga ref atributiga murojaat qilib beriladi va keyingi handleClick metodida ushbu ref obyekti orqali input elementiga fokus berilishi amalga oshiriladi.

createRef() metodi faqatgina class komponentlarda ishlatilishi mumkin. Agar siz React funksiya komponentlarida ref ishlatmoqchi bo'lsangiz, useRef() hook'idan foydalanishingiz kerak.

Umid qilamanki, bu tushuntirma sizga yordam beradi.

Misol: (Amaliyot mini)
```js
import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardNumber: '',
			cv: '',
			name: ''
		}
		this.cardRef = React.createRef()
		this.cvRef = React.createRef()
		this.nameRef = React.createRef()
	}

	handleClick = () => {
		this.inputRef.current.focus();
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			if (this.state.cardNumber.length === 16) {
				this.cvRef.current.focus()
			} 
			if(this.state.cv.length === 2) {
				this.nameRef.current.focus();
			}
		})
	}

	componentDidMount() {
		this.cardRef.current.focus();
	}

	render() {
		return (
			<>
				<input type="string" onChange={this.handleChange} ref={this.cardRef} name="cardNumber" />
				<input type="string" onChange={this.handleChange} ref={this.cvRef} name="cv" />
				<input type="string" onChange={this.handleChange} ref={this.nameRef} name="name" />
				<button onClick={this.handleClick}>
					Focus the input
				</button>
			</>
		);
	}
}
```

## Boshqarib bo’lmaydigon forma

