# 📔 11-dars

## Context

ReactJS-da kontekst - bu komponentlar daraxtining har bir darajasi orqali ma'lumotlarni aniq o'tkazmasdan komponentlar o'rtasida ma'lumotlarni almashish imkonini beruvchi xususiyatdir. Bu kontekst provayderi sifatida tanilgan markazlashtirilgan joydan ma'lum qiymatlar yoki funktsiyalarga kirish va ularni kontekst iste'molchilari sifatida tanilgan komponentlar daraxti ichidagi istalgan komponentda iste'mol qilish usulini ta'minlaydi.

Kontekst birinchi navbatda komponentlar daraxtining turli darajalarida bir nechta komponentlar tomonidan kirishi kerak bo'lgan ma'lumotlar yoki xatti-harakatlarga ega bo'lganda ishlatiladi. Oraliq komponentlar orqali rekvizitlarni o'tkazish o'rniga, ma'lumotlar yoki funktsiyalarni ularga kerak bo'lgan komponentlar uchun mavjud qilish uchun kontekstdan foydalanishingiz mumkin.

React-da kontekst qanday ishlashini ko'rsatadigan misol:
```js
// Creating a context
const MyContext = React.createContext();

// Creating a context provider
function MyContextProvider(props) {
  const sharedData = "This is shared data";

  return (
    <MyContext.Provider value={sharedData}>
      {props.children}
    </MyContext.Provider>
  );
}

// Consuming the context in a component
function MyComponent() {
  return (
    <MyContext.Consumer>
      {sharedData => <p>{sharedData}</p>}
    </MyContext.Consumer>
  );
}

// Using the context provider and the component consuming the context
function App() {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
}
```

### <a href="https://react.dev/learn/passing-data-deeply-with-context" target="_blank">Kontekst bilan ma'lumotlarni chuqur o'tkazish</a>


## <a href="https://dev.to/codeofrelevancy/what-is-prop-drilling-in-react-3kol#:~:text=Prop%20drilling%20occurs%20when%20a,difficult%20to%20manage%20and%20maintain.">Prop drilling haqida batafsil</a>

## Context API || ReatJS

# Bu yerda uzun maqola mavjud iltimos diqat bilan o'qing bu o'zingiz uchun foydali ma'lumot

Holatni boshqarish React-da ilovalarni ishlab chiqishning muhim qismidir. Davlatni boshqarishning keng tarqalgan usuli bu rekvizitlarni uzatishdir. Rekvizitlarni uzatish ma'lumotlarni bir komponentdan ikkinchisiga yuborishni anglatadi. Bu React ilovasida ma'lumotlar to'g'ri joyga etib borishiga ishonch hosil qilishning yaxshi usuli.

Ammo bir xil ma'lumotlarni ko'plab komponentlarga yuborish kerak bo'lganda yoki komponentlar bir-biridan uzoqda bo'lsa, rekvizitlarni uzatish zerikarli bo'lishi mumkin. Bu dasturni sekinlashtirishi va u bilan ishlashni qiyinlashtirishi mumkin.

Yaxshiyamki, React kontekst API deb nomlanuvchi o'rnatilgan xususiyatni taqdim etadi, bu ma'lumotlarni kerakli komponentlarga rekvizitlarsiz "teleport qilish" ga yordam beradi.

Ushbu maqolada biz kontekst API qanday ishlashini va undan React ilovalaringizda qanday samarali foydalanishni o'rganamiz.

### O'tish rekvizitlari(props) bilan bog'liq muammo
React-da rekvizitlarni o'tkazish asosiy tushuncha bo'lib, u ota-ona komponentiga o'zining yordamchi komponentlari va ilova ichidagi boshqa komponentlar bilan ma'lumotlarni almashish imkonini beradi.

Ko'pgina hollarda, o'tish rekvizitlari(props) ilovangizning turli qismlari o'rtasida ma'lumotlarni almashishning samarali usuli bo'lishi mumkin. Ammo ma'lum bir komponentga erishish uchun bir nechta komponentlar zanjiri bo'ylab rekvizitlarni uzatish kodingizni haddan tashqari og'irlashtirishi mumkin.

<img src='https://www.freecodecamp.org/news/content/images/2023/03/image-198.png' /><br />
Ota-onadan bolalarga rekvizit(props) o'tkazish tasviri

Yuqoridagi diagrammadan ma'lumotlarni "Child B" komponentiga o'tkazish uchun biz uni barcha oraliq komponentlar orqali o'tkazishimiz kerak, garchi bu komponentlar aslida ma'lumotlardan o'zlari foydalanmasa ham. Bu "prop burg'ulash" deb ataladigan narsa.

Prop burg'ulash kodingizni o'qish va saqlashni qiyinlashtirishi va keyinchalik komponentlaringizni qayta tiklashni qiyinlashtirishi mumkin.

Bu yerda Context API keladi. Context API yordamida siz maʼlumotlarni komponentlar daraxtining yuqori darajasida saqlashingiz va ularni rekvizitlarni oʻtkazmasdan unga kerak boʻlgan barcha boshqa komponentlar uchun ochiq qilishingiz mumkin.

## Context API qanday ishlaydi
Context API ma'lumotlarni har bir darajadagi rekvizitlarni qo'lda o'tkazmasdan komponentlar daraxti orqali uzatish imkonini beradi. Bu komponentlar o'rtasida ma'lumotlarni almashishni osonlashtiradi.

<img src="https://www.freecodecamp.org/news/content/images/2023/03/image-197.png" />
Context API qanday ishlashini ko'rsatadigan diagramma

Misol uchun, sizda foydalanuvchining xarid qilish savatini ko'rsatadigan komponentga ega xarid ilovasi va foydalanuvchining buyurtma tarixini ko'rsatadigan boshqa komponent bor deylik.

Context API yordamida siz foydalanuvchining xarid qilish maʼlumotlarini, masalan, savat va buyurtmalar tarixini saqlaydigan “kontekst” yaratishingiz mumkin. Keyin, ma'lumotni rekvizitlar orqali uzatmasdan turib, ushbu kontekstni xarid qilish savatida ham, buyurtma tarixi komponentida ham ishlatishingiz mumkin.

Bu sizning xarid qilish sayohatingiz uchun zarur bo'lgan barcha narsalarni saqlaydigan katta qutiga o'xshaydi. Kerak bo‘lganda qutidan narsalarni olib, ish tugagach, ularni qaytarib qo‘yishingiz mumkin.

Asosan, Context API ikkita asosiy komponentdan iborat: kontekst provayderi va kontekstli iste'molchi. Provayder komponentlar o'rtasida almashinadigan ma'lumotlarni saqlaydigan kontekstni yaratish va boshqarish uchun javobgardir. Boshqa tomondan, iste'molchi tarkibiy qism ichidan kontekstga va uning ma'lumotlariga kirish uchun ishlatiladi.

Keltirilgan misolda provayder foydalanuvchining xarid ma'lumotlarini saqlaydigan kontekstni yaratadi, iste'molchi komponentlari (savdo va buyurtma tarixi) kerakli ma'lumotlarni olish uchun ushbu kontekstga kirishadi. Bu ma'lumotni rekvizitlar orqali uzatish zaruratidan qochadi, bu esa kodingizni yanada samaraliroq va boshqarishni osonlashtiradi

## Context API bilan ishlashni qanday boshlash kerak
Ilovalaringizda Context API-dan foydalanishni boshlash uchun siz bir necha oddiy qadamlarni bajarishingiz kerak bo'ladi:

### 1. Kontekst obyektini yarating
createContextBirinchidan, siz "react" kutubxonasi funksiyasidan foydalanib kontekst ob'ektini yaratishingiz kerak . Ushbu kontekst ob'ekti ilovangiz bo'ylab baham ko'rmoqchi bo'lgan ma'lumotlarni saqlaydi.

MyContext.jsJildda nomli yangi fayl yarating srcva kontekst ob'ektini yaratish uchun quyidagi kodni qo'shing:

```js
import { createContext } from 'react';

export const MyContext = createContext("");
```

Yuqoridagi kodda biz createContextReact-dan import qilmoqdamiz va undan "MyContext" nomli yangi kontekst ob'ektini yaratish uchun foydalanmoqdamiz. Keyin, biz kontekst ob'ektini dasturimizning boshqa qismlarida ishlatishimiz uchun eksport qilmoqdamiz.

### 2. Komponentlarni provayder bilan o‘rash
Kontekst ob'ektini yaratganingizdan so'ng, umumiy ma'lumotlarga kirishga muhtoj bo'lgan komponentlarni Provayder komponenti bilan o'rashingiz kerak. Provayder komponenti umumiy ma'lumotlarni saqlaydigan "qiymat" yorlig'ini qabul qiladi va Provayder komponentining bolasi bo'lgan har qanday komponent umumiy ma'lumotlarga kirishi mumkin.

Shuni ta'kidlash kerakki, Provayder komponenti barcha yordamchi komponentlar umumiy ma'lumotlarga kirish huquqiga ega bo'lishini ta'minlash uchun ilovaning yuqori darajadagi komponentiga o'ralgan bo'lishi kerak.

Context API-da Provayder bilan komponentlarni qanday o'rashni ko'rsatadigan misol:

```js
// Create a parent component that wraps child components with a Provider

import { useState, React } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;
```

Ushbu misolda bizda App deb nomlangan asosiy komponent mavjud. Ushbu komponentda "matn" deb nomlangan holat o'zgaruvchisi mavjud bo'lib, u dastlab bo'sh qatorga o'rnatiladi. setTextBiz, shuningdek , qiymatini yangilash uchun ishlatilishi mumkin bo'lgan funksiyani ham aniqladik text.

Ilova komponentining qaytish bayonotida biz ushbu komponentning bolalarini provayder komponenti ("MyContext.Provider") bilan o'rab oldik. Keyin biz "matn" va "setText" qiymatlarini o'z ichiga olgan provayder komponentining qiymat propiga ob'ektni o'tkazdik.

### 3. Kontekstni ishlating
Endi biz provayder komponentini yaratdik, kontekstni boshqa komponentlarda ishlatishimiz kerak. Buning uchun biz React-dan "useContext" kancasidan foydalanamiz.

```js
import { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const { text, setText } = useContext(MyContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, world!')}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;
```

Ushbu misolda biz provayder komponentida belgilangan "matn" va "setText" o'zgaruvchilariga kirish uchun useContext kancasidan foydalanganmiz.<br /> <br />
``"MyComponent"`` ning qaytarish bayonotida biz qiymatini ko'rsatadigan paragraf elementini ko'rsatdik text. setTextShuningdek, biz tugmachani yaratdik, u bosilganda funksiyani “Salom, dunyo!” qiymatini yangilash uchun chaqiradi text.

Ushbu misolda biz provayder komponentida belgilangan "matn" va "setText" o'zgaruvchilariga kirish uchun useContext kancasidan foydalanganmiz.

``"MyComponent"`` ning qaytarish bayonotida biz qiymatini ko'rsatadigan paragraf elementini ko'rsatdik text. setTextShuningdek, biz tugmachani yaratdik, u bosilganda funksiyani “Salom, dunyo!” qiymatini yangilash uchun chaqiradi text.

<img src="https://i.imgur.com/a191j3C.gif" />

Va shunday! React ilovangizda Context API dan shunday foydalanishingiz mumkin.

Kontekst ob'ektini yaratish, provayder komponentini aniqlash va boshqa komponentlarda kontekstni iste'mol qilish orqali siz ma'lumotlarni ilovangiz bo'ylab oddiy va samarali tarzda almashishingiz mumkin.

Context API holatlaridan foydalaning
Bu erda Context API ning haqiqiy foydalanish holatlari keltirilgan.

Mavzu: Ilovangizning joriy mavzusini saqlash va uni barcha komponentlar uchun mavjud qilish uchun Context API dan foydalanishingiz mumkin. Shu tarzda, foydalanuvchi mavzuni almashtirganda (masalan, qorong'u rejimni yoqish), barcha komponentlar yangi mavzu bilan yangilanadi.
Foydalanuvchi autentifikatsiyasi: Kontekst API-dan foydalanuvchining autentifikatsiya holatini saqlash va uni barcha kerakli komponentlarga uzatish uchun ham foydalanishingiz mumkin. Shunday qilib, foydalanuvchining autentifikatsiya holatidan kelib chiqib, ilovangizning ayrim qismlariga kirishni osongina cheklashingiz mumkin.
Ko'p tilli qo'llab-quvvatlash: Siz ilovangizning joriy tilini kontekstda saqlashingiz va uni barcha kerakli komponentlarga yuborishingiz mumkin. Shunday qilib, siz tilni barcha komponentlarga rekvizit sifatida o'tkazmasdan, turli tillar o'rtasida osongina almashishingiz mumkin.
Tashqi manbalardan ma'lumotlarga kirish: Nihoyat, API yoki ma'lumotlar bazalari kabi tashqi manbalardan olingan ma'lumotlarni saqlash va uni barcha komponentlar uchun mavjud qilish uchun Context API dan foydalanishingiz mumkin. Bu sizning kodingizni soddalashtirishi va ilovangiz bo'ylab ma'lumotlarni boshqarishni osonlashtirishi mumkin.
Umuman olganda, Context API ilovangiz boʻylab davlat maʼlumotlarini boshqarishning moslashuvchan va samarali usulini taʼminlaydi va u bir nechta komponentlar oʻrtasida almashilishi kerak boʻlgan global maʼlumotlarni boshqarish uchun ayniqsa foydali boʻlishi mumkin.

Context API uchun eng yaxshi amaliyotlar
Har qanday vositada bo'lgani kabi, loyihalaringizda Context API-dan foydalanishda yodda tutish kerak bo'lgan eng yaxshi amaliyotlar va umumiy tuzoqlar mavjud. Context API dan samarali foydalanish boʻyicha baʼzi maslahatlar:

Kontekstingizni aniqlash uchun alohida fayldan foydalaning: Kodingizni tartibli va oson saqlash uchun kontekst obyektingizni alohida faylda belgilash yaxshi amaliyotdir.
Context API-ni faqat global holat boshqaruvi bilan cheklab qo'ying: Ilovangizdagi bir nechta komponentlar orqali kirish kerak bo'lgan holatni boshqarish uchun Context API-dan foydalanish yaxshidir. Uni faqat bitta komponentda kirish kerak bo'lgan holat uchun ishlatishdan saqlaning, chunki bu keraksiz murakkablik va ishlash muammolariga olib kelishi mumkin.
Kontekst provayderlaridan tejamkorlik bilan foydalaning: kontekst provayderlari global holatni boshqarish uchun kuchli vosita bo'lishi mumkin bo'lsa-da, odatda ulardan tejamkorlik bilan foydalanish yaxshi fikrdir. Buning o'rniga, iloji boricha ma'lumotlarni komponentlar daraxti orqali uzatish uchun rekvizitlardan foydalanishni o'ylab ko'ring.
Standart qiymatlardan foydalaning: Yangi kontekst yaratishda, agar provayder mavjud bo'lmasa, ishlatiladigan standart qiymatni taqdim etish yaxshidir. Bu kutilmagan xatolarning oldini olishga yordam beradi va kodingizni yanada mustahkam qiladi. E'tibor bering, biz yuqorida qilgan loyiha uchun kontekst ob'ekti uchun standart qiymat sifatida bo'sh satrdan foydalanganmiz.
Xulosa
Ushbu maqolada biz React ilovalaridagi holatni boshqarish uchun kuchli vosita bo'lgan React Context API-ni o'rganib chiqdik.

Biz Context API asoslarini, jumladan, kontekst yaratish, maʼlumotlarni bolalar komponentlariga uzatish uchun Provayder komponentini yaratish va ilgak yordamida boshqa komponentdagi maʼlumotlarni isteʼmol qilishni oʻrganib chiqdik useContext.


### Eslatma bu haqida amaliyot qilganimizda yana batafsil to'xtalamiz!

## Custom Hook yaratish
Ba'zan siz aniqroq maqsadda Hook bo'lishini xohlaysiz: masalan, ma'lumotlarni olish, foydalanuvchining onlayn ekanligini kuzatish yoki chat xonasiga ulanish. Siz bu ilgaklarni React-da topa olmasligingiz mumkin, lekin ilovangiz ehtiyojlari uchun o‘z ilgaklaringizni yaratishingiz mumkin.

Tasavvur qiling-a, siz tarmoqqa juda bog'liq bo'lgan ilovani ishlab chiqyapsiz (ko'pgina ilovalar kabi). Agar foydalanuvchi ilovangizdan foydalanayotganda tarmoq ulanishi tasodifan uzilib qolgan bo'lsa, foydalanuvchini ogohlantirmoqchisiz. Siz bunga qanday munosabatda bo'lar edingiz? Sizning komponentingizda ikkita narsa kerak bo'lganga o'xshaydi:

Tarmoqning onlayn yoki yo'qligini kuzatib boradigan davlat qismi.
Global <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event">onlayn</a> va <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event">offline</a> voqealarga obuna bo'ladigan va bu holatni yangilaydigan effekt.
Bu sizning komponentingizni tarmoq holati bilan sinxronlashtiradi . Siz shunday bir narsa bilan boshlashingiz mumkin:

Misol:
```js
import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
```

### Kelin  yan bir misol ko'ramiz:)
Bu codelarimizni ``App.jsxga qoyamiz``
```js
import { useOnlineStatus } from './useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();
  
  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
```
Bu codelarimizni ``useOnlineStatus.jsx`` componentiga qoyamiz

```js
import { useOnlineStatus } from './useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();
  
  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
```

<a href="https://react.dev/learn/reusing-logic-with-custom-hooks">Batafsil ma'lumot</a>

## Keling Custom Hookga yana bir misol ko'ramiz bilimizni mustahkamlash uchun:)

Misol:

```js
import { useState } from "react"

const App = () => {
	const [firstName, setfirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const validateInput = text => {
		if (text.search(/\d/) >= 0) {
			return true
		} else {
			return false
		}
	}

	const validateFirstName = validateInput(firstName) ? 'text-danger' : null
	const validateLastName = validateInput(lastName) ? 'text-danger' : null

	return(
		<>
			<h1>Register</h1>
			<input 
				type="text" 
				name="firstName"
				className={`${validateFirstName}`}
				value={firstName}
				placeholder="Your name" 
				onChange={(e) => setfirstName(e.target.value)}
			/>
			<input 
				type="text" 
				name="firstName" 
				value={lastName}
				className={`${validateLastName}`}
				placeholder="Your name" 
				onChange={(e) => setLastName(e.target.value)}
			/>
		</>
	)
}

export default App
```
Bizda bir misol bor register ko'rganingizdek ikkita input uchun adelni hooklar alohida functionlar yozilayapti va kodimiz ko'paymoqda biz bu codeda qanday qilib custom hook yaratishimiz mumkuligini keling ko'rib chiqamiz

custom hook yordamida yozilgan code

```js
import { useState } from "react"

const useInputValidation = (initalValue) => {
	const [value, setValue] = useState(initalValue);

	const onChange = (e) => {
		setValue(e.target.value)
	}

	const validateInput = () => {
		return value.search(/\d/) >= 0
	}

	const colorValidate = validateInput() ? 'text-danger' : null

	return { value, onChange, colorValidate }
}

const App = () => {
	
	const firstName = useInputValidation('');
	const lastName = useInputValidation('');

	return (
		<>
			<h1>Register</h1>
			<input
				type="text"
				name="firstName"
				className={firstName.colorValidate}
				value={firstName.value}
				onChange={firstName.onChange}
			/>
			<input
				type="text"
				name="lastName"
				className={lastName.colorValidate}
				value={lastName.value}
				onChange={lastName.onChange}
			/>
		</>
	)
}

export default App
```

## Context va state managment nima?
<img  src="https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/Cover-Image-2.png"/>
<img src="https://www.carlrippon.com/static/0d1f722d0fe4c2bc4c3d71595dbe67dd/ca682/prop-drilling-v-context.png" />

## What is State Management in React?(ReactJSda State Management nima?)
State managment(state boshqaruvi) React ilovasida ma'lumotlarni qayta ishlash, tartibga solish va almashish uchun qo'llaniladigan usul. U ma'lumotlarni tizimli boshqarish va manipulyatsiya qilishni o'z ichiga oladi, turli komponentlar bo'ylab uzluksiz integratsiya va sinxronizatsiyani ta'minlaydi.

## ReactJSda State Managementning afzalliklari
State managment(state boshqaruvi) rivojlanayotgan ma'lumotlar bilan ishlash uchun zarur bo'lgan dinamik va interaktiv ilovalarni ishlab chiqishda hal qiluvchi rol o'ynaydi. Bu maʼlumotlar foydalanuvchilarning oʻzaro taʼsiri yoki boshqa tetiklovchi hodisalardan kelib chiqishi mumkin.

Kuchli holatni boshqarish usullarini qo'llash orqali React ilovalari ma'lumotlar yaxlitligini saqlab turishi, ish faoliyatini yaxshilashi va foydalanuvchi tajribasini ta'minlashi mumkin.

<a href="https://www.freecodecamp.org/news/state-management-in-react-props-vs-context-api/">Batafsil ma'lumot olish uchun bosing</a>