# 📔 PHP sintaksisi

## Asosiy PHP sintaksisi

PHP skripti hujjatning istalgan joyiga joylashtirilishi mumkin.

PHP skripti quyidagi bilan boshlanadi

```php
<?php
// PHP code goes here
?>
```

PHP fayllari uchun standart fayl kengaytmasi ".php" dir.

PHP faylida odatda HTML teglari va ba'zi PHP skript kodlari mavjud.

echoQuyida biz oddiy PHP fayliga misol keltiramiz, u PHP skripti bilan “Salom dunyo!” matnini chiqarish uchun o‘rnatilgan PHP funksiyasidan “ ” foydalanadi. veb-sahifada:

```php
<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>
``` 

::: warning Eslatma:
PHP bayonotlari nuqtali vergul bilan tugaydi.
:::

## PHP harflar sezgirligi

PHPda kalit so‘zlar (masalan if, else, while, echo, va hokazo), sinflar, funksiyalar va foydalanuvchi tomonidan belgilangan funksiyalar katta-kichik harflarga bog‘liq emas.

Quyidagi misolda quyidagi uchta aks-sado bayonoti teng va qonuniydir:

```php
<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html>
```

::: warning Eslatma:
Biroq; barcha o'zgaruvchilar nomlari katta-kichik harflarga sezgir!
:::

Quyidagi misolga qarang; faqat birinchi bayonot o'zgaruvchining qiymatini ko'rsatadi $color! Buning sababi $color, $COLOR, va $coLORuch xil o'zgaruvchi sifatida ko'rib chiqiladi:

```php
<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>
```



