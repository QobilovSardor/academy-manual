## CSS Display inline va inline-block

`display: inline`dan  `display: inline-block`ning asosiy farqi kenglik va balandlikni o'rnatish imkonini beradi.Bundan tashqari, bilan `display: inline-block`, yuqori va pastki margin/paddinglarni ham ishlatish mumkin, lekin `display: inline`da ular ishlamaydi.

## CSS Combinators
`Combinator` bu selectorlar orasidagi munosabatni tushuntirib ko'rsatadi

::: tip CSS-da to'rt xil kombinator mavjud:

avlod selektori (bo'sh joy)
bola tanlagichi (>)
qo'shni aka-uka selektori (+)
umumiy aka-uka selektori (~)
:::

`Descendant Selector` - selektor belgilangan elementning avlodlari bo'lgan barcha elementlarga ta'sir qiladi

misol uchun `<div>` elementi ichidagi barcha `<p>` elementlarini tanlash uchun:

```css
div p {
  background-color: yellow;
}
```

`Child Selector` - bu selector belgilangan element bolalaring barchasini tanlab beradi
```css
div > p {
  background-color: yellow;
}
```
`Adjacent Sibling Selector` bu elementdan keyingi birinchisiga tasir qilishi uchun ishlatiladi
```css
div + p {
  background-color: yellow;
}
```

## CSS Pseudo-class
:::tip Pseudo-class nima uchun ishlatiladi
1. Foydalanuvchi sichqonchani bosganda
2. tashrif buyurilgan va tashrif buyurilmagan havolalar boshqacha
3. Element diqqat markazida bo'lganda
:::
## CSS Pseudo-element
`Pseudo-element`:
1. Elementning birinchi harfi yoki satriga o'zgartirish kiritish uchun
2. Tarkibni element tarkibidan oldin yoki keyin kiriting

`::first-line` - element matnning birinchi qatoriga maxsus uslub qo'shish uchun ishlatiladi.
Faqat `block` darajadagi elementlarga qo'llanilishi mumkin.<br>

`Pseudo-element` uchun quyidagi xususiyatlar qo'llaniladi:
- font properties
- color properties
- background properties
- word-spacing
- letter-spacing
- text-decoration
- vertical-align
- text-transform
- line-height
- clear

```css
p::first-line {
  color: red;
}
```

`::first-letter` - element matnning birinchi harfiga maxsus o'zgartirish qo'shish uchun ishlatiladi.
element faqat blok darajasidagi elementlarga qo'llanilishi mumkin.

Quyidagi xususiyatlar `::first-letter` elementlar uchun ishlatiladi:
- font properties
- color properties 
- background properties
- margin properties
- padding properties
- border properties
- text-decoration
- vertical-align (only if "float" is "none")
- text-transform
- line-height
- float
- clear

```css
p::first-letter {
  color: red;
}
```

`::before` - element oldidan biror bir xususiyat kiritish uchun ishlatiladi

```css
h1::before {
  content: url(smiley.gif);
}
```

`::after` - elementdan keyin ba'zi xususiyatlar kiritish uchun ishlatiladi

```css
h1::after {
  content: url(smiley.gif);
}
```

`::marker` - element ro'yxat elementlarining markerlarini tanlaydi.

```css
::marker {
  color: red;
  font-size: 23px;
}
```

`::selection` - element foydalanuvchi tomonidan tanlangan element qismini belgilab beradi
Bunga quyidagi CSS xususiyatlari qo'llanilishi mumkin:
- color
- background
- cursor
- outline.
## CSS Opacity
`opacity` - elementning shaffofligini belgilaydi. `opacity` 0,0 - 1,0 qiymatini olishi mumkin. Qiymat qanchalik past bo'lsa, shunchalik shaffof bo'ladi

```css
img {
  opacity: 0.5;
}
```