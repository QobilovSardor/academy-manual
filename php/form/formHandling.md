# 📔 PHP Form Handling

## PHP Form Handling (PHP shakllari bilan ishlash)

PHP supergloballari $_GET va $_POST forma ma'lumotlarini yig'ish uchun ishlatiladi.

PHP - oddiy HTML formasi

Quyidagi misolda ikkita kiritish maydoni va yuborish tugmasi bo'lgan oddiy HTML formasi ko'rsatilgan:

```php
<html>
<body>

<form action="welcome.php" method="post">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>
```

Foydalanuvchi yuqoridagi shaklni to‘ldirib, jo‘natish tugmasini bosganida, forma ma’lumotlari “welcome.php” nomli PHP fayliga ishlov berish uchun yuboriladi. Shakl ma'lumotlari HTTP POST usuli bilan yuboriladi.

Taqdim etilgan ma'lumotlarni ko'rsatish uchun siz shunchaki barcha o'zgaruvchilarni aks ettirishingiz mumkin. "welcome.php" quyidagicha ko'rinadi:

```php
<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>
```

Chiqish shunday bo'lishi mumkin:

```php
Welcome John
Your email address is john.doe@example.com
```

Xuddi shu natijaga HTTP GET usuli yordamida ham erishish mumkin:

```php
<html>
<body>

<form action="welcome_get.php" method="get">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>
```

va "welcome_get.php" quyidagicha ko'rinadi:

```php
<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>
```

Yuqoridagi kod juda oddiy. Biroq, eng muhimi etishmayapti. Skriptingizni zararli koddan himoya qilish uchun shakl ma'lumotlarini tekshirishingiz kerak.

:::warning Eslatma
PHP shakllarini qayta ishlashda XAVFSIZLIK haqida o'ylang!

Bu sahifada hech qanday shakl tekshiruvi mavjud emas, u faqat shakl maʼlumotlarini qanday yuborish va olish mumkinligini koʻrsatadi.

Biroq, keyingi sahifalar xavfsizlikni hisobga olgan holda PHP shakllarini qanday qayta ishlashni ko'rsatib beradi! Shakl ma'lumotlarini to'g'ri tekshirish sizning shaklingizni xakerlar va spamerlardan himoya qilish uchun muhimdir!
:::

GET va POST
GET ham, POST ham massiv yaratadi (masalan, massiv (key1 => qiymat1, kalit2 => qiymat2, kalit3 => qiymat3, ...)). Bu massiv kalit/qiymat juftlarini o'z ichiga oladi, bu erda kalitlar shakl boshqaruv elementlarining nomlari va qiymatlar foydalanuvchi tomonidan kiritilgan ma'lumotlardir.

GET ham, POST ham $_GET va $_POST sifatida qabul qilinadi. Bular supergloballardir, ya'ni ular qamrovidan qat'i nazar, har doim foydalanish mumkin - va siz ularga biron bir maxsus ish qilmasdan istalgan funksiya, sinf yoki fayldan kirishingiz mumkin.

$_GET - URL parametrlari orqali joriy skriptga uzatiladigan o'zgaruvchilar massivi.

$_POST - bu HTTP POST usuli orqali joriy skriptga uzatiladigan o'zgaruvchilar massivi.


GET-dan qachon foydalanish kerak?
GET usuli bilan shakldan yuborilgan ma'lumotlar hamma uchun ko'rinadi (barcha o'zgaruvchilar nomlari va qiymatlari URL manzilida ko'rsatiladi). GET yuboriladigan ma'lumotlar miqdori bo'yicha ham cheklovlarga ega. Cheklov taxminan 2000 belgidan iborat. Biroq, o'zgaruvchilar URLda ko'rsatilganligi sababli, sahifaga xatcho'p qo'yish mumkin. Bu ba'zi hollarda foydali bo'lishi mumkin.

GET sezgir bo'lmagan ma'lumotlarni yuborish uchun ishlatilishi mumkin.

Eslatma: GET HECH QACHON parollar yoki boshqa nozik ma'lumotlarni yuborish uchun ishlatilmasligi kerak!

POST-dan qachon foydalanish kerak?
POST usuli bilan shakldan yuborilgan ma'lumotlar boshqalarga ko'rinmaydi (barcha nomlar/qiymatlar HTTP so'rovining asosiy qismiga kiritilgan) va jo'natiladigan ma'lumotlar miqdorida cheklovlar yo'q .

Bundan tashqari, POST fayllarni serverga yuklashda ko'p qismli ikkilik kiritishni qo'llab-quvvatlash kabi ilg'or funksiyalarni qo'llab-quvvatlaydi.

Biroq, o'zgaruvchilar URLda ko'rsatilmaganligi sababli, sahifaga xatcho'p qo'yish mumkin emas.


:::warning Eslatma
Ishlab chiquvchilar shakl ma'lumotlarini yuborish uchun POSTni afzal ko'rishadi.
:::








