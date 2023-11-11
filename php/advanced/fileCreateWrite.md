# 📔 PHP File Create/Write

## PHP File Create/Write (PHP faylini yaratish/yozish)

PHP fayl yaratish - fopen()

Funktsiya fopen()fayl yaratish uchun ham ishlatiladi. Balki biroz chalkashdir, lekin PHP da fayl fayllarni ochish uchun ishlatiladigan funksiya yordamida yaratiladi.

Agar siz fopen()mavjud bo'lmagan fayldan foydalansangiz, u fayl yozish (w) yoki (a) qo'shish uchun ochilganligini hisobga olib, uni yaratadi.

Quyidagi misol "testfile.txt" nomli yangi faylni yaratadi. Fayl PHP kodi joylashgan katalogda yaratiladi:

```php
$myfile = fopen("testfile.txt", "w")
```

PHP fayl ruxsatnomalari

Agar siz ushbu kodni ishga tushirishda xatolikka yo'l qo'ysangiz, qattiq diskka ma'lumot yozish uchun PHP faylingizga ruxsat berganingizni tekshiring.

PHP faylga yozish - fwrite()
Funktsiya fwrite()faylga yozish uchun ishlatiladi.

ning birinchi parametri fwrite()yoziladigan fayl nomini, ikkinchi parametr esa yoziladigan satrni o'z ichiga oladi.

Quyidagi misolda "newfile.txt" nomli yangi faylga bir nechta nomlar yoziladi:

```php
<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "John Doe\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
```

E'tibor bering, biz "newfile.txt" fayliga ikki marta yozganmiz. Har safar faylga yozganimizda biz $txt satrini jo'natdik, unda birinchi bo'lib "John Doe", ikkinchisida "Jeyn Doe" mavjud. Yozishni tugatganimizdan so'ng biz funktsiyadan foydalanib faylni yopdik fclose().

Agar biz "newfile.txt" faylini ochsak, u quyidagicha ko'rinadi:

```php
John Doe
Jane Doe
```

PHP ustidan yozish

Endi "newfile.txt" ba'zi ma'lumotlarni o'z ichiga oladi, biz yozish uchun mavjud faylni ochganimizda nima sodir bo'lishini ko'rsatishimiz mumkin. Barcha mavjud ma'lumotlar o'chiriladi va biz bo'sh fayldan boshlaymiz.

Quyidagi misolda biz mavjud "newfile.txt" faylimizni ochamiz va unga yangi ma'lumotlarni yozamiz:

```php
<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "Mickey Mouse\n";
fwrite($myfile, $txt);
$txt = "Minnie Mouse\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
```

Agar biz "newfile.txt" faylini ochsak, Jon ham, Jeyn ham yo'q bo'lib ketgan va faqat biz yozgan ma'lumotlar mavjud:

```php
Mickey Mouse
Minnie Mouse
```

PHP matnni qo'shish

Siz "a" rejimidan foydalanib faylga ma'lumotlarni qo'shishingiz mumkin. "A" rejimi fayl oxiriga matn qo'shadi, "w" rejimi esa faylning eski mazmunini bekor qiladi (va o'chiradi).

Quyidagi misolda biz mavjud "newfile.txt" faylimizni ochamiz va unga matn qo'shamiz:

```php
<?php
$myfile = fopen("newfile.txt", "a") or die("Unable to open file!");
$txt = "Donald Duck\n";
fwrite($myfile, $txt);
$txt = "Goofy Goof\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
```

Agar biz "newfile.txt" faylini ochsak, faylning oxiriga Donald Duck va Goofy Goof qo'shilganligini ko'ramiz:

```php
Mickey Mouse
Minnie Mouse
Donald Duck
Goofy Goof
```






















