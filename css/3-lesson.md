## CSS Fonts

Web-saytingiz uchun to'g'ri shriftni tanlash juda muhim! 
1. To'gri shriftni tanlash foydalanuvchining veb-saytni qanday his qilishinggizga katta ta'sir qiladi
2. To'g'ri shrift sizning brendingiz uchun kuchli identifikatsiyani yaratishi mumkin.
3. O'qish oson bo'lgan shriftdan foydalanish muhimdir
4. Shrift matningizga qiymat qo'shadi
5. Shrift uchun to'g'ri rang va matn hajmini tanlash ham muhimdir.

::: tip CSS-da beshta umumiy shrift oilasi mavjud:

1. `Serif` shriftlari har bir harfning chetida kichik chiziqqa ega. Ular rasmiyatchilik va nafislik tuyg'usini yaratadilar.
2. `Sans-serif` shriftlari toza chiziqlarga ega (kichik chiziqlar biriktirilmagan). Ular zamonaviy va minimalistik ko'rinish yaratadilar.
3. `Monospace` shriftlari - bu erda barcha harflar bir xil sobit kenglikka ega. Ular mexanik ko'rinish hosil qiladi. 
4. `Cursive` shriftlar inson qo'l yozuviga taqlid qiladi.
5. `Fantasy` shriftlari dekorativ/o'ynoqi shriftlardir.
:::
Serif va Sans-serif shriftlari o'rtasidagi farq:
<img src="/images/fonts.jpg">

:::warning Eslatma:
Kompyuter ekranlarida sans-serif shriftlari serif shriftlarga qaraganda osonroq o'qiladi.
Agar shrift nomi bir nechta so'zlardan iborat bo'lsa, u tirnoq ichida bo'lishi kerak, masalan: "Times New Roman".
:::

`font-family` CSS-da biz matn shriftini belgilash uchun xususiyatdan foydalanamiz
:::warning Maslahat:
Siz bir nechta shrifdan foydalansanggiz eng oxiriga xavfsiz shrift yozib qo'ying bundan maqsad birinchi yoki ikkinchi shriftni olmasa oxiridagi xavfsiz shriftdan foydalanadi
```css
.p2 {
  font-family: Arial, Helvetica, sans-serif;
}
```
:::

Veb-xavfsiz shriftlar:<br>
Veb-xavfsiz shriftlar barcha brauzerlar va qurilmalarda universal tarzda o'rnatiladigan shriftlardir.
Biroq, 100% to'liq veb-xavfsiz shriftlar mavjud emas. Har doim shrift topilmasligi yoki to'g'ri o'rnatilmaganligi ehtimoli bor.
Shuning uchun har doim zaxira shriftlardan foydalanish juda muhimdir.
Veb-saytingizni nashr etishdan oldin har doim shriftlaringiz turli brauzer va qurilmalarda qanday ko'rinishini tekshiring va har doim zaxira shriftlardan foydalaning !

::: tip HTML va CSS uchun eng yaxshi veb-xavfsiz shriftlar
1. Arial (sans-serif)
2. Verdana (sans-serif)
3. Tahoma (sans-serif)
4. Trebuchet MS (sans-serif)
5. Times New Roman (serif)
6. Georgia (serif)
7. Garamond (serif)
8. Courier New (monospace)
9. Brush Script MT (cursive)
:::

## CSS font-style

`font-style` xususiyat asosan kursiv matnni belgilash uchun ishlatiladi.
:::warning Bu xususiyat uchta qiymatga ega:

1. `normal` - matn odatdagidek ko'rsatiladi
2. `kursiv` - matn kursiv bilan ko'rsatiladi
3. `oblique` - matn "egilgan" (qiyshiq kursivga juda o'xshaydi, lekin kamroq qo'llab-quvvatlanadi)
:::

```css
p.normal {
  font-style: normal;
}

p.italic {
  font-style: italic;
}

p.oblique {
  font-style: oblique;
}
```

## CSS font-weight

`font-weight` shriftning qalinligini belgilaydi:
```css
p.normal {
  font-weight: normal;
}

p.light {
  font-weight: lighter;
}

p.thick {
  font-weight: bold;
}

p.thicker {
  font-weight: 900;
}
```
`font-variant` matnni kichik harfda ko'rsatish yoki ko'rsatmaslik kerakligini belgilaydi.
Kichik boshli shriftda barcha kichik harflar katta harflarga aylantiriladi. Biroq, aylantirilgan katta harflar matndagi asl katta harflarga qaraganda kichikroq shrift o'lchamida ko'rinadi.
```css
p.normal {
  font-variant: normal;
}

p.small {
  font-variant: small-caps;
}
```

`font-size` matnni hajmini belgilaydi. Matn hajmini boshqarish veb-dizaynda muhim ahamiyatga ega.
Biroq, paragraflarni sarlavhalarga o'xshatish yoki sarlavhalarni paragraflarga o'xshatish uchun shrift o'lchamini o'zgartirishdan foydalanmaslik kerak.
:::warning em o'lchov birligi:
Brauzerlarda standart matn hajmi 16px. Shunday qilib, 1em ning standart o'lchami 16px.
O'lchamni pikseldan emgacha quyidagi formula yordamida hisoblash mumkin: piksel /16= em
Matn o'lchami `vw` birlik bilan o'rnatilishi mumkin, bu "ko'rish maydoni kengligi" degan ma'noni anglatadi.
:::
```css
h1 {
  font-size: 2.5em; /* 40px/16=2.5em */
}

h2 {
  font-size: 1.875em; /* 30px/16=1.875em */
}

p {
  font-size: 0.875em; /* 14px/16=0.875em */
}
```
## CSS Google Shrift

Agar siz HTML-da standart shriftlardan foydalanishni xohlamasangiz, Google Shriftlaridan foydalanishingiz mumkin.
Google Shriftlardan foydalanish bepul va 1000 dan ortiq shriftlardan tanlash mumkin. https://fonts.google.com/

```html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
  <style>
  body {
    font-family: "Sofia", sans-serif;
  }
  </style>
</head>
```

## CSS Icons
HTML sahifangizga belgi qo'shishning eng oddiy usuli `Font Awesome` kabi icon kutubxonasini bog'lash kerak
Font Awesome icons foydalanish uchun `fontawesome.com` saytiga o‘ting, tizimga kiring va HTML sahifangiz bo‘limiga `<head>` qo‘shish uchun kodni oling :

```htmlx
<!DOCTYPE html>
<html>
  <head>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  </head>
  <body>

  <i class="fas fa-cloud"></i>
  <i class="fas fa-heart"></i>
  <i class="fas fa-car"></i>
  <i class="fas fa-file"></i>
  <i class="fas fa-bars"></i>

  </body>
</html>
```

