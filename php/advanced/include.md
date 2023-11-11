# 📔 PHP Include Files
## PHP Include Files (PHP fayllarni o'z ichiga oladi)

include(yoki ) iborasi requireko'rsatilgan faylda mavjud bo'lgan barcha matn/kod/belgilashni oladi va uni qo'shish iborasidan foydalanadigan faylga ko'chiradi.

Bir xil PHP, HTML yoki matnni veb-saytning bir nechta sahifalariga qo'shmoqchi bo'lsangiz, fayllarni qo'shish juda foydali.

PHP bayonotlarni o'z ichiga oladi va talab qiladi

Bitta PHP faylining mazmunini boshqa PHP fayliga (server uni ishga tushirishdan oldin) kiritish yoki talab iborasi bilan kiritish mumkin.

Qo'shish va talab iboralari bir xil bo'ladi, muvaffaqiyatsizlik hollari bundan mustasno:

- requirehalokatli xato (E_COMPILE_ERROR) hosil qiladi va skriptni to'xtatadi
- includefaqat ogohlantirish beradi (E_WARNING) va skript davom etadi

Shunday qilib, agar siz ijroni davom ettirishni va foydalanuvchilarga natijani ko'rsatishni istasangiz, hatto o'z ichiga fayli yo'q bo'lsa ham, include iborasidan foydalaning. Aks holda, FrameWork, CMS yoki murakkab PHP ilovasi kodlangan bo'lsa, bajarish jarayoniga kalit faylni kiritish uchun har doim talab bayonotidan foydalaning. Bu sizning ilovangiz xavfsizligi va yaxlitligini buzmaslikka yordam beradi, faqat bitta kalit fayl tasodifan etishmayotgan bo'lsa.

Fayllarni kiritish juda ko'p ishlarni tejaydi. Bu shuni anglatadiki, siz barcha veb-sahifalaringiz uchun standart sarlavha, altbilgi yoki menyu faylini yaratishingiz mumkin. Keyin, sarlavhani yangilash kerak bo'lganda, siz faqat sarlavhani o'z ichiga olgan faylni yangilashingiz mumkin.

Sintaksis

```php
include 'filename';

// or

require 'filename';
```

PHP misollarni o'z ichiga oladi

1-misol

Bizda "footer.php" deb nomlangan standart altbilgi fayli bor deb faraz qilaylik, u quyidagicha ko'rinadi:

```php
<?php
echo "<p>Copyright &copy; 1999-" . date("Y") . " W3Schools.com</p>";
?>
```

Altbilgi faylini sahifaga kiritish uchun quyidagi includebayonotdan foydalaning:

```php
<html>
<body>

<h1>Welcome to my home page!</h1>
<p>Some text.</p>
<p>Some more text.</p>
<?php include 'footer.php';?>

</body>
</html>
```

2-misol
Bizda "menu.php" nomli standart menyu fayli bor deb faraz qilaylik:

```php
<?php
echo '<a href="/default.asp">Home</a> -
<a href="/html/default.asp">HTML Tutorial</a> -
<a href="/css/default.asp">CSS Tutorial</a> -
<a href="/js/default.asp">JavaScript Tutorial</a> -
<a href="default.asp">PHP Tutorial</a>';
?>
```

Veb-saytdagi barcha sahifalar ushbu menyu faylidan foydalanishi kerak. Buni qanday qilish mumkin (biz `<div>` elementidan foydalanamiz, shunda menyuni keyinroq CSS bilan osongina uslublash mumkin):

```php
<html>
<body>

<div class="menu">
<?php include 'menu.php';?>
</div>

<h1>Welcome to my home page!</h1>
<p>Some text.</p>
<p>Some more text.</p>

</body>
</html>
```

3-misol
Faraz qilaylik, bizda "vars.php" deb nomlangan fayl bor, ba'zi o'zgaruvchilar aniqlangan:

```php
<?php
$color='red';
$car='BMW';
?>
```

Keyin, agar biz "vars.php" faylini qo'shsak, o'zgaruvchilar chaqiruvchi faylda ishlatilishi mumkin:

```php
<html>
<body>

<h1>Welcome to my home page!</h1>
<?php include 'vars.php';
echo "I have a $color $car.";
?>

</body>
</html>
```

PHP o'z ichiga oladi va talab qiladi

Ushbu requirebayonot faylni PHP kodiga kiritish uchun ham ishlatiladi.

Biroq, kiritish va talab qilish o'rtasida bitta katta farq bor; Agar fayl bayonotga kiritilgan bo'lsa includeva PHP uni topa olmasa, skript ishlashda davom etadi:

```php
<html>
<body>

<h1>Welcome to my home page!</h1>
<?php include 'noFileExists.php';
echo "I have a $color $car.";
?>

</body>
</html>
```

Agar biz xuddi shu misolni requirebayonot yordamida qilsak, echo bayonoti bajarilmaydi, chunki skriptning bajarilishi bayonot requirehalokatli xatoni qaytargandan so'ng tugaydi:

```php
<html>
<body>

<h1>Welcome to my home page!</h1>
<?php require 'noFileExists.php';
echo "I have a $color $car.";
?>

</body>
</html>
```

:::warning Eslatma
requireFayl ilova tomonidan talab qilinganda foydalaning .

Fayl kerak bo'lmaganda foydalaning includeva fayl topilmaganda dastur davom etishi kerak.
:::




















