## CSS Links
CSS yordamida havolalar turli xil uslublarda tuzilishi mumkin.

```css
a {
  color: hotpink;
}
```

:::warning
To'rtta havola holati quyidagilardir:
1. a:link- oddiy, tashrif buyurilmagan havola
2. a:visited- foydalanuvchi tashrif buyurgan havola
3. a:hover- foydalanuvchi ustiga sichqonchani bosganda havola
4. a:active- bosilgan paytdagi havola
:::

```css
a:link {
  color: red;
}

a:visited {
  color: green;
}

a:hover {
  color: hotpink;
}

a:active {
  color: blue;
}
```

`text-decoration` asosan havolalardagi pastki chiziqni olib tashlash uchun ishlatiladi:
```css
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
```

`background-color` xususiyat havolalar uchun fon rangini belgilash uchun ishlatilishi mumkin:
```css
a {
  background-color: yellow;
}
```

## CSS Cursor
`cursor` ni CSS orqali turli xil o'zgartirishlar qilishinggiz kerak
```html
<span style="cursor: auto">auto</span><br>
<span style="cursor: crosshair">crosshair</span><br>
<span style="cursor: default">default</span><br>
<span style="cursor: e-resize">e-resize</span><br>
<span style="cursor: help">help</span><br>
<span style="cursor: move">move</span><br>
<span style="cursor: n-resize">n-resize</span><br>
<span style="cursor: ne-resize">ne-resize</span><br>
<span style="cursor: nw-resize">nw-resize</span><br>
<span style="cursor: pointer">pointer</span><br>
<span style="cursor: progress">progress</span><br>
<span style="cursor: s-resize">s-resize</span><br>
<span style="cursor: se-resize">se-resize</span><br>
<span style="cursor: sw-resize">sw-resize</span><br>
<span style="cursor: text">text</span><br>
<span style="cursor: w-resize">w-resize</span><br>
<span style="cursor: wait">wait</span>
```
## CSS Lists
`list-style-type` ro'yxat elementining oldidagi belgilar

```css
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
```
`list-style-image` rasmni ro'yxat elementi belgisi sifatida belgilaydi:
```css
ul {
  list-style-image: url('sqpurple.gif');
}
```
`list-style-position` ro'yxat elementi belgilarini joylashtirish mumkin.
```css
ul {
  list-style-position: outside;
}
/* oldidagi nuqtalar matnni boshlanish qismiga qo'shib qo'yadi */
ul {
  list-style-position: inside;
}
```

## CSS Tables
`border-collapse` jadval chegaralarini bitta chiziq qilib beradi
```css
table {
  border-collapse: collapse;
}
```
Elementlarining contenti markazga tekislash uchun `text-align: center;` foydalaning
Elementlarning contentini vertikal tarzda tepaga o'rtaga pastga joylashtirish uchun `vertical-align: center;`

## CSS Display

`display` tartibni boshqarish uchun eng muhim CSS xususiyatdir
Har bir `HTML` elementi qaysi element turiga qarab standart ko'rsatish qiymatiga ega. Aksariyat elementlar uchun standart displey qiymati `block` yoki `inline`.
Biz bu haqida HTML darslarimizda tushunchaga ega bo'lgandik
::: tip Display xususiyatlari:
1. `visibility:hidden;` - Bu bizga elementni ko'rinishini yashirib beradi lekin joylashgan joyini boshqa elementga bo'shatib qo'ymaydi
2. `display: none;` - Bu bizga elementni o'zini ham joylashgan joyini ham yashirish uchun ishlatiladi
:::
