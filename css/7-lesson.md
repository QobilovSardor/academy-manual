## CSS Attribute Selectors
Muayyan atributlar yoki atribut qiymatlariga ega bo'lgan HTML elementlariga xususiyatlar berish mumkin.
- `[attribute="value"]`
- `[attribute~="value"]`
- `[attribute|="value"]`
- `[attribute^="value"]`
- `[attribute$="value"]`
- `[attribute*="value"]`

```html
<a href="https://www.kun.uz">www.kun.uz</a>
<a href="http://www.daryo.uz" target="_blank">daryo.uz</a>
<a href="http://www.wikipedia.org" target="_top">wikipedia.org</a>
```
mana shunday yozilgan html elementlari bo'lsa biz
```css
a[target] {
  background-color: yellow;
}
/* bu yerda faqat target atributi bor elementlarga ta'sir qiladi */
```
Selektor `[attribute="value"]`belgilangan atribut va qiymatga ega elementlarni tanlash uchun ishlatiladi.
```html
<a href="https://www.kun.uz">www.kun.uz</a>
<a href="http://www.daryo.uz" target="_blank">daryo.uz</a>
<a href="http://www.wikipedia.org" target="_top">wikipedia.org</a>
```
```css
a[target="_blank"] {
  background-color: yellow;
}
/* bu yerda faqat _blanklargagina ta'sir qiladi */
```

Selektor `[attribute~="value"]` ma'lum bir so'zni o'z ichiga olgan atribut qiymatiga ega elementlarni tanlash uchun ishlatiladi.

```html
<h1 src="klematis.jpg" title="start number">Salom 21</h1>
<h1 src="img_flwr.gif" title="number">Salom 21</h1>
<h1 src="img_tree.gif" title="start">Salom</h1>
```
```css
[title~="number"] {
  border: 1px solid red;
}
```
Selektor `[attribute|="value"]` ko'rsatilgan atributga ega elementlarni tanlash uchun ishlatiladi, ularning qiymati aniq belgilangan qiymat yoki belgilangan qiymatdan keyin chiziqcha `(-)` bo'lishi mumkin.

```html
<h1 class="top-header">Welcome</h1>
<p class="top-text">Hello world!</p>
<p class="topcontent">Hello</p>
```
```css
[class|="top"] {
  background: red;
}
/* top degan classni topib shunga xususiyat beryabdi */
```
Selektor `[attribute^="value"]` ko'rsatilgan atributga ega bo'lgan, qiymati belgilangan qiymatdan boshlanadigan elementlarni tanlash uchun ishlatiladi.
```html
<h1 class="top-header">Welcome</h1>
<p class="top-text">Hello world!</p>
<p class="topcontent">Hello</p>
```
```css
[class^="top"] {
  background: red;
}
/* top degan so'z boshda ishlatilgan bo'lsa shularga ishlatiladi */
```
Selektor `[attribute$="value"]` atribut qiymati belgilangan qiymat bilan tugaydigan elementlarni tanlash uchun ishlatiladi.
```html
<h1 class="header_end">Welcome</h1>
<p class="top-end">Hello world!</p>
<p class="topend">Hello</p>
```
```css
[class$="end"] {
  background: red;
}
/* bu orqali qaysi so'z bilan tugashiga qarab o'zgartirishimiz kerak */
```

Selektor `[attribute*="value"]` atribut qiymati ma'lum qiymatga ega bo'lgan elementlarni tanlash uchun ishlatiladi.
```html
<h1 class="header_end">Welcome</h1>
<p class="top-end">Hello world!</p>
<p class="top">Hello</p>
```
```css
[class*="en"] {
  background: red;
}
```


## CSS 2D Transforms
`transform` -  elementlarni siljitish, aylantirish, masshtablash va qiyshayish imkonini beradi.

CSS 2D transform usullaridan foydalanishingiz mumkin:

- translate()
- rotate()
- scaleX()
- scaleY()
- scale()
- skewX()
- skewY()
- skew()
- matrix()

`rotate` - elementimizni soat strelkasi yoki unga teskari bo'lgan yo'nalishda burish(aylantirish) uchun ishlatiladi. Musbat qiymat soat strelkasi bo'yicha, mannfiy esa teskari yo'nalishda buradi
```html
<div class="box">rotate</div>
```
```css
.box{
  tansform: rotate(40deg);
}
```
<img src="/images/rotate.jpg">

`scale` - elementimizni o'lchovini oshirish yoki kamaytirish uchun ishlatiladi.(0,5 yoki 1,5)
```html
<div class="box">scale</div>
```
```css
.box{
  tansform: scaleY(1,5);
}
```
<img src="/images/scale.jpg">

`skew` - elementimizni ma'lum bir darajaga (degree)ga og'dirish uchun ishlatiladi. Birinchi qiymat `x` bo'yicha ikkinchi qiymat `y` bo'yicha yoziladi
```html
<div class="box">skew</div>
```
```css
.box{
  tansform: skew(20deg, 30deg);
}
```
<img src="/images/skew.jpg">

`translate` - elementimizni hozirgi joyidan siljitish(surish) uchun ishlatiladi.Musbat qiymay o'ng va pastga qarab manfiy esa chap va yuqoriga qarab siljitish uchun ishlatiladi.
`translate`ning yana `translateX()` va `translateY()` ko'rinishlari ham mavjud

```html
<div class="box">translate</div>
```
```css
.box{
  tansform: tranlate(20px, 30px);
}
```
<img src="/images/translate.jpg">

`matrix()` - barcha 2D transformatsiya usullarini birlashtiradi.
`Matrix()` usuli matematik funktsiyalarni o'z ichiga olgan oltita parametrni oladi, bu sizga elementlarni aylantirish, masshtablash, ko'chirish va burish imkonini beradi.
:::warning Matrixning juda muhim qismi:
Parametrlar quyidagicha: matritsa(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
:::
```css
div {
  transform: matrix(1, -0.3, 0, 1, 0, 0);
}
```
## CSS Transitions
Bu bo'limda quyidagi xususiyatlarni bilib olasiz:
- transition
- transition-delay
- transition-duration
- transition-property
- transition-timing-function

`transition-delay` - o'tish effekti uchun kechikishni (soniyalarda) belgilaydi.
```css
div {
  transition-delay: 1s;
}
```
`transition-duration` - o'tish effektini bajarish uchun necha soniya (s) yoki millisekund (ms) kerakligini belgilaydi.

`transition-timing-function` - o'tish effektining turini belgilash uchun ishlatiladi:

- `esae` - o'tish effektini sekin boshlash, keyin tez, keyin sekin tugashini belgilaydi (bu standart)
- `linear` - boshidan oxirigacha bir xil tezlikda o'tish effektini belgilaydi
- `ease-in` - sekin boshlash bilan o'tish effektini belgilaydi
- `ease-out` - sekin tugaydigan o'tish effektini belgilaydi
- `ease-in-out` - sekin boshlanishi va tugashi bilan o'tish effektini belgilaydi
- `cubic-bezier(n,n,n,n)` - kub-bezier funktsiyasida o'z qiymatlaringizni aniqlash imkonini beradi
```css
div {
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
}
```
## CSS Animations
`CSS Animations` - CSS HTML elementlarini JavaScript ishlatmasdan animatsiya qilish imkonini beradi!
Animatsiya elementni asta-sekin bir uslubdan boshqasiga o'zgartirish imkonini beradi.
Siz xohlagancha ko'p CSS xususiyatlarini o'zingiz xohlagancha o'zgartirishingiz mumkin.
CSS animatsiyasidan foydalanish uchun avval animatsiya uchun ba'zi kalit xususiyatlarni belgilashingiz kerak.
Asosiy xususiyatlar muayyan vaqtlarda element qanday uslublarga ega bo'lishini belgilaydi.

