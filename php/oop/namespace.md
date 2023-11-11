# 📔 PHP Namespaces

## PHP Namespaces (PHP nom maydonlari)

PHP nom maydonlari

Nom maydonlari ikki xil muammolarni hal qiladigan kvalifikatsiyalardir:

1. Ular vazifani bajarish uchun birgalikda ishlaydigan sinflarni guruhlash orqali yaxshiroq tashkil etish imkonini beradi
2. Ular bir xil nomni bir nechta sinflar uchun ishlatishga imkon beradi

Misol uchun, sizda HTML jadvalini tavsiflovchi, masalan, Jadval, Qator va Hujayra kabi sinflar to'plami bo'lishi mumkin, shuningdek, Stol, Kreslo va To'shak kabi mebellarni tasvirlash uchun boshqa sinflar to'plamiga ega bo'lishingiz mumkin. Nom maydonlaridan sinflarni ikki xil guruhga ajratish uchun foydalanish mumkin, shu bilan birga ikkita sinf Jadval va Jadvalni aralashtirishning oldini oladi.

Nomlar maydonini e'lon qilish
Ismlar bo'shliqlari fayl boshida quyidagi namespacekalit so'z yordamida e'lon qilinadi:

```php
<?php
namespace Html;
?>
```

:::warning Eslatma
Eslatma: Deklaratsiya namespacePHP faylida birinchi narsa bo'lishi kerak. Quyidagi kod noto'g'ri bo'ladi:

```php
<?php
echo "Hello World!";
namespace Html;
...
?>
```
:::

Ushbu faylda e'lon qilingan doimiylar, sinflar va funktsiyalar Html nom maydoniga tegishli bo'ladi:

```php
<?php
namespace Html;
class Table {
  public $title = "";
  public $numRows = 0;
  public function message() {
    echo "<p>Table '{$this->title}' has {$this->numRows} rows.</p>";
  }
}
$table = new Table();
$table->title = "My table";
$table->numRows = 5;
?>

<!DOCTYPE html>
<html>
<body>

<?php
$table->message();
?>

</body>
</html>
```

Keyinchalik tashkil qilish uchun ichki nomlar bo'shliqlari bo'lishi mumkin:

```php
<?php
namespace Code\Html;
?>
```

Nom maydonlaridan foydalanish

Deklaratsiyadan keyingi har qanday kod namespacenomlar maydoni ichida ishlaydi, shuning uchun nomlar maydoniga tegishli sinflar hech qanday kvalifikatsiyalarsiz yaratilishi mumkin. Nom maydonidan tashqaridagi sinflarga kirish uchun sinf unga nom maydoni biriktirilgan bo'lishi kerak.

```php
<?php
$table = new Html\Table()
$row = new Html\Row();
?>
```

Bir vaqtning o'zida bir xil nomlar maydonidagi ko'plab sinflar ishlatilsa, namespacekalit so'zdan foydalanish osonroq bo'ladi:

```php
<?php
namespace Html;
$table = new Table();
$row = new Row();
?>
```

Nom maydoni taxalluslari

Yozishni osonlashtirish uchun nom maydoni yoki sinfga taxallus berish foydali bo'lishi mumkin. Bu kalit so'z bilan amalga oshiriladi use:

```php
<?php
use Html as H;
$table = new H\Table();
?>
```

```php
<?php
use Html\Table as T;
$table = new T();
?>
```










