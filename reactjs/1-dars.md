# 📔 1-dars

## ReactJS nima va u qanday ishlaydi?

💡 ReactJS - bu bir JavaScript kutubxonasi (library) bo'lib, interfaol foydalanuvchi interfeyslarini yaratish va boshqarishda ishlatiladi. Bu kutubxona Facebook tomonidan ishlab chiqilgan bo'lib, interaktiv tizimlarni yaratish uchun katta imkoniyatlar taqdim etadi.

ReactJS komponentlarga asoslanadi. Komponentlar, biror qisqa kod bo'lgan va xususiy xususiyatlar bilan ta'minlangan modullar sifatida o'rnatingan elementlardir. ReactJS, komponentlar hierarxiasini yaratishga imkon beradi. Bunday hierarxiyada, asosiy ilovalardan boshqarish va yangilanish imkoniyatlarini osonlashtiradi.

ReactJS, Virtual DOM (sanal obyekt modeli) konseptini qo'llab-quvvatlaydi. Virtual DOM, HTML obyekt modelining JavaScript representatsiyasi bo'lib, interfeysning o'zgartirilishi va yangilanishi uchun optimallashtirilgan algoritmlarni ishlatadi. Bu o'zgarishlarni asosiy DOM-ga ta'sir etish bilan solishtirish uchun, o'zgarishlarni efektiv bajarishga imkon beradi va tajribiy foydalanuvchilarga ulashingiz vaqtini kamaytiradi.

ReactJS komponentlarga xususiy xususiyatlar (props) berish orqali malumotlarni uzatish va ularga xususiy holatlarni (state) saqlash imkoniyatini ham beradi. Komponentlar orqali interfaol qismlar bo'lgan konteyner (container) komponentlar va interfaol elementlar (UI components) yaratish mumkin.

ReactJS komponentlarda xususiyatlar va holatlar o'zgartirilganida, kutubxonaning tez-tez tiklanishi yordamida interfeysning faollashtirilishi va yangilanishi amalga oshiriladi. Buning natijasida faollashtirilgan interfeys o'zgarishlarga mos ravishda yangilanadi.

ReactJS, birinchi haroratga ega veb ilovalarni yaratish, kompleks ilovalar bo'lgan SPA (Single-Page Application) va mobil ilovalarni ishlab chiqishda keng tarqalgan kutubxonadir. Uni JavaScript bilan ishlash imkoniyatlarini osonlashtirish uchun ko'plab qo'shimcha kutubxonalarga yordam berilganligi sababli, keng foydalaniladi.

<a href="https://react.dev/" target="_blank">ReactJS sahifasi</a>

<a href="https://github.com/facebook/react/releases">Oxirgi nashrlar uchun o'zgarishlar jurnallarini ham quyida topishingiz mumkin.</a>

## ReactJS dastur tuzish. React APP
Avalari biz react app yaratish uchun "npx create-react-app my-app" qilishimiz kerak edi lekin hozirgi kunga kelib bu usuldan deyarli ko'pchilik foydalanmayapti chunki unda ko'plab buglar kelib chiqishi mumkum. Shuning uchun react app yaratish uchun Next.js, Remix yokida hichqanday kutubhonalar kerak bo'lmasa Vite texnalogiyalaridan foydalanishimiz mumkun hozirda sizlar bilan Vite texnalogiyasi bilan tanishib u orqali react app yaratamiz va uning qulayliklarini ko'rib chiqamiz.
<a href="https://vitejs.dev/" target="_blank">Vite ning rasmiy websitesi</a>

### Vite nima? 
<br>
<img src="https://d33wubrfki0l68.cloudfront.net/11c77ae9e5215fff33a7deefdc6fd991989ae0a0/d5746/vite-article.svg" alt="vite-img" />

<code>Vite - Evan You tomonidan yaratilgan, zamonaviy web applarni ishlab chiqish uchun Frontend ish quroli!</code>

### Qulayliklari

1. Hot Module Replacement

Bu barcha turdagi modullarni to'liq yangilanishni talab qilmasdan ish vaqtida yangilash imkonini beradi.

2. Rollup

Bu JavaScript uchun modul to'plami bo'lib, u modulni keraksiz ravishda kattalashtirishi mumkin bo'lgan foydalanilmagan kod qismlarini olib tashlaydi va bu jarayonda “tree-shaking” usulidan foydalanadi. Umuman olganda modullar esa kodingizni yaxshiroq saqlanishiga, ishlashiga imkon beradi!

#### Viteni ishlatgan holda React dasturni ochish

CMDga ushbu commandani yozamiz:
```bash
npm init vite
```
Va dastur turini tanlaymiz
<img src="https://images.ctfassets.net/zojzzdop0fzx/61og1UMVpUUlciwlkfldpj/153668e853def41d8c7cb1bd0aa66abb/npm_init_vite.png" alt="vite dastur turini tanlash" />

```bash
npm install

npm run dev
```

##  Soft ReactJS
Sof reactjsdan foydalanish uchun <a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank">reactjs saytidan</a> cdn link ni html ga qo'yishimiz kerak

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

```js
const App = () => {
	return React.createElement('h1', {className: 'title', id: 'title-id'}, 'Hello world')
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));

// React bu global object
// React.createElement() bu o'zida 3ta element qabul qiladi. 
// birinchisi tag name, 
// ikkinchisi argumentlar M:{class, id}, 
// uchinchisi manashu element nimani qabul qilishi
```

## Soft ReactJsda Mini loyiha 

```js
const Book = () => {
	return React.createElement('div', {}, [
		React.createElement('h2', {}, 'O\'tkan kunlar'),
		React.createElement('p', {}, 2023),
		React.createElement('a', {}, 5+'$')
	])
}


const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', {id: 'title'}, 'Kitoblar do\'koni'),
		React.createElement(Book)
	])
}

//================================================================

ReactDOM.render(React.createElement(App), document.getElementById('root'));

const Book = (props) => {
	console.log(props);
	return React.createElement('div', {}, [
		React.createElement('h2', {}, props.name),
		React.createElement('p', {}, props.year),
		React.createElement('a', {}, props.price)
	])
}


const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', {id: 'title'}, 'Kitoblar do\'koni'),
		React.createElement(Book, {name: 'Js for beginners', year: 2022, price: 50+'$'}),
		React.createElement(Book, {name: 'React for beginners', year: 2023, price: 80+'$'}),
		React.createElement(Book, {name: 'Vue for beginners', year: 2020, price: 60+'$'}),
	])
}


ReactDOM.render(React.createElement(App), document.getElementById('root'));
```


## JSX
JSXdan foydalanish uchun react app yaratib olamiz va index.js filega kirib quyidagi codelarni yozamiz.

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

const Book = (props) => {
// Bookdagi {props}ni destuptizatsia qilsakham bo'ladi!
	return (
		<div>
			<h2>{props.name}</h2>
			<h3>{props.year}</h3>
			<p>{props.price}</p>
		</div>
	)
}

const App = () => {
	return (
		<div>
			<Book name="JS for beginners" year="2020" price="50$" />
			<Book name="React for beginners" year="2023" price="80$" />
			<Book name="Vue for beginners" year="2022" price="70" />
		</div>
	)
}


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
```

## JSXda mustaqil amaliyot
Quyidagi sof reactjs codeni JSXga o'giring!
```js
const News = (props) => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, props.name),
		React.createElement('div', {className: 'box'}, [
			React.createElement('pre', {}, props.extra),
			React.createElement('p', {}, props.text)
		]),
		React.createElement('div', {className: 'square'}, [
			React.createElement('h1', {}, props.title)
		])
	])
}


const App = () => {
	return React.createElement('div', {}, [
		React.createElement(News, {name: 'BBC News', extra: 2023, text: 'JSX amaliyot', header: 'JSX'})
	])
}


ReactDOM.render(React.createElement(App), document.getElementById('root'));
```

## JSX hususiyatlari

JSXni functionalarda va objectlarda ishlatish
```js
export default function App() {
  function fullName() {
    return user.firstName + ' ' + user.lastName
  }

  const user = {
    firstName: 'Sardor',
    lastName: 'Qobilov'
  }

  return (
    <div className="app">
      <h1>Hllo {fullName(user)}</h1>
    </div>
  );
}

// Ntija: Hello Sardor Qobilov
// PC: JSXni ichida if else, white, for larni yoza olmaymiz! Bu operatorlani o'zimizni komponentimizni ichiga yozsak bo'ladi lekin JSX ni ichiga emas! Agar if else ishlatmoqchi bo'lsak uni o'rniga ternariy operatorlardan foydalanamiz.

export default function App() {

	const name = false

  return (
    <div className="app">
      <h1>Hllo {(name) ? 'Sardor' : 'Jack'}</h1>
    </div>
  );
}
```


## Ilovani modularga bo'lish

## Shartli ko'rsatish (ternary operator)

## Loader misoli (Loyihaga loader qo'shish)

## Amaliyot

Loyihani componentlarga bo'lib chiqish
