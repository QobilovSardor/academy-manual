# Sass @import
Import qilish orqali siz css kodlarni qayta qayta yozishdan voz kechasiz va sizga loyhani tezroq tayyor bo'lishida yordam beradi

## Sass fayllarni import qilish
Xuddi CSS kabi, Sass ham direktivani qo'llab-quvvatlaydi `@import`

Direktiv `@import` bir faylning mazmunini boshqasiga kiritish imkonini beradi.

CSS `@import` direktivasi ishlash muammolari tufayli katta kamchilikka ega; har safar murojat qilganingizda qo'shimcha HTTP so'rovini yaratadi. Biroq, Sass `@import` direktivasi CSS-dagi faylni o'z ichiga oladi; shuning uchun ish vaqtida qo'shimcha HTTP chaqiruvi talab qilinmaydi!
```scss
@import filename;
```

:::warning Sassni import qilishdagi eslatma:
Fayl kengaytmasini belgilashingiz shart emas, Sass avtomatik ravishda .sass yoki .scss faylini nazarda tutayotganingizni taxmin qiladi. CSS fayllarini ham import qilishingiz mumkin. Direktiv @import faylni import qiladi va import qilingan faylda belgilangan har qanday o'zgaruvchilar yoki aralashmalar keyinchalik asosiy faylda ishlatilishi mumkin.
:::