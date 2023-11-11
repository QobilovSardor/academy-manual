# Sass va Scss bilan tanishamiz
<img src="/images/Sass_logo.png">

:::: code-group
::: code-group-item Scss
```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
:::
::: code-group-item Sass    
```scss
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```
:::
::::
Scss va Sassda yozilgan kodlar CSSga mana shunday compilation bo'ladi:
```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

## SASS ning afzalliklari:

1. O'zgaruvchilar: SASS ishlab chiquvchilarga o'zgaruvchilardan foydalanishga imkon beradi, ular barcha uslublar jadvalida qayta ishlatilishi mumkin bo'lgan qiymatlarni saqlash uchun ishlatilishi mumkin. Bu, ayniqsa, katta va murakkab uslublar jadvallari uchun ko'p vaqt va kuchni tejash imkonini beradi.

2. Funktsiyalar: SASS ishlab chiquvchilarga murakkab hisob-kitoblar va qiymatlar bo'yicha operatsiyalarni bajarish uchun ishlatilishi mumkin bo'lgan funktsiyalardan foydalanish imkonini beradi. Bu katta va murakkab uslublar jadvallarini yozish va saqlashni osonlashtirishi mumkin.

3. Nesting: SASS ishlab chiquvchilarga ko'proq tartiblangan va o'qilishi mumkin bo'lgan uslublar jadvallarini yaratish uchun ishlatilishi mumkin bo'lgan ichki selektorlardan foydalanishga imkon beradi.

4. Oʻrnatilgan funksiyalar va miksinlar: SASS shrift oʻlchami, chekka yoki toʻldirish kabi umumiy vazifalarni bajarish uchun ishlatilishi mumkin boʻlgan bir qator oʻrnatilgan funksiyalar va miksinlarni taqdim etadi.

5. Yaxshiroq tashkil etish: SASS oʻzgaruvchilar, funksiyalar, miksinlar va joylashtirishdan foydalangan holda kodni yaxshiroq tashkil qilish imkonini beradi, bu kodni yanada barqaror qiladi.

6. Qayta foydalanish imkoniyati: o'zgaruvchilar, funktsiyalar va miksinlardan foydalangan holda SASS-da yozilgan kodni qayta ishlatish va saqlash oson.

## SASS ning kamchiliklari:

1. Aniq o'rganish egri chizig'i: SASS o'rganish oson bo'lishi uchun yaratilgan bo'lsa-da, CSS protsessorlariga yangi bo'lgan ishlab chiquvchilar uchun keskin o'rganish egri chizig'iga ega bo'lishi mumkin.

2. Murakkablik: SASS-dan foydalanish juda murakkab bo'lishi mumkin, ayniqsa, dasturga yangi bo'lgan dasturchilar uchun va uning barcha xususiyatlari va imkoniyatlarini o'rganish uchun vaqt kerak bo'lishi mumkin.

3. Qo'shimcha vositalarni talab qiladi: SASS fayllari veb-loyihada foydalanishdan oldin qayta ishlanishi kerak, bu esa SASS kompilyatori kabi qo'shimcha vositalarni talab qiladi. Bu ishlab chiqish jarayoniga qo'shimcha qadam qo'shadi va bu jarayon bilan tanish bo'lmagan ishlab chiquvchilar uchun biroz qiyinchilik tug'dirishi mumkin.

4. Brauzer mosligi: SASS fayllari veb-brauzerlar tomonidan o'qilishi uchun CSS-ga kompilyatsiya qilinishi kerak. Bu ba'zi CSS funksiyalari yoki sintaksisini qo'llab-quvvatlamaydigan eski brauzerlar uchun moslik muammolariga olib kelishi mumkin.

5. Ishlash: SASS fayllari CSS-ga kompilyatsiya qilinishi kerakligi sababli, bu jarayon biroz vaqt talab qilishi va veb-loyihangiz, ayniqsa katta va murakkab uslublar jadvallari ishlashiga ta'sir qilishi mumkin.

6. Barcha matn muharrirlari tomonidan qo'llab-quvvatlanmaydi: Ba'zi matn muharrirlari SASS-ni qo'llab-quvvatlamasligi mumkin, bu ushbu tahrirlovchilardan foydalanadigan ishlab chiquvchilar uchun muammo bo'lishi mumkin.