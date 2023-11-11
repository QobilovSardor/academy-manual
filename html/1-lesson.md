## HTML headings
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```
::: details HTML sarlavhalarining natijasi:
<img src="/images/heading.jpg">
:::

::: warning Eslatma:
Foydalanuvchilar ko'pincha sahifani sarlavhalari bo'yicha ko'rib chiqishadi. Hujjat tuzilishini ko'rsatish uchun sarlavhalardan foydalanish muhimdir.

`<h1>`Sarlavhalar asosiy sarlavhalar uchun ishlatilishi kerak, undan keyin `<h2>`sarlavhalar, keyin kamroq muhim `<h3>`va hokazo.

HTML sarlavhalaridan faqat sarlavhalar uchun foydalaning. Matnni KATTA yoki qalin qilish uchun sarlavhalardan foydalanmang .
:::

## HTML paragraphs
HTML `<p>`elementi paragrafni belgilaydi.

Paragraf har doim yangi satrdan boshlanadi va brauzerlar avtomatik ravishda paragrafdan oldin va keyin biroz bo'sh joy (chekka) qo'shadi.

:::warning Eslatma:
HTML bilan siz HTML kodingizga qo'shimcha bo'shliqlar yoki qo'shimcha qatorlar qo'shish orqali displeyni o'zgartira olmaysiz.

Sahifa ko'rsatilganda brauzer avtomatik ravishda qo'shimcha bo'shliqlar va chiziqlarni olib tashlaydi.
:::
```html
<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>
<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>
```
::: details Paragraf kodi natijasi
<img src="/images/paragraf.jpg">
:::

## HTML gorizantal qoidalari(hr)
Teg `<hr>` HTML sahifasida tematik tanaffusni belgilaydi va ko'pincha gorizontal qoida sifatida ko'rsatiladi.

Element `<hr>` HTML sahifasida tarkibni ajratish (yoki o'zgartirishni aniqlash) uchun ishlatiladi.
```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
```

:::details hr tegi natijasi
<img src="/images/gorizantal.jpg">
:::

## HTML qatorlar uzilishi (br)
HTML `<br>` elementi qator uzilishini belgilaydi.

`<br>` Agar siz yangi paragrafni boshlamasdan satrlarni (yangi qator) olishni istasangiz, foydalaning.

```html
<p>This is<br>a paragraph<br>with line breaks.</p>
```

:::details br tegini natijasi
<img src="/images/br.jpg">
:::

## HTML pre elementi
HTML `<pre>` elementi oldindan formatlangan matnni belgilaydi.

`<pre>` elementi ichidagi matn qanday taribda yozilgan bo'lsa huddi shunday natija chiqadi.<br>
`<pre>` elementi bo'shliqlarni ham, qatorlarni ham saqlaydi.

```html
<pre>
Men sizni o'ylayman shomu saharda,

Ona, sog'insam ham bora olmayman,

Tunlari charag'on shunday shaharda,

Hech kimga ko'nglimni yora olmayman.
</pre>    
```

:::details pre tegi natija
<img src="/images/pre.jpg">
:::

## HTML matn formatlash elementlari

HTML maxsus ma'noga ega bo'lgan matnni aniqlash uchun bir nechta elementlarni o'z ichiga oladi.
::: tip Formatlash elementlari
1. `<b>`- Qo'shimcha ahamiyatga ega bo'lmagan qalin matnni belgilaydi
2. `<strong>`- Katta ahamiyatga ega bo'lgan matnni belgilaydi. Content qalin qilib ko'rsatiladi
3. `<i>`- Element ichidagi content kursiv bilan ko'rsatiladi. Ko'pincha texnik atamalar,boshqa tildagi iboralar, fikrlar va boshqalar uchun ishlatiladi
4. `<em>`- Teg ichidagi content kursiv yoziladi.
5. `<mark>`- Element belgilanishi va takidlanishi kerak bo'lgan contentni belgilaydi
6. `<header>`- Elementi kichikroq matnni belgilaydi
7. `<del>`- Ichidagi contentni ustiga chiziq tushurib beradi(`<s></s>` va `<strike></strike>`)
8. `<ins>`- Hujjatga kiritilgan matnni belgilaydi va tagiga chizib beradi
9. `<sub>`- Indexlar yozish uchun ishlatiladi. Bu teg ichidagi content kichikroq va pastroqda joylashadi
10. `<sup>`- Asosan biror sonni darajasini yozishda foydalaniladi. Teg ichidagi content kichikroq va yuqoriroqda joylashadi
11. `<big>` - Odatda yozuvga nisbatdan kattaroq yozish uchun ishlatiladi
:::

<!-- har biriga batafsil yozib chiqish kerak -->

## HTML quotation elementlari

::: tip Iqtibos elementlari
1. `<blockquote>`- Boshqa manbadan keltirilgan bo'limni belgilaydi. Brauzerlar odatda `<blockquote>` elementini cheklaydi
2. `<q>`- qo'shtirnoq ichiga olib beradi
3. `<abbr>`- Element sizga ba'zi bir qisqartirib ishlatiladigan so'zlarni to'liqligicha yozsanggiz o'zi qisqartirib beradi misol uchun ("World Wide Web": WWW)
4. `<address>`- Hujjat yoki maqola egasi uchun aloqa ma'lumotlarini belgilaydi. Kursiv ko'rinishda bo'ladi
5. `<cide>`- Teg ijodiy ish (masalan: kitob, she'r, qo'shiq, kino, rasm, haykal va boshqalar) nomini belgilaydi."Shaxsning ismi yoki Asar nomi emas"
6. `<bdo>`- ichidagi contentni teskari qilib beradi
7. `<del>`- Ichidagi contentni ustiga chiziq tushurib beradi(`<s></s>` va `<strike></strike>`)
8. `<ins>`- Hujjatga kiritilgan matnni belgilaydi va tagiga chizib beradi
9. `<sub>`- Indexlar yozish uchun ishlatiladi. Bu teg ichidagi content kichikroq va pastroqda joylashadi
10. `<sup>`- Asosan biror sonni darajasini yozishda foydalaniladi. Teg ichidagi content kichikroq va yuqoriroqda joylashadi
11. `<big>` - Odatda yozuvga nisbatdan kattaroq yozish uchun ishlatiladi
:::
<!-- har biriga batafsil yozib chiqish kerak -->
