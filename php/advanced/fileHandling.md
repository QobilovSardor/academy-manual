# 📔 PHP File Handling

## PHP File Handling (PHP fayl bilan ishlash)

Fayl bilan ishlash har qanday veb-ilovaning muhim qismidir. Ko'pincha turli vazifalar uchun faylni ochishingiz va qayta ishlashingiz kerak bo'ladi.

PHP fayllarni manipulyatsiya qilish

PHP fayllarni yaratish, o'qish, yuklash va tahrirlash uchun bir nechta funktsiyalarga ega.

:::warning Eslatma 
Fayllarni manipulyatsiya qilishda ehtiyot bo'ling!

Fayllarni manipulyatsiya qilishda siz juda ehtiyot bo'lishingiz kerak.
Agar siz noto'g'ri ish qilsangiz, juda ko'p zarar etkazishingiz mumkin. Umumiy xatolar: noto'g'ri faylni tahrirlash, qattiq diskni axlat ma'lumotlari bilan to'ldirish va fayl mazmunini tasodifan o'chirish.
:::

PHP readfile() funksiyasi
Funktsiya readfile()faylni o'qiydi va uni chiqish buferiga yozadi.

Bizda serverda saqlangan "webdictionary.txt" nomli matn fayli bor, u quyidagicha ko'rinadi:

```php
AJAX = Asynchronous JavaScript and XML
CSS = Cascading Style Sheets
HTML = Hyper Text Markup Language
PHP = PHP Hypertext Preprocessor
SQL = Structured Query Language
SVG = Scalable Vector Graphics
XML = EXtensible Markup Language
```

Faylni o'qish va uni chiqish buferiga yozish uchun PHP kodi quyidagicha (funktsiya readfile()muvaffaqiyatli o'qilgan baytlar sonini qaytaradi):

```php
<?php
echo readfile("webdictionary.txt");
?>
```

readfile()Agar siz faqat faylni ochish va uning mazmunini o'qishni xohlasangiz, funktsiya foydali bo'ladi .

Keyingi boblar sizga fayllar bilan ishlash haqida ko'proq ma'lumot beradi.
























