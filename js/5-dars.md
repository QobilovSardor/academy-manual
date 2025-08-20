# 📔 5-dars

## Tsikllar

Hayotda qiladigan ko'p harakatlarimiz takrorlash bilan to'la. Tasavvur qiling-a, agar sizdan console.log() yordamida 0 dan 100 gacha chop etishingizni so'rasam. Ushbu oddiy vazifani bajarish uchun sizga 2 dan 5 minutgacha vaqt ketishi mumkin, bunday zerikarli va takroriy vazifani tsikl yordamida bajarish mumkin.

Dasturlash tillarida takrorlanuvchi topshiriqlarni bajarish uchun biz har xil turdagi sikllardan foydalanamiz. Quyidagi misollar JavaScript va boshqa dasturlash tillarida tez-tez ishlatiladigan sikllardir.

### for tsikli

```js
// For tsikli tuzilishi
for(initialization, condition, increment/decrement){
  // kod shu yerda
}
```

```js
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 0 1 2 3 4 5
```

```js
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 5 4 3 2 1 0
```

```js
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Massivdagi barcha elementlarni qo'shish

```js
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // qisqartirilishi mumkin, sum += numbers[i]
}

console.log(sum); // 15
```

Mavjud massiv asosida yangi massiv yaratish

```js
const numbers = [1, 2, 3, 4, 5];
const newArr = [];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2);
}

console.log(newArr); // [1, 4, 9, 16, 25]
```

```js
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

#### Continue va break

• continue → shu aylanishni tashlab, keyingisiga o‘tadi.
• break → loopni butunlay to‘xtatadi.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 3 ni tashlab ketadi
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // faqat 1,2 chiqadi
}
```

#### Ichma-ich for (Nested loop)

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
/*
i=1,j=1
i=1,j=2
i=2,j=1
i=2,j=2
i=3,j=1
i=3,j=2
*/
```

#### For of (massiv elementlari uchun)

```js
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
```

#### For in (object kalitlari uchun)

```js
let obj = { name: "Ali", age: 20 };
for (let key in obj) {
  console.log(key, obj[key]);
}
```

# 📝 FOR — Mashqlar To‘plami

### 🔹 Boshlang‘ich (isinish uchun)

1. 1 dan 10 gacha sonlarni chiqaring.
2. 10 dan 1 gacha teskari tartibda sonlarni chiqaring.
3. 1 dan 100 gacha bo‘lgan sonlar yig‘indisini hisoblang.
   ::: details 3ni Javobi

```js
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i; // yoki sum += i
}

console.log(sum); // 5050 chiqadi
```

:::

4. 1 dan 20 gacha bo‘lgan juft sonlarni chiqaring.
5. 1 dan 30 gacha bo‘lgan toq sonlarni chiqarib, ularning yig‘indisini hisoblang.

### 🔹 O‘rtacha (amaliyroq)

    6.	Foydalanuvchidan son oling → uning faktorialini hisoblang (n!).

👉 Masalan: 5 → 120.
::: details 6 Javobi

```js
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log(fact);
```

:::
7. [3, 7, 2, 9, 4] massivining elementlari yig‘indisini hisoblang.
::: details 7 Javobi
```js
let x = [3, 7, 2, 9, 4];
let jami = 0;
for (let i = 0; i < x.length; i++) {
  jami = jami + x[i];
}
console.log(jami) // 25
```
:::
8. Massivdagi eng katta va eng kichik sonni toping.
👉 [10, -5, 7, 22, 3] → max = 22, min = -5.
::: details 8 Javobi
```js
let x = [10, -5, 7, 22, 3];
let max = x[0];
let min = x[0];

for (let i = 0; i < x.length; i++) {
  if (x[i] > max) max = x[i];
  if (x[i] < min) min = x[i];
}
console.log(max);
console.log(min);
```
:::
9. Stringni teskari qilib chiqaring.
👉 "salom" → "molas".
::: details 9 Javobi
```js
let s = 'salom';
let teskari = '';
for (let i = s.length - 1; i >= 0; i--) {
  teskari += s[i];
}
console.log(teskari);
```
:::
10. String ichidagi unli harflar sonini sanang.
👉 "JavaScript" → 3 ta unli.

### while tsikli

```js
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// 0 1 2 3 4 5
```

#### 3️⃣ Cheksiz loop (⚠️ ehtiyot bo‘lish kerak)

```js
while (true) {
  console.log("Cheksiz!");
  break; // break bilan to'xtatmasak, cheksiz aylanadi
}
```

4️⃣ continue va break
•	continue → shu aylanishni tashlab ketadi.
•	break → loopni butunlay to‘xtatadi.
```js
let i = 0;
while (i < 5) {
  i++;
  if (i === 3) continue;
  console.log(i); // 3 ni tashlab ketadi
}
// ========= break ==========
let i = 0;
while (i < 5) {
  i++;
  if (i === 3) break;
  console.log(i); // faqat 1,2 chiqadi
}
// 0 1 2 3 4 5
```

### do while tsikli
  •	while da → avval shart tekshiriladi, keyin kod ishlaydi. <br />
  •	do...while da → avval kod kamida 1 marta ishlaydi, keyin shart tekshiriladi.
```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 0 1 2 3 4 5
```
## Nega kerak?
•	while → Oldindan nechta aylanish bo‘lishini bilmaganda ishlatiladi. <br />
Masalan: foydalanuvchi to‘g‘ri parol kiritmaguncha so‘rash.<br />
•	do…while → Kodni kamida 1 marta ishlatib ko‘rish kerak bo‘lganda. <br />
Masalan: foydalanuvchidan kamida 1 marta ma’lumot olish va agar shart bajarilmasa, to‘xtash.

```js
let password = "";

while (password !== "1234") {
  password = prompt("Parol kiriting:");
}
alert("To'g'ri parol!");
```
do while
```js
let password;

do {
  password = prompt("Parol kiriting:");
} while (password !== "1234");

alert("To'g'ri parol!");
```

### 📝 While bo‘yicha mashqlar

Boshlang‘ich
1.	1 dan 10 gacha sonlarni chiqaring.
2.	10 dan 1 gacha teskari tartibda chiqaring.
3.	1 dan 100 gacha bo‘lgan sonlar yig‘indisini hisoblang.

#### O‘rtacha
4.	Foydalanuvchi son kiritsin → shu sonning faktorialini hisoblang.
5.	"salom" so‘zini teskari qilib chiqaring ("molas").
6.	[4,7,2,9,1] massivida eng katta elementni toping.

#### Biroz qiyinroq
7.	1 dan 50 gacha bo‘lgan juft sonlarni chiqaring.
8.	Foydalanuvchi 0 kiritmaguncha, sonlarni yig‘ib boring va yakunda summani chiqaring.
9.	Berilgan son tub (prime) ekanligini while orqali tekshiring.

### for of tsikli

Biz massivlar uchun _for of_ loop dan foydalanamiz. Agar biz massivdagi har bir elementning indeksiga qiziqmasangiz, bu massivni takrorlashning juda qulay usuli.

```js
for (const element of arr) {
  // kod shu yerda
}
```

```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num);
}

// 1 4 9 16 25

// massivdagi barcha raqamlarni qo'shsak
let sum = 0;
for (const num of numbers) {
  sum = sum + num; // shu tarzda ham qisqartirilishi mumkin, sum += num
}
console.log(sum); // 15

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]); // har bir elementning faqat birinchi harfini olish,  H C J R N M
}
```

```js
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}

console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

Break tsiklni buzish(to'xtatish) uchun ishlatiladi.

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2
```

Yuqoridagi kod, agar takrorlash jarayonida 3 topilsa, to'xtaydi.

### continue

Biz ma'lum bir takrorlashni o'tkazib yuborish uchun _continue_ kalit so'zidan foydalanamiz .

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
```

## Masalalar

1. For tsikli yordamida 0 dan 10 gacha takrorlang, while va do while yordamida xuddi shunday qiling
2. For tsikli yordamida 10 dan 0 gacha takrorlang, while va do while yordamida xuddi shunday qiling
3. For tsikli yordamida 0 dan n gacha takrorlang
4. Quyidagi karra jadvalini chop etish uchun Tsikldan foydalaning:

```js
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
```

5. 0 dan 100 gacha takrorlash va faqat juft raqamlarni chop etish uchun for tsiklidan foydalaning

6. 0 dan 100 gacha takrorlash va faqat toq raqamlarni chop etish uchun for tsikli dan foydalaning

7. 0 dan 100 gacha takrorlash va faqat tub sonlarni chop etish uchun for tsikli dan foydalaning

8. 0 dan 100 gacha takrorlash va barcha raqamlarning yig'indisini chop etish uchun for tsikli dan foydalaning.
