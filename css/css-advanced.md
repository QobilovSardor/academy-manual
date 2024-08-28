# Advanced CSS

## 1. CSS `:root` (Global Variables);

`:root` CSS selektori barcha elementlarga taalluqli va odatda global o'zgaruvchilarni belgilash uchun ishlatiladi.

### 2. Global O’zgaruvchilarni E’lon Qilish

CSS o’zgaruvchilari (custom properties) orqali siz bir joyda qiymatni e’lon qilib, undan turli joylarda foydalanishingiz mumkin. Bu usul kodni boshqarish va texnik xizmat qilishni ancha osonlashtiradi.

### 3. Nega :root Selektoridan Foydalaniladi?

`:root` selektori odatda o’zgaruvchilarni global darajada e’lon qilish uchun ishlatiladi, chunki u hujjatdagi barcha elementlarga bir xil ta’sir qiladi. Bu o’zgaruvchilarni siz istalgan joyda chaqirishingiz mumkin.

### 4. Misollar

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size: 16px;
  --padding: 10px;
}

body {
  color: var(--primary-color);
  font-size: var(--font-size);
  padding: var(--padding);
}

.button {
  background-color: var(--secondary-color);
  padding: var(--padding);
}
```

### Tema yaratish:

```css
:root {
  --background-light: #ffffff;
  --background-dark: #2c3e50;
  --text-light: #333333;
  --text-dark: #ecf0f1;
}

/* Light Mode */
body.light-mode {
  background-color: var(--background-light);
  color: var(--text-light);
}

/* Dark Mode */
body.dark-mode {
  background-color: var(--background-dark);
  color: var(--text-dark);
}
```

### 5. `:root` Selektorining Afzalliklari

- Qayta ishlatish: Bir marta e’lon qilingan o’zgaruvchini har bir elementda qayta ishlatish mumkin, bu esa kodni takrorlashdan saqlaydi.
- Kod parvarishi(code maintenance): Kodni osonlik bilan boshqarish va o’zgartirish mumkin. Masalan, ranglarni o’zgartirish zarur bo’lsa, faqat :root ichidagi o’zgaruvchini o’zgartirish kifoya.
- Tema(Theme): Oson tema qilish imkoniyati. Misol uchun, :root orqali saytning rang sxemasini osongina o’zgartirish mumkin.

## CSS Units (`px`, `rem`, `em`, `vh`, `vw`)

CSS-da bir nechta birliklar mavjud bo'lib, ular o'lchovlar uchun ishlatiladi:

### 2. `rem` (Root Element Measurement(Ildiz elementini o'lchash))

- <b>Nima?</b> <b>rem</b> — bu root elementga asoslangan birlik. "Root element" odatda <b>`<html>`</b> elementi hisoblanadi. Bu birlik, <b>rem</b>, <b>html</b> elementining <b>font-size</b> qiymatiga asoslangan holda o'lchanadi.
- <b>Qanday ishlaydi?</b> Agar <b>html</b> elementining <b>font-size</b> qiymati <b>16px</b> bo'lsa, <b>1rem = 16px</b> bo'ladi. Buning natijasida, <b>2rem = 32px</b>, <b>0.5rem = 8px</b>, va hokazo.

#### Misol

```css
html {
  font-size: 16px;
}
.box {
  width: 2rem; /* 2 * 16px = 32px */
  height: 1.5rem; /* 1.5 * 16px = 24px */
}
```

Bu misolda .box klassiga ega elementning kengligi 32px (2rem) va balandligi 24px (1.5rem) bo’ladi.

### 3. em (Element Measurement)

- <b>Nima?</b> <b>em</b> — bu ota element (parent element) ning o'lchamiga asoslangan birlik. Bu yerda "parent element" deganda, ichki element joylashgan tashqi element nazarda tutiladi.
- <b>Qanday ishlaydi?</b> em qiymati ota elementning font-size o’lchamiga asoslanadi. Agar elementning ota elementi font-size: 20px qiymatiga ega bo’lsa, 1em = 20px, 2em = 40px, va hokazo.

#### Misol

```css
.parent {
  font-size: 20px;
}
.child {
  width: 2em; /* 2 * 20px = 40px */
  height: 1em; /* 1 * 20px = 20px */
}
```

Bu misolda .child elementining kengligi <b>40px</b> (<b>2em</b>) va balandligi <b>20px</b> (<b>1em</b>) bo'ladi, chunki ota element (.parent) <b>font-size</b> <b>20px</b> (<b>1.25rem</b>) ga teng.

- <b>Nima uchun farq qiladi?</b> Agar sizning elementingiz o’zining font-size qiymatini ota elementga nisbatan o’zgartirsa, bu em o’lchami ham o’zgaradi. Bu remdan farq qiladi, chunki rem qiymati doim root elementga asoslangan.

### 4. vh (Viewport Height)

- **Nima?** `vh` — bu vertikal (balandlik bo'yicha) viewportning foizi. "Viewport" bu sizning ekranda ko'rinadigan veb-sahifangiz qismi.
- **Qanday ishlaydi?** Agar viewportning balandligi 1000px bo'lsa, 1vh = 10px bo'ladi (1000px ning 1% i) degani.
- **Misol:**

```css
.box {
  height: 50vh; /* Ekran balandligining 50% */
}
```

Bu misolda .box elementining balandligi viewportning balandligining 50% qismiga teng bo'ladi. Agar viewportning balandligi 1000px bo'lsa, .box elementining balandligi 500px bo'ladi.

### Xulosa

- **px**: Har doim bir xil o'lcham (statik birlik), aniq o'lchovlar kerak bo'lganda ishlatiladi.
- **rem**: Root elementga (html) asoslangan birlik, veb-sahifaning global o'lchamiga bog'liq.
- **em**: Ota elementning font-size qiymatiga asoslangan birlik, moslashuvchan dizaynlar uchun.
- **vh**: Vertikal viewportning foizi, ekran balandligiga nisbatan o'lchanadi.
- **vw**: Gorizontal viewportning foizi, ekran kengligiga nisbatan o'lchanadi.

`Bu tushunchalar veb-sahifalarda elementlarni responsiv va moslashuvchan qilish uchun muhimdir.`

# calc() Funksiyasini O'rgatish

CSS'da `calc()` funksiyasi yordamida murakkab o'lchovlarni amalga oshirishingiz mumkin. Bu funksiya orqali har xil birliklarni arifmetik operatsiyalar bilan birlashtirishingiz mumkin. Bu usul sizga o'lchamlarni dinamik tarzda hisoblash va ularni moslashuvchan qilish imkonini beradi.

## 1. calc() Nima?

- **Nima?** `calc()` — bu CSS funksiyasi bo'lib, u orqali siz CSS birliklarini bir-biriga qo'shish, ayirish, ko'paytirish yoki bo'lishingiz mumkin.
- **Qanday ishlaydi?** `calc()` ichida siz matematik amallarni bajarishingiz mumkin. Misol uchun: `calc(100% - 20px)`.

## 2. Misollar

### A. Box Model - Padding va Kenglik:

- **Muammo:** Masalan, sizning elementingiz 100% kenglikka ega bo'lsin, lekin unga 20px padding berishni xohlaysiz. Bu holda, padding o'lchami elementning umumiy kengligiga ta'sir qiladi, lekin siz elementning ichidagi kontent maydoni kengligi doimiy 100% bo'lishini xohlaysiz.
- **Yechim:** `calc()` yordamida bu muammoni hal qilish mumkin.

```css
.box {
  width: calc(100% - 20px);
  padding: 10px;
  background-color: #3498db;
  color: white;
}
```

### C. Moslashuvchan Margin:

- **Muammo:** Siz elementingizning kengligini 80% qildingiz, lekin uni o’rtaga joylashtirish uchun qolgan 20% kenglikni ikkiga bo’lishingiz kerak.
- **Yechim:** `calc()` orqali margin o’lchamini hisoblash mumkin.

```css
.box {
  width: 80%;
  margin-left: calc((100% - 80%) / 2);
  background-color: #2ecc71;
  color: white;
}
```

Bu misolda, .box elementining kengligi 80% bo’lib, u avtomatik ravishda o’rtaga joylashadi, chunki uning margin-left qiymati qolgan kenglikning yarmiga teng.

### 3. Qo'shimcha Yordam

`calc()` funksiyasi bilan siz juda moslashuvchan va dinamik dizaynlar yaratishingiz mumkin. Bu funksiya o'lchamlarni bir necha birliklarni aralashtirish orqali boshqarishni osonlashtiradi.

### Xulosa

- **Arifmetik operatsiyalar:** `calc()` yordamida qo'shish (`+`), ayirish (`-`), ko'paytirish (`*`), va bo'lish (`/`) mumkin.
- **Moslashuvchanlik:** O'lchamlar va maketlar bilan dinamik tarzda ishlash uchun `calc()` juda qulay.
- **Birliklarni aralashtirish:** Turli birliklarni (masalan, `px`, `rem`, `%`) birlashtirishga imkon beradi.

# Nega px emas remdan foydalanish kerak?


::: warning Eslatma
Shrift o'lchamlarini belgilashda px dan foydalanish tavsiya etilmaydi, chunki foydalanuvchi ba'zi brauzerlarda shrift o'lchamini o'zgartira olmaydi. Masalan, ko'rish qobiliyati cheklangan foydalanuvchilar shrift o'lchamini veb-dizayner tanlagan o'lchamdan kattaroq qilib belgilashni xohlashlari mumkin. Agar siz inklyuziv dizayn yaratmoqchi bo'lsangiz, px ni shrift o'lchamlari uchun ishlatishdan saqlaning.
:::

### 1. `font-size: px` da yuzaga keladigan muamolar

### 2. width lar uchun `px` dan foydalanmang

### 3. media query da `px` dan foydalanmang
### Remdan foydalanish biroz vaqt talab qilishi mumkin, ammo u sizga kenglik va balandliklarni osonlikcha o'zgartirish imkonini beradi, va buni ham osonlashtirish mumkun 
```css
html {
  font-size: 62.5%;
}

/* 1rem = 10px */
```

### Px mavzusi bo'yicha qo'shimcha linklar

- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#pixels">MDN notes on pixels and font-size</a>
- <a href="https://www.w3.org/WAI/WCAG22/quickref/#resize-text">WCAG Resize Text standards</a>
- <a href="https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/#the-sixtwofive-trick-13">Josh Comeau, "The Surprising Truth About Pixels and Accessibility"</a>
