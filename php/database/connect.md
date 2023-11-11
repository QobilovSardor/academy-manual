# 📔 PHP Connect to MySQL

## PHP Connect to MySQL (MySQL ga ulanish)

PHP 5 va undan keyingi versiyalari MySQL ma'lumotlar bazasi bilan ishlashlari mumkin:

- MySQLi kengaytmasi ("i" yaxshilangan degan ma'noni anglatadi)
- PDO (PHP ma'lumotlar ob'ektlari)

PHP ning oldingi versiyalarida MySQL kengaytmasi ishlatilgan. Biroq, bu kengaytma 2012 yilda bekor qilingan.

MySQLi yoki PDO dan foydalanishim kerakmi?
Agar sizga qisqa javob kerak bo'lsa, u "Sizga yoqadigan narsa" bo'ladi.

MySQLi ham, PDO ham o'zlarining afzalliklariga ega:

PDO 12 xil ma'lumotlar bazasi tizimlarida ishlaydi, MySQLi esa faqat MySQL ma'lumotlar bazalari bilan ishlaydi.

Shunday qilib, agar siz loyihangizni boshqa ma'lumotlar bazasidan foydalanishga o'tkazishingiz kerak bo'lsa, PDO jarayonni osonlashtiradi. Siz faqat ulanish qatorini va bir nechta so'rovlarni o'zgartirishingiz kerak. MySQLi bilan siz butun kodni qayta yozishingiz kerak bo'ladi - so'rovlar kiritilgan.

Ikkalasi ham ob'ektga yo'naltirilgan, ammo MySQLi protsessual APIni ham taklif qiladi.

Ikkalasi ham Tayyorlangan bayonotlarni qo'llab-quvvatlaydi. Tayyorlangan bayonotlar SQL in'ektsiyasidan himoya qiladi va veb-ilovalar xavfsizligi uchun juda muhimdir.

MySQLi va PDO sintaksisida MySQL misollari

Bu va keyingi boblarda biz PHP va MySQL bilan ishlashning uchta usulini ko'rsatamiz:

- MySQLi (ob'ektga yo'naltirilgan)
- MySQLi (protsessual)
- PDO

MySQLi o'rnatish
Linux va Windows uchun: MySQLi kengaytmasi ko'p hollarda php5 MySQL paketi o'rnatilganda avtomatik ravishda o'rnatiladi.

O'rnatish tafsilotlari uchun quyidagi manzilga o'ting: http://php.net/manual/en/mysqli.installation.php

PDO o'rnatish
O'rnatish tafsilotlari uchun quyidagi manzilga o'ting: http://php.net/manual/en/pdo.installation.php

MySQL-ga ulanishni oching

MySQL ma'lumotlar bazasidagi ma'lumotlarga kirishdan oldin serverga ulanish imkoniyatiga ega bo'lishimiz kerak:

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
```

:::warning Eslatma
Yuqoridagi ob'ektga yo'naltirilgan misolga e'tibor bering:

$connect_error PHP 5.2.9 va 5.3.0gacha buzildi. Agar 5.2.9 va 5.3.0 dan oldingi PHP versiyalari bilan mosligini ta'minlash kerak bo'lsa, uning o'rniga quyidagi koddan foydalaning:

// Agar ulanishni tekshiring
(mysqli_connect_error()) {
  die("Ma'lumotlar bazasiga ulanish muvaffaqiyatsiz tugadi: " . mysqli_connect_error());
}
:::

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
```

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";

try {
  $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>
```

:::warning Eslatma
Eslatma: Yuqoridagi PDO misolida biz ma'lumotlar bazasini (myDB) ham ko'rsatdik . PDO ulanish uchun tegishli ma'lumotlar bazasini talab qiladi. Agar ma'lumotlar bazasi ko'rsatilmagan bo'lsa, istisno chiqariladi.
:::

Maslahat: PDO ning katta afzalligi shundaki, u bizning ma'lumotlar bazasi so'rovlarimizda yuzaga kelishi mumkin bo'lgan har qanday muammolarni hal qilish uchun istisno sinfiga ega. Agar try{ } blokida istisno o'rnatilgan bo'lsa, skript ishlashni to'xtatadi va to'g'ridan-to'g'ri birinchi catch(){ } blokiga o'tadi.

Ulanishni yoping
Skript tugashi bilan ulanish avtomatik ravishda yopiladi. Avval ulanishni yopish uchun quyidagilarni foydalaning:

```php
$conn->close();

mysqli_close($conn);

$conn = null;
```













