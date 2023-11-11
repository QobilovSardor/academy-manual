## CSS Box model
Margin va Padding bir biriga juda o'xshash ularni joylashishini esa mana bu rasmda to'liqroq ko'rishinggiz mumkin:
<img src="/images/box_model.png">
Turli qismlarni tushuntirish:
1. Content - matn va tasvirlar paydo bo'ladigan qutining mazmuni
2. Padding - kontent atrofidagi maydon hisoblanadi
3. Border - Content va paddingni aylanib o'tadigan chegara
4. Margin - chegaradan tashqaridagi maydon hisoblanadi.

## CSS Outline
Outline - element chegarasidan tashqarisida chizilgan chiziq
Outline borderdan keyin chiziq tushurib beradi

Outline quyidagi xususiyatlarga ega:
1. `outline-style`
2. `outline-color`
3. `outline-width`
4. `outline-offset`
5. `outline`

`outline-style` xususiyatlari:
1. `dotted`- nuqtali chegara belgilaydi
2. `dashed`- Chiziqli chegara belgilaydi
3. `solid`- to'liq chegara belgilaydi
4. `double`- Ikki tomonlama chegara belgilaydi
5. `groove`- 3D chegara belgilaydi
6. `ridge`- 3D chiziqli chegara belgilaydi
7. `inset`- 3D inset chegarani belgilaydi
8. `outset`- 3D boshlang'ich chegarani belgilaydi
9. `none`- Hech qanday chegarani belgilamaydi
10. `hidden`- Yashirin chegarani belgilaydi

```css
p.dotted {outline-style: dotted;}
p.dashed {outline-style: dashed;}
p.solid {outline-style: solid;}
p.double {outline-style: double;}
p.groove {outline-style: groove;}
p.ridge {outline-style: ridge;}
p.inset {outline-style: inset;}
p.outset {outline-style: outset;}
```
`outline-width` kengligini belgilaydi va quyidagi qiymatlardan biriga ega bo'lishi mumkin:

1. yupqa (odatda 1px)
2. o'rtacha (odatda 3px)
3. qalin (odatda 5px)
4. Muayyan o'lcham (px, pt, sm, em va boshqalarda)

`outline-color` chegara rangini o'rnatish uchun ishlatiladi.

1. nom - "qizil" kabi rang nomini belgilang
2. HEX - "#ff0000" kabi olti burchakli qiymatni belgilang
3. RGB - RGB qiymatini belgilang, masalan, "rgb (255,0,0)"
4. HSL - "hsl(0, 100%, 50%)" kabi HSL qiymatini belgilang
5. invert - rangni o'zgartirishni amalga oshiradi (rang fonidan qat'iy nazar konturning ko'rinishini ta'minlaydi)

`outline-offset` chegara va elementning cheti/chegarasi o'rtasida bo'sh joy qo'shadi. Element va uning chegaradagi orasidagi bo'shliq qilib beradi.

```css
p{
    outline-offset: 15px;
}
```

## CSS Text
CSSda matnni formatlash uchun juda ko'p xususiyatlarga ega.<br>
`text-align` - matnni gorizontal tartibda to'g'irlash uchun ishlatiladi
```css
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
/* Matnni ikki chetga bir xil teng taqsimlab beradi */
h3{
     text-align: justify;
}
```
`text-align-last` matnni oxirgi qatorini joylashishini belgilab beradi
```css
p.a {
  text-align-last: right;
}

p.b {
  text-align-last: center;
}

p.c {
  text-align-last: justify;
}
```
`direction` va xususiyatlaridan `unicode-bidi` elementning matn yoʻnalishini oʻzgartirish uchun foydalanish mumkin:
```css
p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```
`vertical-align` elementning vertikal joylashini belgilab beradi.
```css
/* Bu kichik rasmni matnni markaziga olib keladi */
img.a {
  vertical-align: baseline;
}
/* Bu rasmni matnni teparog'iga joylashtirib beradi */
img.b {
  vertical-align: text-top;
}
/* Bu rasmni matnni pastgi tomoniga joylashtirib beradi */
img.c {
  vertical-align: text-bottom;
}
/* Bu imgni matnni indexsiga joylashtirib beradi */
img.d {
  vertical-align: sub;
}
/* Bu imgni matnni kvadratiga chiqarib beradi */
img.e {
  vertical-align: super;
}
```

`text-decaration-line` matnga bezak chizig'ini berish uchun ishlatiladi
```css
h1 {
  text-decoration-line: overline;
}

h2 {
  text-decoration-line: line-through;
}

h3 {
  text-decoration-line: underline;
}

p {
  text-decoration-line: overline underline;
}
```

:::warning Eslatma:
havola bo'lmagan matnning tagiga chizish tavsiya etilmaydi, chunki bu ko'pincha o'quvchini chalkashtirib yuboradi.
:::


`text-decoration-color` bezak chizig'ining rangini o'rnatish uchun ishlatiladi.

```css
h1 {
  text-decoration-line: overline;
  text-decoration-color: red;
}

h2 {
  text-decoration-line: line-through;
  text-decoration-color: blue;
}

h3 {
  text-decoration-line: underline;
  text-decoration-color: green;
}

p {
  text-decoration-line: overline underline;
  text-decoration-color: purple;
}
```

`text-decoration-thickness` bezak chizig'ining qalinligini belgilash uchun ishlatiladi.

```css
h1 {
  text-decoration-line: underline;
  text-decoration-thickness: auto;
}

h2 {
  text-decoration-line: underline;
  text-decoration-thickness: 5px;
}

h3 {
  text-decoration-line: underline;
  text-decoration-thickness: 25%;
}

p {
  text-decoration-line: underline;
  text-decoration-color: red;
  text-decoration-style: double;
  text-decoration-thickness: 5px;
}
```

## CSS Text Transformation

`text-transform` matndagi katta va kichik harflarni belgilash uchun ishlatiladi.

```css
/* Matndagi harflarni katta harf qilib beradi */
p.uppercase {
  text-transform: uppercase;
}
/* Matndagi hamma harflarni kichik harf qilib beradi */
p.lowercase {
  text-transform: lowercase;
}
/* Matndagi hamma harflarni kichik harf qilib beradi */
p.capitalize {
  text-transform: capitalize;
}
```

## CSS Text Spacing

`text-indent` matnning birinchi qatoridan joy ochib beradi
```css
p {
  text-indent: 50px;
}
```
`letter-spacing` matndagi harflar belgilar orasidagi bo'shliqni belgilash uchun ishlatiladi.
```css
h1 {
  letter-spacing: 5px;
}

h2 {
  letter-spacing: -2px;
}
```
`line-height` qatorlar orasidagi bo'shliqni belgilash uchun ishlatiladi:
```css
p.small {
  line-height: 0.8;
}

p.big {
  line-height: 1.8;
}
```

`word-spacing` matndagi so'zlar orasidagi joylarni hosil qilish uchun ishlatiladi.

```css
p.one {
  word-spacing: 10px;
}

p.two {
  word-spacing: -2px;
}
```

`white-space` element ichidagi so'zlarni ekranlarga moslashmasligi
```css
p {
  white-space: nowrap;
}
```

`text-shadow` matnga soya qo'shadi. Eng oddiy foydalanishda siz faqat gorizontal soyani (2px) va vertikal soyani (3px) belgilaysiz

```css
/* agar bunga rang bermoqchi bo'lsanggiz oxirida rang bera olasiz */
/* 5px soyaga effect beradi */
h1 {
  text-shadow: 2px 3px 5px red;
}
```