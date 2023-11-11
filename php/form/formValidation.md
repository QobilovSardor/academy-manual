# 📔 PHP Form Validation

## PHP Form Validation (PHP formasini tekshirish)

Ushbu va keyingi boblar shakl ma'lumotlarini tekshirish uchun PHP dan qanday foydalanishni ko'rsatadi.

PHP formasini tekshirish

:::warning Eslatma
PHP shakllarini qayta ishlashda XAVFSIZLIK haqida o'ylang!

Ushbu sahifalar xavfsizlikni hisobga olgan holda PHP shakllarini qanday qayta ishlashni ko'rsatadi. Shakl ma'lumotlarini to'g'ri tekshirish sizning shaklingizni xakerlar va spamerlardan himoya qilish uchun muhimdir!
:::

Ushbu boblarda biz ishlayotgan HTML formasi turli kiritish maydonlarini o'z ichiga oladi: zarur va ixtiyoriy matn maydonlari, radio tugmalar va yuborish tugmasi:

<img src='/image_js/php14.png'>

Yuqoridagi shaklni tekshirish qoidalari quyidagicha:

<img src='/image_js/php15.png'>

Avval forma uchun oddiy HTML kodini ko'rib chiqamiz:

Matn maydonlari

Ism, elektron pochta va veb-sayt maydonlari matn kiritish elementlari, sharh maydoni esa matn maydonidir. HTML kodi quyidagicha ko'rinadi:

```php
Name: <input type="text" name="name">
E-mail: <input type="text" name="email">
Website: <input type="text" name="website">
Comment: <textarea name="comment" rows="5" cols="40"></textarea>
```

Radio tugmalari

Gender maydonlari radio tugmalari va HTML kodi quyidagicha ko'rinadi:

```php
Gender:
<input type="radio" name="gender" value="female">Female
<input type="radio" name="gender" value="male">Male
<input type="radio" name="gender" value="other">Other
```

Shakl elementi

Shaklning HTML kodi quyidagicha ko'rinadi:

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```

:::warning Eslatma
$_SERVER["PHP_SELF"] o'zgaruvchisi nima?

$_SERVER["PHP_SELF"] hozirda bajarilayotgan skript fayl nomini qaytaradigan super global o'zgaruvchidir.
:::

Shunday qilib, $_SERVER["PHP_SELF"] yuborilgan shakl ma'lumotlarini boshqa sahifaga o'tish o'rniga sahifaning o'ziga yuboradi. Shunday qilib, foydalanuvchi forma bilan bir xil sahifada xato xabarlarini oladi.

:::warning Eslatma
htmlspecialchars() funksiyasi nima?

htmlspecialchars() funksiyasi maxsus belgilarni HTML ob'ektlariga aylantiradi. Bu < va > kabi HTML belgilarni < va >. Bu HTML yoki Javascript kodlarini (saytlararo skript hujumlari) shakllarga kiritish orqali tajovuzkorlarning koddan foydalanishini oldini oladi.
:::

PHP forma xavfsizligi bo'yicha katta eslatma
$_SERVER["PHP_SELF"] o'zgaruvchisi xakerlar tomonidan ishlatilishi mumkin!

Agar sahifangizda PHP_SELF ishlatilsa, foydalanuvchi slash (/) va keyin ba'zi saytlararo skript (XSS) buyruqlarini bajarishi mumkin.

:::warning Eslatma
Saytlararo skript (XSS) - bu odatda veb-ilovalarda topiladigan kompyuter xavfsizligi zaifligining bir turi. XSS tajovuzkorlarga boshqa foydalanuvchilar tomonidan ko'riladigan veb-sahifalarga mijoz tomonidagi skriptni kiritish imkonini beradi.
:::

"test_form.php" nomli sahifada quyidagi shakl mavjud deb faraz qilaylik:

```php
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
```

Endi, agar foydalanuvchi "http://www.example.com/test_form.php" kabi manzillar qatoriga oddiy URL manzilini kiritsa, yuqoridagi kod quyidagiga tarjima qilinadi:

```php
<form method="post" action="test_form.php">
```

Hozirgacha juda yaxshi.

Biroq, foydalanuvchi manzil satriga quyidagi URL manzilini kiritishini hisobga oling:

```php
http://www.example.com/test_form.php/%22%3E%3Cscript%3Ealert('hacked')%3C/script%3E
```

Bunday holda, yuqoridagi kod quyidagiga tarjima qilinadi:

```php
<form method="post" action="test_form.php/"><script>alert('hacked')</script>
```

Ushbu kod skript yorlig'i va ogohlantirish buyrug'ini qo'shadi. Va sahifa yuklanganda, JavaScript kodi bajariladi (foydalanuvchi ogohlantirish oynasini ko'radi). Bu PHP_SELF o'zgaruvchisidan qanday foydalanish mumkinligining oddiy va zararsiz misolidir.

Shuni yodda tutingki, har qanday JavaScript kodini "script" tegiga qo'shish mumkin! Xaker foydalanuvchini boshqa serverdagi faylga yo'naltirishi mumkin va bu faylda global o'zgaruvchilarni o'zgartirishi yoki foydalanuvchi ma'lumotlarini saqlash uchun shaklni boshqa manzilga yuborishi mumkin bo'lgan zararli kod bo'lishi mumkin.

$_SERVER["PHP_SELF"] ekspluatatsiyasini qanday oldini olish mumkin?
$_SERVER["PHP_SELF"] ekspluatatsiyasini htmlspecialchars() funksiyasi yordamida oldini olish mumkin.

Shakl kodi quyidagicha ko'rinishi kerak:

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```

htmlspecialchars() funksiyasi maxsus belgilarni HTML ob'ektlariga aylantiradi. Endi agar foydalanuvchi PHP_SELF o'zgaruvchisidan foydalanishga harakat qilsa, bu quyidagi natijaga olib keladi:


```php
<form method="post" action="test_form.php/&quot;&gt;&lt;script&gt;alert('hacked')&lt;/script&gt;">
```

Ekspluatatsiyaga urinish muvaffaqiyatsiz tugadi va hech qanday zarar yetkazilmaydi!

PHP yordamida forma ma'lumotlarini tekshirish

Biz qiladigan birinchi narsa barcha o'zgaruvchilarni PHP ning htmlspecialchars() funksiyasi orqali o'tkazishdir.

Biz htmlspecialchars() funksiyasidan foydalanganda; agar foydalanuvchi matn maydoniga quyidagilarni yuborishga harakat qilsa:

`<script>location.href('http://www.hacked.com')</script>`

- bu bajarilmaydi, chunki u HTMLdan qochish kodi sifatida saqlanadi, masalan:

`<script>location.href('http://www.hacked.com')</script>`

Kod endi sahifada yoki elektron pochta ichida ko'rsatilishi mumkin.

Foydalanuvchi shaklni yuborganida biz yana ikkita narsani qilamiz:

1. Foydalanuvchi kiritgan maʼlumotlardan keraksiz belgilarni (qoʻshimcha boʻsh joy, yorliq, yangi qator) olib tashlang (PHP trim() funksiyasi bilan)

2. Foydalanuvchi kiritgan maʼlumotlardan teskari chiziqchalarni (\) olib tashlang (PHP stripslashes() funksiyasi bilan)

Keyingi qadam biz uchun barcha tekshiruvlarni bajaradigan funktsiyani yaratishdir (bu bir xil kodni qayta-qayta yozishdan ko'ra ancha qulayroq).

Biz test_input() funksiyasini nomlaymiz.

Endi biz har bir $_POST o'zgaruvchisini test_input() funktsiyasi bilan tekshirishimiz mumkin va skript quyidagicha ko'rinadi:

```php
<?php
// define variables and set to empty values
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
```

E'tibor bering, skript boshida biz shakl $_SERVER["REQUEST_METHOD"] yordamida yuborilganligini tekshiramiz. Agar REQUEST_METHOD POST bo'lsa, shakl yuborilgan va u tasdiqlanishi kerak. Agar u yuborilmagan bo'lsa, tekshirishni o'tkazib yuboring va bo'sh shaklni ko'rsating.

Biroq, yuqoridagi misolda barcha kiritish maydonlari ixtiyoriy. Foydalanuvchi hech qanday ma'lumot kiritmasa ham, skript yaxshi ishlaydi.

Keyingi qadam, kiritish maydonlarini talab qilish va kerak bo'lganda xato xabarlarini yaratishdir.




























