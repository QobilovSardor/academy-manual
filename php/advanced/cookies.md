# 📔 PHP Cookies

## PHP Cookies 

Cookie nima?

Cookie ko'pincha foydalanuvchini aniqlash uchun ishlatiladi. Cookie - bu server foydalanuvchi kompyuteriga joylashtirgan kichik fayl. Har safar bir xil kompyuter brauzerli sahifani so'raganda, u cookie-faylni ham yuboradi. PHP yordamida siz ham cookie qiymatlarini yaratishingiz va ham olishingiz mumkin.

PHP yordamida cookie-fayllarni yarating
Funktsiya bilan cookie yaratiladi setcookie().

Sintaksis

```php
setcookie(name, value, expire, path, domain, secure, httponly);
```

Faqat nom parametri talab qilinadi. Boshqa barcha parametrlar ixtiyoriy.

PHP Cookie yaratish/qabul qilish
Quyidagi misol "John Doe" qiymatiga ega "user" nomli cookie faylini yaratadi. Cookie 30 kundan keyin tugaydi (86400 * 30). "/" kuki butun veb-saytda mavjudligini bildiradi (aks holda, o'zingiz yoqtirgan katalogni tanlang).

Keyin biz "foydalanuvchi" cookie-faylining qiymatini olamiz ($_COOKIE global o'zgaruvchisi yordamida). isset()Cookie o'rnatilgan yoki yo'qligini bilish uchun biz funktsiyadan ham foydalanamiz :

```php
<?php
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
  echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
  echo "Cookie '" . $cookie_name . "' is set!<br>";
  echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>
```

:::warning Eslatma
Eslatma: Funktsiyasetcookie()`<html>` tegidan OLD paydo bo'lishi kerak.
:::

Eslatma: Cookie-faylning qiymati avtomatik ravishda cookie-fayl yuborilganda URL kodlanadi va qabul qilinganda avtomatik ravishda dekodlanadi (URL kodlashni oldini olish uchun uning setrawcookie()o‘rniga foydalaning).

Cookie qiymatini o'zgartirish

Cookie-faylni o'zgartirish uchun funktsiyadan foydalanib cookie-faylni o'rnating (qayta) setcookie():

```php
<?php
$cookie_name = "user";
$cookie_value = "Alex Porter";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
  echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
  echo "Cookie '" . $cookie_name . "' is set!<br>";
  echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>
```

Cookie faylini oʻchirish

Cookie faylini oʻchirish uchun setcookie()amal qilish muddati oʻtgan funksiyadan foydalaning:

```php
<?php
// set the expiration date to one hour ago
setcookie("user", "", time() - 3600);
?>
<html>
<body>

<?php
echo "Cookie 'user' is deleted.";
?>

</body>
</html>
```

Cookie-fayllar yoqilganligini tekshiring

Quyidagi misol cookie fayllari yoqilganligini tekshiradigan kichik skript yaratadi. Birinchidan, funksiya bilan test cookie faylini yaratishga harakat qiling setcookie(), keyin $_COOKIE massiv o'zgaruvchisini hisoblang:

```php
<?php
setcookie("test_cookie", "test", time() + 3600, '/');
?>
<html>
<body>

<?php
if(count($_COOKIE) > 0) {
  echo "Cookies are enabled.";
} else {
  echo "Cookies are disabled.";
}
?>

</body>
</html>
```





















