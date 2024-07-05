## CSS ishlatish usullari

1. <b>Inline CSS:</b> HTML teglar ichida <b>style</b> atributida yoziladi.
2. <b>Internal CSS:</b> HTML faylning <b>head</b> qismida <b>style</b> teglar orasida yoziladi.
3. <b>External CSS:</b> Alohida <b>.css</b> faylida yozilib, HTML faylga <link> tegi orqali ulanadi.

Inline CSS:<br>
Inline uslubi bitta element uchun noyob uslubni qo'llash uchun ishlatilishi mumkin.
Inline uslublardan foydalanish uchun tegishli elementga uslub atributini qo'shing. Style atributi har qanday CSS xususiyatini o'z ichiga olishi mumkin.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css</title>
  </head>
  <body>
    <h1 style="color:red;">Salom</h1>
  </body>
</html>
```

Ichki CSS:<br>
Agar bitta HTML sahifasi o'ziga xos uslubga ega bo'lsa, ichki uslublar jadvalidan foydalanish mumkin.
Ichki uslub `<style>` elementi ichida, bosh qismi ichida aniqlanadi.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Salom</h1>
  </body>
</html>
```

Tashqi CSS:<br>
Tashqi uslublar jadvali yordamida siz faqat bitta faylni o'zgartirish orqali butun veb-sayt ko'rinishini o'zgartirishingiz mumkin!
Har bir HTML sahifasi bosh qismidagi `<link>` elementi ichidagi tashqi uslublar jadvali fayliga havolani o'z ichiga olishi kerak.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css</title>
    <link rel="stylesheet" href="css file yo'li" />
  </head>
  <body>
    <h1>Salom</h1>
  </body>
</html>
```

## CSS - sintaksis

CSSda uslub qoidalari <b>(style rules)</b> veb-brauzer tomonidan talqin(интерпретация) qilinadi va htmldagi mos elementlarga qo'llanadi. Har bir uslub qoidasi uch qismdan iborat:

1. <b>Tanlovchi (Selector):</b> Selektor HTML tegi bo'lib, unda uslub qo'llaniladi. Bu <b>h1</b> yoki <b>table</b> va hokazo kabi har qanday teg bo'lishi mumkin.
2. <b>Xususiyat (Property):</b> Property elementning qanday o'zgartirilishini ko'rsatadi, masalan, rang, o'lcham, joylashuv va boshqalar.
3. <b>Qiymat (Value):</b> Value xususiyatning aniq parametrlarini belgilaydi, masalan, qizil rang, 20px o'lcham va hokazo.

```css
selector {
  property: value;
}
```

<img src='https://www.tutorialspoint.com/css/images/syntax.png' />

### Type selektorlar

```css
h1 {
  color: red;
}
```

### Universal selektorlar

Universal selektor har qanday element turining nomiga mos keladi

```css
* {
  color: red;
}
```

### Descendant(avlod) selektor

Aytaylik biz faqat ma'lum bir elementni ichida joylashgan element(child)ga stil bermoqchimiz uning uchun quyidagi shakilda yozamiz

```css
ul li {
  color: red;
}
```

### Class selektorlar

Elementlarning sinf atributini olgan holatda stil berishimiz mumkun

```css
.title {
  color: red;
}
```

Biz bu shakilni yanaham aniqroq qilishimiz mumkun

```css
h1.title {
  color: red;
}
/* Agarda h1 tegida .title classi bo'lsa degan ma'noni bildiradi */
```

Html elementlariga bir nechta class larni qo'lashimiz mumkun quyidagi misolda

```html
<p class="center bold">
  Ushbu paragraf o'rtaga va qalin shakilda bo'lishi uchun classlar yozilgan
</p>
```

### ID selektorlari

Elementlarning id atributiga asoslanib stilarni berishimiz mumkun . Ushbu identifikatorga(id) ega bo'lgan barcha elementlar belgilangan stilga o'tadi.

```css
#id-nomi {
  color: red;
}
```

Biz bu shakilni yanaham aniqroq formatga o'tkazishimiz mumkun

```css
h1#title {
  color: red;
}
/* Agarda h1 tegida #title id bo'lsa degan ma'noni bildiradi */
```

Yuqoridagi usulni descendant selektor shaklida ham ko'rishimiz mumkun

```css
#box h2 {
  color: red;
}
```

### Child selektor

Child selectorlar CSSda faqatgina ma'lum bir element ichidagi to'g'ridan-to'g'ri child(bola) elementlarini stillash uchun ishlatiladi. Bu uslub faqat belgilangan ota elementga tegishli bo'lgan child(bola) elementlariga ta'sir qiladi.

```css
.parent > p {
  color: red;
}
```

### Atribut selektorlari

Stilarni maxsus atributlarga ega HTML elementlariga ham qo'llashingiz mumkin. Quyidagi stil "text" type ega bo'lgan bo'lgan barcha input elementlariga mos keladi.

```css
input[type="text"] {
  color: red;
}
```

Ushbu usulning afzalligi shundaki, `<input type="number" />` elementi ta'sir qilmaydi.

### Guruhlash selektorlari(Grouping Selectors)

Agar xohlasangiz, stilni ko'plab selektorlarga qo'llashingiz mumkin. Quyidagi misolda ko'rsatilganidek, faqat selektorlarni vergul bilan ajrating -

```css
h1, h2, h3 {
  color: red;
}
```

Quyidagi ko'rinishda turli xil identifikatorlarni(id) birlashtira olamiz, shu bilan birgalikda classlarniham

```css
/* id */
#content, #footer, #box {
  color: red;
}
/* class */
.content, .footer, .box {
  color: red;
}
```
