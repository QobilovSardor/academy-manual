# 📔 15-dars

## Context this

"this" JavaScript dasturlash tilida ishlatiladigan bir kalit so'z bo'lib, dasturda yozilgan funksiya yoki metodning ishchi kontekstini ifodalaydi. "this" dastur davomida dastur yozuvchisi tomonidan belgilanmaydi, balki funksiya yoki metodning bajarilayotgan konteksti tomonidan qiymatlanadi.

"this" kalit so'zi, funksiya yoki metodning ishchi obyekti yoki o'zini chaqirgan obyektga ishora qiladi. "this" kalit so'zi orqali, funksiya yoki metodning ishchi obyekti yoki o'zini chaqirgan obyektning xususiyatlari va metodlari bilan ishlash mumkin bo'ladi.

"this" kalit so'zi har bir funksiya yoki metod bajarildiğida o'ziga xos qiymat olishi mumkin. Bu qiymat funksiya yoki metodning qaysi kontekstda chaqirilishiga bog'liq bo'ladi. "this" qiymati dastur davomida uzgartirilishi mumkin, misol uchun funksiya boshqa bir obyektning metodiga murojaat qilganda "this" qiymatini o'zgartirish mumkin.

"this" kalit so'zi bajarilayotgan funksiya yoki metodning kontekstiga bog'liq o'zgaruvchi sifatida ishlatiladi. U ishchi obyektning o'zini ifodalaydi va ushbu obyektga murojaat qilish imkonini beradi.
Masalan:
```js
let person = {
  name: "John",
  sayHello: function() {
    console.log("Salom, mening ismim " + this.name);
  }
};

person.sayHello(); // Salom, mening ismim John
```
### Functionlarda, Objectlarda context this nimaga teng?
```js
"use strict"; // Qatiy rejim

function logger() {
	console.log(this); // undefine
}
logger();

```
Oddiy functionni contexti ya'ni this har doim window global objectiga qaram bo'ladi! Agarda qatiy rejim("use strict") yoqiq bo'lsa this undefinedga teng bo'ladi!

### Closure

Misol:
```js
const a = 5;

function log() {
	console.log(a) // 5
}

log();

function logTwo() {
	const a = 3;
	console.log(a) // 3
}

logTwo();
```

Objectlarda context this nimaga teng?
Context this objectning ichidagi metodda  - objectning o'ziga teng qatiy rejim yoqiq bo'lsa ham o'chiq bo'lsaham! 
```js
const obj = {
	name: 'foo',
	age: 36,
	soo: function() {
		console.log(this); // Objectnin o'ziga teng
	}
}
obj.soo();

const obj2 = {
	name: 'foo',
	age: 36,
	soo2: function () {
		function logger() {
			console.log(this) // undefined agar qatiy rejim yoniq bo'lsa ("use strict") // Agarda o'chiq bo'lsa window
		}
		logger()
	}
}
obj2.soo2();
```

## Function constructor

Funksiya konstruktori, obyektlarni yaratish uchun ishlatiladigan maxsus bir funksiya bo'lib, yangi obyekt yaratish uchun ishlatiladi. Funksiya konstruktori yordamida yaratilgan obyekt, ushbu funksiyaning sabloniga mos keladi.

Funksiya konstruktorini belgilash uchun oddiy bir funksiya yaratiladi, unda "this" kalit so'zi bilan obyektni ma'lum bir xususiyati belgilanadi. Funksiya konstruktori bilan obyekt yaratishda "new" kalit so'zi bilan funksiya chaqiriladi. Bunda "new" kalit so'zi orqali yaratilgan bo'sh obyekt oluşturuladi va "this" o'zgaruvchisi bu obyektni ishorat qiladi.

Masalan, quyidagi kodda "Car" nomli funkisya konstruktori yaratiladi va unga "brand" va "color" xususiyatlari belgilanadi:

```js
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
}

// Funksiya konstruktoridan yangi obyekt yaratish
var car1 = new Car("Toyota", "qora");
var car2 = new Car("BMW", "oq");

console.log(car1); // { brand: "Toyota", color: "qora" }
console.log(car2); // { brand: "BMW", color: "oq" }
```
## Funksiya konstruktorida prototype xususiyati
Funksiya konstruktorida prototype xususiyati, prototip asoslangan merosi va metodlar o'rnatish uchun ishlatiladi. prototype xususiyati, funksiya yordamida yaratilgan obyektlar o'rtasidagi umumiy xususiyatlar va metodlar uchun foydalaniladi.

prototype xususiyati, funksiya konstruktori orqali yaratilgan obyektlar uchun bir "kalit so'z"ni ifodalaydi. Bu kalit so'z orqali obyektlar, funksiya konstruktori yordamida belgilangan prototipning xususiyatlari va metodlariga murojaat qilishlari mumkin bo'ladi.

prototype xususiyati, prototipli merosiyalar va kalit so'zlar tizimi orqali kalıtımni ta'minlayadi. Bu tizim orqali bir funksiya konstruktori, boshqa bir funksiya konstruktoridan xususiyatlarni va metodlarini olib kelishi va ularni o'zida ishlatishi mumkin. Buning natijasida kod qayta ishlanishini osonlashtiradi va kodning qayta ishlanuvchanlik imkonini yaratadi.

Bundan tashqari, prototype xususiyati, funksiya konstruktorida o'rnatilgan metodlarni obyektlarga ulashishga imkon beradi. Bunday metodlar, o'zlarini funksiya konstruktori orqali yaratilgan obyektlar bilan birlikda ishlatishlari mumkin bo'ladi.

Masalan, quyidagi misolda Person funkisya konstruktorida name xususiyati va greet metodini prototype orqali belgilaymiz:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Salom, mening ismim " + this.name);
}

var person1 = new Person("John");
person1.greet(); // Salom, mening ismim John

```

### Context this function constructorida  nimaga teng?
Context this function constructorida yangi objectning egzemplariga(nusxasiga) teng
```js
function Car(name, color) {
	this.name = name;
	this.color = color;
}
const bmw = new Bmw("BMW", "black");

console.log(bmw)
```

## Call, Apply & Bind
"call, apply va bind" JavaScript'da funksiyalarni ishga tushirish va this qiymatini belgilash uchun ishlatiladigan metodlardir. Ularning vazifalari quyidagicha:

1.call: Bir funksiyani o'zgartirishsiz chaqirish uchun ishlatiladi. call metodi orqali bir funksiya bajarilganda, funksiya ichidagi this qiymati o'zgartiriladi va kerakli argumentlar bilan bajariladi. Argumentlar oddiy qator sifatida beriladi.

Misol uchun:
```js
function greet() {
  console.log("Salom, mening ismim " + this.name);
}

var person = {
  name: "John"
};

greet.call(person); // Salom, mening ismim John

```

2.apply: Bir funksiyani massiv sifatida argumentlarni o'zgartirishsiz chaqirish uchun ishlatiladi. apply metodi orqali bir funksiya bajarilganda, funksiya ichidagi this qiymati o'zgartiriladi va kerakli argumentlar massiv shaklida beriladi.

Misol uchun:
```js
function greet() {
  console.log("Salom, mening ismim " + this.name);
}

var person = {
  name: "John"
};

greet.apply(person); // Salom, mening ismim John

```
Call, aply ning faqi.
```js
function logger(speed) {
	console.log(`My car is ${this.name} color is ${this.color}. Max speed: ${speed}`);
}

const car = {
	name: "Mers",
	color: "black"
}
logger.call(car, 200)
logger.aply(car, [200])
```

3.bind: Bir funksiyani o'zgartirishsiz chaqirish uchun yangi bir funksiya yaratiladi. bind metodi, berilgan bir obyektga bog'liq funksiyaning yangi nusxasini qaytaradi. Yangi funksiya chaqirilganda, this qiymati o'zgartirilgan obyekt bo'ladi. bind metodi argument qabul qilmaydi, lekin yangi funksiya chaqirilganida argumentlar berilishi mumkin.

Misol uchun:
```js
function greet() {
  console.log("Salom, mening ismim " + this.name);
}

var person = {
  name: "John"
};

var greetPerson = greet.bind(person);
greetPerson(); // Salom, mening ismim John
```

## Klasslar

JavaScript - bu ob'ektga yo'naltirilgan dasturlash tili. JavScript-dagi hamma narsa o'zining xususiyatlari va usullari bilan ob'ektdir. Ob'ekt yaratish uchun sinf yaratamiz. Sinf ob'ekt konstruktori yoki ob'ektlarni yaratish uchun "loyiha"ga o'xshaydi. Ob'ektni yaratish uchun biz sinfni yaratamiz. Sinf ob'ektning atributlari va xatti-harakatlarini belgilaydi, ob'ekt esa sinfni ifodalaydi.

Biz sinf yaratganimizdan so'ng, biz xohlagan vaqtda undan ob'ekt yaratishimiz mumkin. Sinfdan ob'ekt yaratish sinf instantsiyasi deb ataladi.

Ob'ekt bo'limida biz ob'ekt literalini qanday yaratishni ko'rdik. Ob'ekt literal - bu singleton. Agar shunga o'xshash ob'ektni olishni istasak, uni yozishimiz kerak. Biroq, sinf ko'plab ob'ektlarni yaratishga imkon beradi. Bu kod miqdorini va kodning takrorlanishini kamaytirishga yordam beradi.

### Klassni e'lon qilish

JavaScript-da sinfni aniqlash uchun bizga class kalit so'zi , **CamelCase** -dagi sinf nomi va blok kodi (ikki jingalak qavs) kerak. Keling, shaxs nomini yarataylik.

```sh
// sintaksis
class ClassName {
    //  kod shu yerda
}

```

**Misol:**

```js
class Person {
  //  kod shu yerda
}
```

Biz Person sinfini yaratdik, lekin uning ichida hech qanday narsa yo'q.

### Klassni namunasini olish

Instantsiya sinfi sinfdan ob'ekt yaratishni anglatadi. Bizga new kalit so'zi kerak va biz new so'zidan keyin sinf nomini chaqiramiz.

Keling, Person sinfimizdan it ob'ektini yarataylik.

```js
class Person {
  // kod shu yerda
}
const person = new Person()
console.log(person)
```

```sh
Person {}
```

Ko'rib turganingizdek, biz shaxs ob'ektini yaratdik. Sinf hech qanday xususiyatga ega bo'lmagani uchun ob'ekt ham bo'sh.

Sinf uchun turli xususiyatlarni o'tkazish uchun sinf konstruktoridan foydalanishga ruxsat bering.

### Klass konstruktori

Konstruktor - bu bizning ob'ektimiz uchun loyihani yaratishga imkon beruvchi o'rnatilgan funksiya. Konstruktor funktsiyasi kalit so'z konstruktoridan keyin qavsdan boshlanadi. Qavslar ichida biz ob'ektning xususiyatlarini parametr sifatida beramiz. Konstruktor parametrlarini sinfga biriktirish uchun this kalit so'zidan foydalanamiz .

Quyidagi Person klassi konstruktorida firstName va LastName xossalari mavjud. Ushbu xususiyatlar Person sinfiga ushbu kalit so'z yordamida biriktirilgan . Bu sinfning o'ziga tegishli.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Bu yerdan chiqishni tekshiring 
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)
```

```sh
Person {firstName: undefined, lastName}
```

Ob'ektning barcha kalitlari aniqlanmagan. Har doim biz yaratganimizda, biz xususiyatlarning qiymatini o'tkazishimiz kerak. Keling, sinfni yaratganimizda qiymatni o'tkazaylik.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
```

Biz boshida aytib o'tganimizdek, sinfni yaratganimizdan so'ng, biz sinf yordamida ko'plab ob'ektlarni yaratishimiz mumkin. Keling, Person sinfidan foydalanib, ko'plab shaxs ob'ektlarini yarataylik.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Bu yerdan chiqishni tekshiring 
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
Person {firstName: "Lidiya", lastName: "Tekle"}
Person {firstName: "Abraham", lastName: "Yetayeh"}
```

Person sinfidan foydalanib, biz uchta shaxs ob'ektini yaratdik. Ko'rib turganingizdek, bizning sinfimiz unchalik ko'p emas edi, bizga sinfga qo'shimcha xususiyatlar qo'shish imkonini beradi.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Bu yerdan chiqishni tekshiring 
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
```

### Konstruktor bilan standart qiymatlar

Konstruktor funksiyasi xususiyatlari boshqa oddiy funksiyalar kabi standart qiymatga ega bo'lishi mumkin.


```js
class Person {
  constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person() // u standart qiymatlarni oladi 
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}
```

### Klass methodlari

Sinf ichidagi konstruktor o'rnatilgan funksiya bo'lib, u bizga ob'ekt uchun loyihani yaratishga imkon beradi. Sinfda biz sinf usullarini yaratishimiz mumkin. Metodlar sinf ichidagi JavaScript funksiyalaridir. Keling, ba'zi sinf usullarini yarataylik.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())
```

```sh
Asabeneh Yetayeh
test.js:19 Lidiya Tekle
```

### Boshlang'ich qiymatga ega bo'lgan xususiyatla

Ba'zi xususiyatlar uchun sinf yaratganimizda biz boshlang'ich qiymatga ega bo'lishimiz mumkin. Misol uchun, agar siz o'yin o'ynasangiz, sizning boshlang'ich ballingiz nolga teng bo'ladi. Shunday qilib, bizda boshlang'ich ball yoki nolga teng bo'lgan ball bo'lishi mumkin. Boshqacha qilib aytganda, bizda boshlang'ich mahorat bo'lishi mumkin va biz bir muncha vaqt o'tgach, qandaydir mahoratga ega bo'lamiz.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
0
0
[]
[]
```

Usul oddiy usul yoki oluvchi yoki setter bo'lishi mumkin. Keling, ko'raylik, olish va sozlash.


### getter

Get usuli bizga ob'ektdan qiymatga kirish imkonini beradi. Biz get usulini get kalit so'zidan keyin funksiyadan foydalanib yozamiz. Xususiyatlarga ob'ektdan to'g'ridan-to'g'ri kirish o'rniga biz qiymatni olish uchun getterdan foydalanamiz. Quyidagi misolga qarang

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getscore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
```

```sh
0
0
[]
[]
```

### setter

Setter usuli bizga ma'lum xususiyatlarning qiymatini o'zgartirish imkonini beradi. Biz to'plam kalit so'zidan keyin funktsiyadan foydalangan holda sozlash usulini yozamiz . Quyidagi misolga qarang.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
```

Oddiy usul va getter o'rtasidagi farqga hayron bo'lmang. Agar siz oddiy usulni qanday qilishni bilsangiz yaxshi. Person sinfiga getPersonInfo deb nomlangan oddiy usulni qo'shamiz.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
[]
Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
John Doe is 50. He lives Mars city, Mars.
```

### Statik method

Static kalit so'zi sinf uchun statik usulni belgilaydi. Statik usullar sinf misollarida chaqirilmaydi. Buning o'rniga ular sinfning o'zida chaqiriladi. Bu ko'pincha yordamchi funktsiyalar, masalan, ob'ektlarni yaratish yoki klonlash funktsiyalari. Statik usulga misol Date.now() . Now usuli to'g'ridan-to'g'ri sinfdan chaqiriladi .

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())
```

```sh
Node
15.1.2022 23:56
```

Statik usullar bu foydali funktsiyalar sifatida ishlatilishi mumkin bo'lgan usullardir.



## Meros olish

Merosdan foydalanib, biz ota-klassning barcha xususiyatlari va usullariga kirishimiz mumkin. Bu kodning takrorlanishini kamaytiradi. Esingizda bo'lsa, bizda Person ota-onalar sinfi bor va biz undan bolalar yaratamiz. Bizning bolalar sinfimiz talaba bo'lishi mumkin, o'rgatadi va hokazo.

```js
// sintaksis
class ChildClassName extends {
 //  kod shu yerda
}
```

Keling, Shaxs ota sinfidan Student bola sinfini yarataylik.

```js
class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
Asabeneh Yetayeh is Finland. He lives Helsinki, 250.
```

### Override methodlari

Ko'rib turganingizdek, biz Person Class-dagi barcha usullarga kirishga muvaffaq bo'ldik va uni Student bola sinfida ishlatdik. Biz ota-ona usullarini sozlashimiz mumkin, biz bolalar sinfiga qo'shimcha xususiyatlar qo'shishimiz mumkin. Agar biz usullarni moslashtirmoqchi bo'lsak va qo'shimcha xususiyatlar qo'shmoqchi bo'lsak, biz konstruktor funktsiyasidan bolalar sinfini ham ishlatishimiz kerak. Konstruktor funktsiyasi tomonida biz ota-sinfdagi barcha xususiyatlarga kirish uchun super() funksiyasini chaqiramiz. Shaxs sinfida jins yo'q edi, lekin endi bolalar sinfi uchun jins xususiyatini beramiz, Student. Agar bolalar sinfida bir xil usul nomi ishlatilsa, ota-ona usuli bekor qilinadi.

```js
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript
I am a child of the person class
Lidiya Tekle
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing
```

Endi getPersonInfo usuli bekor qilindi va u erkak yoki ayol ekanligini aniqlaydi.



