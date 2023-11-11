# 📔 PHP Global Variables - Superglobals 

Supergloballar PHP 4.1.0 da joriy qilingan va har doim barcha sohalarda mavjud bo'lgan o'rnatilgan o'zgaruvchilardir.

## PHP Global Variables - Superglobals (PHP global o'zgaruvchilari - Superglobals)

PHP global o'zgaruvchilari - Superglobals
PHPda oldindan belgilangan baʼzi oʻzgaruvchilar “supergloballar” boʻlib, ular qamrovidan qatʼiy nazar har doim foydalanish mumkin boʻladi – va siz ularga biron bir maxsus ish qilmasdan istalgan funksiya, sinf yoki fayldan kirishingiz mumkin.

PHP superglobal o'zgaruvchilari quyidagilardir:

- $GLOBALS
- $_SERVER
- $_REQUEST
- $_POST
- $_GET
- $_FILES
- $_ENV
- $_COOKIE
- $_SESSION

Keyingi boblarda supergloballarning ba'zilari tushuntiriladi, qolganlari esa keyingi boblarda tushuntiriladi.

## PHP $GLOBALS

$GLOBALS bu PHP super global oʻzgaruvchisi boʻlib, u PHP skriptining istalgan joyidan global oʻzgaruvchilarga kirish uchun ishlatiladi (shuningdek, funksiyalar yoki usullar ichidan).

PHP barcha global oʻzgaruvchilarni $GLOBALS[ index ] deb nomlangan massivda saqlaydi . Indeks o'zgaruvchining nomini saqlaydi .

Quyidagi misolda $GLOBALS super global o'zgaruvchisidan qanday foydalanish ko'rsatilgan:

```php
<?php
$x = 75;
$y = 25;
 
function addition() {
  $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}
 
addition();
echo $z;
?>
```

## PHP $_SERVER

$_SERVER PHP super global oʻzgaruvchisi boʻlib, sarlavhalar, yoʻllar va skript joylashuvi haqidagi maʼlumotlarni saqlaydi.

Quyidagi misol $_SERVER-dagi ba'zi elementlardan qanday foydalanishni ko'rsatadi:

```php
<?php
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
?>
```

## PHP $_REQUEST

PHP $_REQUEST bu PHP super global oʻzgaruvchisi boʻlib, HTML formasini yuborgandan soʻng maʼlumotlarni toʻplash uchun ishlatiladi.

Quyidagi misolda kiritish maydoni va yuborish tugmasi bo'lgan shakl ko'rsatilgan. Foydalanuvchi “Yuborish” tugmasini bosish orqali ma’lumotlarni topshirganda, forma ma’lumotlari "form" tegining harakat atributida ko‘rsatilgan faylga yuboriladi. Ushbu misolda biz forma ma'lumotlarini qayta ishlash uchun ushbu faylning o'ziga ishora qilamiz. Shakl ma'lumotlarini qayta ishlash uchun boshqa PHP faylidan foydalanmoqchi bo'lsangiz, uni o'zingiz tanlagan fayl nomi bilan almashtiring. Keyin, kirish maydonining qiymatini yig'ish uchun super global o'zgaruvchidan $_REQUEST foydalanishimiz mumkin:

```php
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_REQUEST['fname'];
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>

</body>
</html>
```

## PHP $_POST

PHP $_POST bu PHP super global oʻzgaruvchisi boʻlib, HTML formasini method="post" bilan yuborgandan soʻng shakl maʼlumotlarini yigʻishda foydalaniladi. $_POST o'zgaruvchilarni uzatish uchun ham keng qo'llaniladi.

Quyidagi misolda kiritish maydoni va yuborish tugmasi bo'lgan shakl ko'rsatilgan. Foydalanuvchi “Yuborish” tugmasini bosish orqali ma’lumotlarni topshirganda, forma ma’lumotlari "form" tegining harakat atributida ko‘rsatilgan faylga yuboriladi. Ushbu misolda biz forma ma'lumotlarini qayta ishlash uchun faylning o'ziga ishora qilamiz. Shakl ma'lumotlarini qayta ishlash uchun boshqa PHP faylidan foydalanmoqchi bo'lsangiz, uni o'zingiz tanlagan fayl nomi bilan almashtiring. Keyin, kirish maydonining qiymatini yig'ish uchun super global o'zgaruvchidan $_POST dan foydalanishimiz mumkin:

```php
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_POST['fname'];
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>

</body>
</html>
```


## PHP $_GET

PHP $_GET - bu PHP super global o'zgaruvchisi bo'lib, HTML formasini method="get" bilan yuborgandan so'ng shakl ma'lumotlarini yig'ish uchun ishlatiladi.

$_GET URL manzilida yuborilgan ma'lumotlarni ham to'plashi mumkin.

Faraz qilaylik, bizda parametrlarga ega giperhavolani o'z ichiga olgan HTML sahifamiz bor:

```php
<html>
<body>

<a href="test_get.php?subject=PHP&web=W3schools.com">Test $GET</a>

</body>
</html>
```

Agar foydalanuvchi "Test $GET" havolasini bosganida, "mavzu" va "web" parametrlari "test_get.php" ga yuboriladi va siz ularning qiymatlariga $_GET orqali "test_get.php" da kirishingiz mumkin.

Quyidagi misolda "test_get.php" da kod ko'rsatilgan:

```php
<html>
<body>

<?php
echo "Study " . $_GET['subject'] . " at " . $_GET['web'];
?>

</body>
</html>
```



