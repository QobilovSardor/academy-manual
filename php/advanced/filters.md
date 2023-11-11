# 📔 PHP Filters

## PHP Filters (PHP filtrlari)

Ma'lumotlarni tekshirish = Ma'lumotlar to'g'ri shaklda yoki yo'qligini aniqlang.

Ma'lumotlarni tozalash = Ma'lumotlardan noqonuniy belgilarni olib tashlang.

PHP filtri kengaytmasi

PHP filtrlari tashqi kirishni tekshirish va tozalash uchun ishlatiladi.

PHP filtri kengaytmasi foydalanuvchi kiritgan ma'lumotlarni tekshirish uchun zarur bo'lgan ko'plab funktsiyalarga ega va ma'lumotlarni tekshirishni oson va tezroq qilish uchun mo'ljallangan.

Funktsiyadan filter_list()PHP filtri kengaytmasi nimani taklif qilishini ro'yxatga olish uchun foydalanish mumkin:

```php
<table>
  <tr>
    <td>Filter Name</td>
    <td>Filter ID</td>
  </tr>
  <?php
  foreach (filter_list() as $id =>$filter) {
    echo '<tr><td>' . $filter . '</td><td>' . filter_id($filter) . '</td></tr>';
  }
  ?>
</table>
```

Nima uchun filtrlardan foydalanish kerak?

Ko'pgina veb-ilovalar tashqi ma'lumotlarni oladi. Tashqi kirish/ma'lumotlar quyidagilar bo'lishi mumkin:

- Shakldan foydalanuvchi kiritishi
- Cookie-fayllar
- Veb-xizmat ma'lumotlari
- Server o'zgaruvchilari
- Ma'lumotlar bazasi so'rovi natijalari

:::warning Eslatma
Siz har doim tashqi ma'lumotlarni tekshirishingiz kerak!
Noto'g'ri yuborilgan ma'lumotlar xavfsizlik muammolariga olib kelishi va veb-sahifangizni buzishi mumkin!
PHP filtrlaridan foydalanib, ilovangiz to'g'ri kiritilgan ma'lumotlarni olishiga ishonch hosil qilishingiz mumkin!
:::

PHP filter_var() funktsiyasi

Funktsiya filter_var()ma'lumotlarni ham tekshiradi, ham tozalaydi.

Funktsiya filter_var()belgilangan filtr bilan bitta o'zgaruvchini filtrlaydi. Buning uchun ikkita ma'lumot kerak bo'ladi:

- Siz tekshirmoqchi bo'lgan o'zgaruvchi
- Foydalanish uchun chek turi

Stringni tozalash

Quyidagi misolda filter_var()barcha HTML teglarini satrdan olib tashlash funksiyasidan foydalaniladi:

```php
<?php
$str = "<h1>Hello World!</h1>";
$newstr = filter_var($str, FILTER_SANITIZE_STRING);
echo $newstr;
?>
```

Butun sonni tasdiqlash

Quyidagi misolda filter_var()$int oʻzgaruvchisi butun son ekanligini tekshirish funksiyasidan foydalaniladi. Agar $int butun son bo'lsa, quyidagi kodning chiqishi quyidagicha bo'ladi: "Integer to'g'ri". Agar $int butun son bo'lmasa, natija quyidagicha bo'ladi: "Integer to'g'ri emas":

```php
<?php
$int = 100;

if (!filter_var($int, FILTER_VALIDATE_INT) === false) {
  echo("Integer is valid");
} else {
  echo("Integer is not valid");
}
?>
```

Maslahat: filter_var() va 0 bilan muammo

Yuqoridagi misolda, agar $int 0 ga o'rnatilgan bo'lsa, yuqoridagi funksiya "Integer is not valid" ni qaytaradi. Ushbu muammoni hal qilish uchun quyidagi koddan foydalaning:

```php
<?php
$int = 0;

if (filter_var($int, FILTER_VALIDATE_INT) === 0 || !filter_var($int, FILTER_VALIDATE_INT) === false) {
  echo("Integer is valid");
} else {
  echo("Integer is not valid");
}
?>
```

IP-manzilni tasdiqlang

Quyidagi misolda filter_var()$ip oʻzgaruvchisi toʻgʻri IP manzil yoki yoʻqligini tekshirish funksiyasidan foydalaniladi:

```php 
<?php
$ip = "127.0.0.1";

if (!filter_var($ip, FILTER_VALIDATE_IP) === false) {
  echo("$ip is a valid IP address");
} else {
  echo("$ip is not a valid IP address");
}
?>
```

Elektron pochta manzilini tozalash va tasdiqlash

Quyidagi misolda filter_var()$email oʻzgaruvchisidan avval barcha noqonuniy belgilarni olib tashlash funksiyasidan foydalaniladi, soʻngra uning toʻgʻri elektron pochta manzili ekanligini tekshiring:

```php
<?php
$email = "john.doe@example.com";

// Remove all illegal characters from email
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validate e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
  echo("$email is a valid email address");
} else {
  echo("$email is not a valid email address");
}
?>
```

URL manzilini tozalash va tasdiqlash

Quyidagi misolda filter_var()avval URLdan barcha noqonuniy belgilarni olib tashlash funksiyasidan foydalaniladi, so‘ngra $url haqiqiy URL ekanligini tekshiring:

```php
<?php
$url = "https://www.w3schools.com";

// Remove all illegal characters from a url
$url = filter_var($url, FILTER_SANITIZE_URL);

// Validate url
if (!filter_var($url, FILTER_VALIDATE_URL) === false) {
  echo("$url is a valid URL");
} else {
  echo("$url is not a valid URL");
}
?>
```





















