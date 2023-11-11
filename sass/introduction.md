# Sass Introduction
## Sass haqida ma'lumot
::: tip SASS (Syntactically Awesome Style Sheets)
Bu ishlab chiquvchilarga yanada dinamik va kuchli uslublar jadvallarini yozish imkonini beruvchi CSS protsessoridir. SASS katta va murakkab uslublar jadvallarini yozish va saqlashni osonlashtiradigan o'zgaruvchilar, funksiyalar va ichki o'rnatilgan selektorlar kabi xususiyatlarni qo'shish orqali CSS imkoniyatlarini kengaytiradi.
Biz SASSning o'rniga Scssni ishlatamiz uning avzalligi kod yozish tartibi CSS bilan deyarli bir xil
:::

## Sass nima?
- Sass `S` sintaktik jihatdan `A` wesome `S` tyle `s` heet degan ma'noni anglatadi
- Sass - bu CSS-ning kengaytmasi
- Sass - bu CSS-dan oldingi protsessor
- Sass barcha CSS versiyalari bilan to'liq mos keladi
- Sass CSS-ning takrorlanishini kamaytiradi va shuning uchun vaqtni tejaydi
- Sass Hampton Catlin tomonidan ishlab chiqilgan va 2006 yilda Natali Vayzenbaum tomonidan ishlab chiqilgan.
- Sass yuklab olish va foydalanish uchun bepul

## Nima uchun Sassdan foydalanish kerak
Misol uchun projectda ranglar bor 3 xil rang kiritilgan ularni juda ko'p joyda ishlatilgan lekin biz buni SCSS yordamida faqat o'zgaruvchilarga olib ishlatamiz
```css
$primary_1: #a2b9bc;
$primary_2: #b2ad7f;
$primary_3: #878f99;
.main-header {
  background-color: $primary_1;
}
.menu-left {
  background-color: $primary_2;
}
.menu-right {
  background-color: $primary_3;
}
```

## Sass qanday ishlaydi?
Brauzer Sass kodini tushunmaydi. Shuning uchun, Sass kodini standart CSS-ga aylantirish uchun sizga Sass pre-protsessor kerak bo'ladi.

## Sass fayl turi
`.scss`
Sass fayllari ".scss" fayl kengaytmasiga ega.

## Sass sharhlari
Sass standart CSS sharhlarini qo'llab-quvvatlaydi `/* comment */` va qo'shimcha ravishda inline izohlarni qo'llab-quvvatlaydi `// comment`: