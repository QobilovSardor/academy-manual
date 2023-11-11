
## HTML comments
`Content` mana shunday yozasiz. Sharhlar bilan siz HTML kodinggizga eslatmalar va bildirishnomalar qo'shib qo'yasiz. Sharhni siz contentni yashirish uchun ham ishlatishinggiz mumkin masalan hozircha kerak bo'lmay turgan content bo'lsa uni sharh qilib qo'ysanggiz bo'ladi. Siz buni `ctrl+/` orqali tezroq amalga oshirasiz.

## HTML links
Havolalar deyarli barcha web sahifalarda mavjud. HTML havolalar giperhavolalardir. Siz havolani bosishinggiz va boshqa hujjatga o'tishinggiz mumkin. Sichqonchani havola ustiga olib borishinggiz bilan sichqoncha o'qi kichik qo'lga aylanadi.
Havola matn bo'lishi shart emas. Havola rasm yoki boshqa HTML elementi bo'lishi mumkin.

::: tip a elementining eng muhim atributi
`href`  atributi u havolaning manzilini ko'rsatadi. Havola matnini bosish belgilangan URL manzilga yuboradi
:::
```html
<a href="https://www.gfca.uz/">GFCA</a>
```


Odatiy bo'lib barcha brauzerlarda havolalar quyidagicha ko'rinadi:
1. Ko'rilmagan havola tagiga chizilgan va ko'k rangda
2. Tashrif buyurilgan havolaning tagiga chizilgan va binafsha rang
3. Faol havolaning tagiga chizilgan va qizil rangda
Boshqa ko'rinishga ega bo'lishi uchun havolalar albatta CSS bilan o'zgartirish kiritilishi mumkin

::: tip a elementining target atributi
`target` hujjatni qayerda ochishni belgilaydi
:::
```html
<a href="https://www.gfca.uz/" target="_blank">GFCA</a>
```

Elektron pochta manziliga havola uchun siz atribut `mailto:` ichida foydalaning
```html
<a href="mailto:global@gmail.com">GFCA</a>
```

Havola sifatida tugma:
HTML tugmasidan havola sifatida foydalanish uchun siz ba'zi JavaScript kodlarini qo'shishingiz kerak.

JavaScript tugmani bosish kabi muayyan hodisalarda nima sodir bo'lishini belgilash imkonini beradi:
```html
<button onclick="document.location='default.asp'>W3school</button>
```

Havola sarlavhasi:
Atribut `title` element haqida qo'shimcha ma'lumotni belgilaydi. Ma'lumot ko'pincha sichqonchani element ustida harakatlantirganda ko'rsatiladi
```html
<a href="https://www.gfca.uz" title="GFCA haqida batafsil">GFCA website</a>
```

## HTML tasvirlar sintaksisi:
HTML `<img>` tegi rasmni web sahifaga joylashtirish uchun ishatiladi
`<img>` tegini ikkita zarur atributiga ega:
1. src - tasvirga yo'lni belgilaydi
2. alt - tasvir uchun matn belgilaydi

```html
<img src="url" alt="this is image"> 
```

HTML tasvir hajmi:
`width` va `height` bu atributlardan foydalanishinggiz mumkin.

:::warning Eslatma:
Har doim tasvirning kengligi va balandligini belgilang. Agar kenglik va balandlik ko'rsatilmagan bo'lsa, tasvir yuklanayotganda veb-sahifa miltillashi mumkin.
:::

Animatsiyali rasmlar:
HTML jonlantirilgan GIFlarga ruxsat beradi.

```html
<img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;">
```

Umumiy tasvir formatlari:
:::details Bu erda barcha brauzerlarda (Chrome, Edge, Firefox, Safari, Opera) qo'llab-quvvatlanadigan eng keng tarqalgan rasm fayl turlari
<img src="/images/imgs.jpg">
:::
## HTML Favicon

Web sahifaga favicon qo'shish uchun uni biz `<link>` tegi orqali `<head>` tegi ichiga qo'yamiz
```html
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
```

:::details Favicon fayl formatini qo'llab-quvvatlash
<img src="/images/favicon.jpg">
:::

## HTML tables
::: tip HTML jadval uchun kerakli tegalar va vazifalari:
1. `<table>` - Butun boshli jadvalimiz shu teg ichiga quriladi
2. `<thead>` - Jadvalni tepa qismi hisoblanadi
3. `<tbody>` - Jadvalni tana qismi
4. `<tfoot>` - Jadvalni pastgi qismi
5. `<tr>` -  Jadvaldagi qatorlarni belgilaydi
6. `<th>` - Jadvaldagi sarlavha katakchalarini belgilaydi
7. `<td>` - Jadvalni katakchasini belgilaydi
8. `<colspan>` - ikki yondagi katakchalarni birlashtirish uchun ishlatiladi
9. `<rowspan>` - tepa pastdagi katakchalarni birlashtirish uchun ishlatiladi
:::
<img src="/images/table.jpg">
<img src="/images/image-5.png" >
