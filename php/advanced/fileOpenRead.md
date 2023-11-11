# 📔 PHP File Open/Read/Close

## PHP File Open/Read/Close (PHP faylini ochish/o'qish/yopish)

PHP faylini ochish - fopen()

Fayllarni ochishning eng yaxshi usuli bu funktsiyadir fopen(). Bu funksiya funksiyadan ko'ra ko'proq imkoniyatlarni beradi readfile().

Dars davomida biz "webdictionary.txt" matn faylidan foydalanamiz:

```php
AJAX = Asynchronous JavaScript and XML
CSS = Cascading Style Sheets
HTML = Hyper Text Markup Language
PHP = PHP Hypertext Preprocessor
SQL = Structured Query Language
SVG = Scalable Vector Graphics
XML = EXtensible Markup Language
```

ning birinchi parametri fopen()ochiladigan fayl nomini o'z ichiga oladi va ikkinchi parametr faylni qaysi rejimda ochish kerakligini belgilaydi. Quyidagi misol fopen() funksiyasi belgilangan faylni ocholmasa, xabar ham hosil qiladi:

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);
?>
```

Maslahat: va fread()funksiyalari fclose()quyida tushuntiriladi.

Fayl quyidagi rejimlardan birida ochilishi mumkin:

<img src="/image_js/php18.png">

PHP o'qish fayli - fread()

Funktsiya fread()ochiq fayldan o'qiydi.

Birinchi parametr fread()o'qish uchun fayl nomini o'z ichiga oladi va ikkinchi parametr o'qish uchun maksimal bayt sonini belgilaydi.

Quyidagi PHP kodi "webdictionary.txt" faylini oxirigacha o'qiydi:

```php
fread($myfile,filesize("webdictionary.txt"));
```

PHP faylni yopish - fclose()

Funktsiya fclose()ochiq faylni yopish uchun ishlatiladi.

:::warning Eslatma
Barcha fayllar bilan ishlashni tugatgandan so'ng ularni yopish yaxshi dasturlash amaliyotidir. Serveringizda ishlaydigan ochiq fayl resurslarni egallashini xohlamaysiz!
:::

fclose()Biz yopmoqchi bo'lgan fayl nomini (yoki fayl nomiga ega bo'lgan o'zgaruvchini) talab qiladi :

```php
<?php
$myfile = fopen("webdictionary.txt", "r");
// some code to be executed....
fclose($myfile);
?>
```

PHP yagona qatorni o'qish - fgets()

Funktsiya fgets()fayldan bitta qatorni o'qish uchun ishlatiladi.

Quyidagi misol "webdictionary.txt" faylining birinchi qatorini chiqaradi:

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);
?>
```

Eslatma: Funktsiyaga qo'ng'iroq qilingandan so'ng fgets(), fayl ko'rsatkichi keyingi qatorga o'tdi.

PHP faylning oxirini tekshirish - feof()
Funktsiya feof()"fayl oxiri" (EOF) ga erishilganligini tekshiradi.

Funksiya feof()noma'lum uzunlikdagi ma'lumotlar orqali aylanish uchun foydalidir.

Quyidagi misolda "webdictionary.txt" fayli fayl oxiriga yetguncha satr satr o'qiydi:

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// Output one line until end-of-file
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);
?>
```

PHP bitta belgini o'qish - fgetc()

Funktsiya fgetc()fayldan bitta belgini o'qish uchun ishlatiladi.

Quyidagi misolda "webdictionary.txt" fayl belgisi fayl oxirigacha o'qiladi:

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// Output one character until end-of-file
while(!feof($myfile)) {
  echo fgetc($myfile);
}
fclose($myfile);
?>
```

Eslatma: Funktsiyaga qo'ng'iroq qilingandan so'ng fgetc(), fayl ko'rsatkichi keyingi belgiga o'tadi.























