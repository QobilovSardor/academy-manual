# 📔 2-dars

[[toc]]

## Math Obyekti

### 🔢 Math nima?

JavaScriptda Math bu — matematik funksiyalarni bajaruvchi tayyor ob'ekt.

```js
Math.max — eng katta sonni topadi
console.log(Math.max(2,3,4))

Math.min — eng kichik sonni topadi
console.log(Math.min(2,3,4))

Math.round — sonni eng yaqin butun songa yaxlitlaydi
console.log(Math.round(5.6))

Math.floor — sonni pastga qarab butun songa yaxlitlaydi
console.log(Math.floor(5.9));

Math.ceil — sonni tepaga qarab butun songa yaxlitlaydi
console.log(Math.ceil(5.3))

🎲 Random son yasash

const tasodifySon = Math.random();
console.log(tasodifySon) // 0 dan 1 gacha tasodifiy son
// ❗ Bu son doim 0 va 1 orasida bo‘ladi. Hech qachon 1 bo‘lmaydi, faqat unga yaqin.

0 dan 10 gacha tasodifiy butun son chiqorish:

const tasodiyfSon = Math.floor(Math.random() * 11);
console.log(tasodiyfSon);
// Kod logicasi
Math.random() => 0.12
0.12 * 11 => 1.32
Math.floor(1.32) => 1

Math.random() => 0.95
0.95 * 11 => 10.45
Math.floor(10.45) => 10
```

## 🎮 Qiziqarli mini mashq: Kompyuter o'ylagan soni topish

#### Fodalanuvchidan kompyuter o'ylagan soni kiriting deb so'rang, va kiritilgan soni tasodify son bilan tekshiring

::: details 🎮 Qiziqarli mini mashq javobi

```js
const taxmin = prompt("Kompyuter o'ylagan soni kiriting", ""); // foydalanuvchi taxmini
const random = Math.floor(Math.random() * 10) + 1;

if (taxmin === random) {
  console.log("Zo'r! To‘g‘ri topding 🎉");
} else {
  console.log("Afsus, bu safar " + random + " edi.");
}
```

:::

### Math davomi

```js
✅ 1. Math.pow(x, y) — darajaga ko‘tarish
console.log(Math.pow(2, 3)); // 2^3 = 8;

✅ 2. Math.sqrt(x) — kvadrat ildiz
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(16)); // 4
🧠 Masalan:
// 3 × 3 = 9 → Math.sqrt(9) = 3

✅ 3. Math.abs(x) — mutlaq qiymat: Bu manfiy sonni musbatga aylantiradi.

console.log(Math.abs(-7)); // 7
console.log(Math.abs(7));  // 7

✅ 6. Math.trunc(x) — faqat butun qismini oladi
console.log(Math.trunc(4.9)); // 4
// Farqi: bu faqat butun qismni oladi (yaxlitlamaydi, shunchaki nuqtadan oldingi qismni oladi).
```

#### Mini mashq

```js
// 5 ni 2-darajaga ko‘taring
console.log(); // nechchi chiqadi?

// -15 ning mutlaq qiymatini chiqaring
console.log(); // nechchi chiqadi?

// 25 ning ildizini toping
console.log(); // nechchi chiqadi?
```

🎯 1-Misol: Oylikdan soliq hisoblash kalkulyatori
📌 Shart:
Ishchining oyligi: 5 000 000 so‘m

Soliq stavkasi: 12% (foiz)

Biz haqiqiy qolgan pulni hisoblaymiz

```js
const oylik = 5000000; // so'm
const soliqFoizi = 12; // %

const soliqSummasi = (oylik * soliqFoizi) / 100;
const qolganOylik = oylik - soliqSummasi;

console.log("💸 Soliq: " + soliqSummasi + " so'm");
console.log("🧾 Qolgan oylik: " + qolganOylik + " so'm");
```

🎮 2-Misol: Ball tizimi (o‘yin/imtihon uchun)
📌 Shart:
Foydalanuvchi 4 ta savoldan quyidagicha ball oldi: 10, 7, 8, 9

O‘rtacha ballni hisoblash

```js
const ballar = [10, 7, 8, 9];
const umumiyBall = ballar[0] + ballar[1] + ballar[2] + ballar[3];
const ortacha = umumiyBall / ballar.length;

console.log("📊 O‘rtacha ball: " + ortacha);
```

🛍️ 3-Misol: Chegirma kalkulyatori
📌 Shart:
Mahsulot narxi: 120 000 so‘m

Chegirma: 25%

Yangi narxini topamiz

```js
const narx = 120000;
const chegirmaFoizi = 25;

const chegirmaSummasi = (narx * chegirmaFoizi) / 100;
const yangiNarx = narx - chegirmaSummasi;

console.log("🛒 Chegirma summasi: " + chegirmaSummasi + " so'm");
console.log("💰 Yangi narx: " + yangiNarx + " so'm");

```

📘 JavaScript Math — Basic darajadagi funksiyalar

| Funksiya              | Nima qiladi                            | Misol                          | Natija     |
|-----------------------|----------------------------------------|--------------------------------|------------|
| `Math.random()`       | 0 va 1 orasida tasodifiy son           | `Math.random()`                | 0.0 ~ 1.0  |
| `Math.floor(x)`       | Pastga butun songa yaxlitlaydi         | `Math.floor(4.9)`              | 4          |
| `Math.ceil(x)`        | Tepaga butun songa yaxlitlaydi         | `Math.ceil(4.1)`               | 5          |
| `Math.round(x)`       | Yaqin butun songa yaxlitlaydi          | `Math.round(4.6)`              | 5          |
| `Math.trunc(x)`       | Nuqtadan oldingi butun qismni oladi    | `Math.trunc(4.9)`              | 4          |
| `Math.pow(x, y)`      | Sonni darajaga ko‘taradi               | `Math.pow(2, 3)`               | 8          |
| `Math.sqrt(x)`        | Kvadrat ildizini qaytaradi             | `Math.sqrt(25)`                | 5          |
| `Math.abs(x)`         | Musbat qiymat qaytaradi                | `Math.abs(-15)`                | 15         |
| `Math.max(...x)`      | Eng katta qiymatni topadi              | `Math.max(4, 9, 2)`            | 9          |
| `Math.min(...x)`      | Eng kichik qiymatni topadi             | `Math.min(4, 9, 2)`            | 2          |
| `Math.sign(x)`        | Son ishorasini qaytaradi               | `Math.sign(-5)`                | -1         |


## Boolean tiplari

Boolean ma'lumotlar turi ikkita qiymatdan birini ifodalaydi: _true_ yoki _false_. Mantiqiy qiymat haqiqiy yoki noto'g'ri. Taqqoslash operatorini ishga tushirganingizda ushbu ma'lumotlar turlaridan foydalanish aniq bo'ladi.Har qanday taqqoslash haqiqiy yoki noto'g'ri bo'lgan mantiqiy qiymatni qaytaradi.

**Misol: Boolean Qiymatlari**

```js
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false
```

Biz mantiqiy qiymatlar to'g'ri yoki noto'g'ri ekanligiga kelishib oldik.

### Haqiqiy qiymatlar

- Noldan tashqari barcha raqamlar (musbat va salbiy) haqiqiydir
- Bo'sh satr('')dan tashqari barcha satrlar haqiqiydir
- Boolean true

### Yolg'on qiymatlar

- 0
- 0n
- null
- undefined
- NaN
- Boolean false
- '', "", ``, bo'sh satr

## Ma'lumotlar turlarini tekshirish va uzatish

### Ma'lumotlar turlarini tekshirish

Muayyan o'zgaruvchining ma'lumotlar turini tekshirish uchun biz _typeof_ methodidan foydalanamiz.

**Misol:**

```js
// Turli xil javascript ma'lumotlar turlari
// Keling, turli xil ma'lumotlar turlarini e'lon qilaylik

let firstName = "Asabeneh"; // string
let lastName = "Yetayeh"; // string
let country = "Finland"; // string
let city = "Helsinki"; // string
let age = 250; // number, bu mening haqiqiy yoshim emas, bu haqda tashvishlanmang ;)
let job; // undefined, chunki qiymat belgilanmagan

console.log(typeof "Asabeneh"); // string
console.log(typeof firstName); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof job); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

### Ma'lumotlar turini o'zgartirish (casting)

- Casting: Bir ma'lumot turini boshqa ma'lumotlar turiga aylantirish. Biz ishlatamiz _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
  Biz arifmetik amallarni bajarganimizda, satr raqamlari birinchi navbatda butun songa yoki floatga aylantirilishi kerak, agar u xato qaytarsa.

#### Satr ni Butun songa

Biz satr sonini raqamga aylantirishimiz mumkin. Qo'shtirnoq ichidagi har qanday raqam qator raqamidir. Satr raqamiga misol: '10', '5' va boshqalar.
Biz quyidagi usullardan foydalanib satrni raqamga aylantirishimiz mumkin:

- parseInt()
- Number()
- Plus belgisi(+)

```js
let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10
```

```js
let num = "10";
let numInt = Number(num);

console.log(numInt); // 10
```

```js
let num = "10";
let numInt = +num;

console.log(numInt); // 10
```

#### Satr ni Float(vergulli) songa

Biz satr float raqamini float raqamiga o'zgartirishimiz mumkin. Qo'shtirnoq ichidagi har qanday suzuvchi raqam qatorli float raqamidir. Satr float raqamiga misol: '9.81', '3.14', '1.44' va boshqalar.
Biz quyidagi usullar yordamida string floatni raqamga aylantirishimiz mumkin:

- parseFloat()
- Number()
- Plus belgisi(+)

```js
let num = "9.81";
let numFloat = parseFloat(num);

console.log(numFloat); // 9.81
```

```js
let num = "9.81";
let numFloat = Number(num);

console.log(numFloat); // 9.81
```

```js
let num = "9.81";
let numFloat = +num;

console.log(numInt); // 9.81
```

#### Float(vergulli) sonni Butun songa

Biz float sonlarni butun sonlarga o'zgartira olamiz.
floatni int ga aylantirish uchun quyidagi usuldan foydalanamiz:

- parseInt()

```js
let num = 9.81;
let numInt = parseInt(num);

console.log(numInt); // 9
```

## Type Conversions

<a href="https://javascript.info/type-conversions">Type Conversions haqida batafsil</a>

## Conditionals (Shartlar)

Shartli bayonotlar turli shartlarga asoslangan qarorlar qabul qilish uchun ishlatiladi. Odatiy bo'lib, JavaScript skriptidagi bayonotlar yuqoridan pastgacha ketma-ket bajariladi. Agar ishlov berish mantig'i shuni talab qilsa, ketma-ket bajarilish jarayoni ikki yo'l bilan o'zgartirilishi mumkin:

- Shartli bajarish: agar ma'lum bir ifoda to'g'ri bo'lsa, bir yoki bir nechta bayonotlar bloki bajariladi.
- Takroriy bajarilish: bir yoki bir nechta bayonotlar bloki ma'lum bir ifoda to'g'ri bo'lsa, takroriy bajariladi. Ushbu bo'limda if , else , else if iboralarini ko'rib chiqamiz . Oldingi bo'limlarda biz o'rgangan taqqoslash va mantiqiy operatorlar bu erda foydali bo'ladi.

Shartlar quyidagi usullar yordamida amalga oshirilishi mumkin:

- if
- if else
- if else if else
- switch
- uchlik operator

### If

JavaScript va boshqa dasturlash tillarida _if_ kalit so'zi shartning to'g'ri yoki yo'qligini tekshirish va blok kodini bajarish uchun ishlatiladi. If shartini yaratish uchun bizga _if_ kalit so'zi, qavs ichidagi shart va jingalak qavs ({}) ichidagi kod bloki kerak bo'ladi .

```js
// sintaksis
if (condition) {
  //kodning bu qismi haqiqat sharti uchun ishlaydi
}
```

**Misol:**

```js
let num = 3;
if (num > 0) {
  console.log(`${num} musbat son`);
}
//  3 musbat son
```

Yuqoridagi shart misolida ko'rib turganingizdek, 3 0 dan katta, shuning uchun u ijobiy sondir. Shart to'g'ri edi va kod bloki bajarildi. Biroq, agar shart noto'g'ri bo'lsa, biz hech qanday natijani ko'ra olmaymiz.

```js
let isRaining = true;
if (isRaining) {
  console.log("Yomg'ir paltongizni olishni unutmang.");
}
```

Xuddi shu narsa ikkinchi shartga ham tegishli, agar isRaining noto'g'ri bo'lsa, if bloki bajarilmaydi va biz hech qanday chiqishni ko'rmayapmiz. Noto'g'ri holatning natijasini ko'rish uchun bizda boshqa blok bo'lishi kerak .

### If Else

Agar shart rost bo'lsa, birinchi blok bajariladi, bo'lmasa boshqa shart bajariladi.

```js
// sintaksis
if (condition) {
  // kodning bu qismi to'g'ri shart uchun ishlaydi
} else {
  // kodning bu qismi noto'g'ri holat uchun ishlaydi
}
```

```js
let num = 3;
if (num > 0) {
  console.log(`${num} musbat son`);
} else {
  console.log(`${num} musbat son`);
}
//  3 musbat son

num = -3;
if (num > 0) {
  console.log(`${num} musbat son`);
} else {
  console.log(`${num} musbat son`);
}
//  -3 musbat son
```

```js
let isRaining = true;
if (isRaining) {
  console.log("Sizga yomg'ir palto kerak.");
} else {
  console.log("Yomg'ir paltosi kerak emas.");
}
// Sizga yomg'ir palto kerak.

isRaining = false;
if (isRaining) {
  console.log("Sizga yomg'ir palto kerak.");
} else {
  console.log("Yomg'ir paltosi kerak emas.");
}
// Yomg\'ir paltosi kerak emas.
```

Oxirgi shart noto'g'ri, shuning uchun else bloki bajarildi. Agar bizda ikkitadan ortiq shart bo'lsa-chi? Bunday holda, biz _else if_ shartlaridan foydalanamiz.

### If Else if Else

Kundalik hayotimizda biz har kuni qaror qabul qilamiz. Biz bir yoki ikkita shartni tekshirib emas, balki bir nechta shartlarga asoslanib qaror qabul qilamiz.
Bizning kundalik hayotimizga o'xshab, dasturlash ham shartlarga to'la. Agar bizda bir nechta shartlar mavjud bo'lsa, biz _else if_ dan foydalanamiz .

```js
// sintaksis
if (condition) {
  // code
} else if (condition) {
  // code
} else {
  //  code
}
```

**Misol:**

```js
let a = 0;
if (a > 0) {
  console.log(`${a} musbat son`);
} else if (a < 0) {
  console.log(`${a} musbat son`);
} else if (a == 0) {
  console.log(`${a} nolga teng`);
} else {
  console.log(`${a} raqam emas`);
}
```

```js
// if else if else
let weather = "quyoshli";
if (weather === "yomg'irli") {
  console.log("Sizga yomg'ir palto kerak.");
} else if (weather === "bulutli") {
  console.log("Havo sovuq bo'lishi mumkin, sizga kurtka kerak.");
} else if (weather === "quyoshli") {
  console.log("Bemalol tashqariga chiqing.");
} else {
  console.log("Yomg'ir kiyimi kerak emas.");
}
```

### Uchlik(Ternar) operatorlari

Uchlik operator shart yozishga imkon beradi. Shartlarni yozishning yana bir usuli - uchlik operatorlardan foydalanish. Quyidagi misollarni ko'rib chiqing:

```js
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
```

```js
let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
```

```sh
5 is a positive number
-5 is a negative number
```

### Switch

Switch - bu **if else if else else** ga alternativdir. Ya'ni ma'nosi bir lekin sintaksisi qisqa va ixcham.
Switch bayonoti kalit so'zdan keyin qavs va kod blokidan boshlanadi. Kod blokida bizda turli holatlar bo'ladi. Agar switch bayonotidagi qavsdagi qiymat case qiymatiga mos kelsa, Case bloki ishlaydi. Tanaffus bayonoti shart bajarilgandan keyin kod bajarilishi pasaymasligi uchun bajarishni tugatishdir. Standart blok barcha holatlar shartni qoniqtirmasa ishlaydi.

```js
switch (caseValue) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  case 3:
  // code
  default:
  // code
}
```

```js
let weather = "bulutli";
switch (weather) {
  case "yomg'irli":
    console.log("Sizga yomg'ir palto kerak.");
    break;
  case "bulutli":
    console.log("Havo sovuq bo'lishi mumkin, sizga kurtka kerak.");
    break;
  case "quyoshli":
    console.log("Bemalol tashqariga chiqing.");
    break;
  default:
    console.log("Yomg'ir kiyimi kerak emas.");
}

// Switch ko'roq misollarda
let dayUserInput = prompt("Bugun qaysi kun ?"); // Brouzer orqali kiritasiz
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Bugun  Monday");
    break;
  case "tuesday":
    console.log("Bugun  Tuesday");
    break;
  case "wednesday":
    console.log("Bugun  Wednesday");
    break;
  case "thursday":
    console.log("Bugun  Thursday");
    break;
  case "friday":
    console.log("Bugun  Friday");
    break;
  case "saturday":
    console.log("Bugun  Saturday");
    break;
  case "sunday":
    console.log("Bugun  Sunday");
    break;
  default:
    console.log("Bu hafta kuni emas");
}
```

// Shartlardan foydalanishga misollar

```js
let num = prompt("Raqamni kiriting");
switch (true) {
  case num > 0:
    console.log("Raqam musbat");
    break;
  case num == 0:
    console.log("Raqamlar nolga teng");
    break;
  case num < 0:
    console.log("Raqam manfiy");
    break;
  default:
    console.log("Kiritilgan qiymat raqam emas edi");
}
```

## 💻 Mashqlar:

### Mashqlar: Level 1

1. **ism, familiya, mamlakat, shahar, yosh, isMarried, yil** o'zgaruvchisini e'lon qiling va unga qiymat bering va har xil ma'lumotlar turlarini tekshirish uchun **typeof** operatoridan foydalaning.
2. **"10" turi 10 ga teng** ekanligini tekshiring
3. **parseInt('9.8') 10 ga teng** ekanligini tekshiring
4. **Console.log() dan foydalanmasdan** avval quyidagi taqqoslash ifodasi natijasini aniqlang. Natijani aniqlaganingizdan so'ng, uni **console.log()** yordamida tasdiqlang.

   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'

5. **Console.log()** dan foydalanmasdan avval quyidagi ifodalarning natijasini aniqlang. Natijani aniqlaganingizdan so'ng, uni **console.log()** yordamida tasdiqlang.
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')

### Mashqlar: Level 2

1. **promptda ism** kiriting agar ismingiz uzunligi 7 dan katta bo'lsa, ismingiz uzun, yoki ismingiz qisqa deb **consolega** yozuvchi dastur tuzing.
2. **promptda ism va familiya** kiriting, keyin ismingiz uzunligi va familiyangiz uzunligini solishtiring **consolega** natijasini chiqaring natijalar **1)ismingiz uzun 2)familiyangiz uzun 3)ikkalasi teng**
3. **prompt da raqam** kiriting va shu raqamga qarab **havta kunlarini** chiqaring, **1 bo'lsa dushanba 2 bo'lsa sheshanba va hokazo** agar raqam 1dan 7gacha oraliqda bo'lmasa **unaqa kun yo'q** <br> (if shart operatorida ishlang).
4. **prompt da raqam** kiriting va shu raqamga qarab **havta kunlarini** chiqaring, **1 bo'lsa dushanba 2 bo'lsa sheshanba va hokazo** agar raqam 1dan 7gacha oraliqda bo'lmasa **unaqa kun yo'q** <br> (switch case operatorida ishlang).
