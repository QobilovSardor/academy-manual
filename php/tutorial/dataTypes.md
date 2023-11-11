# 📔 PHP ma'lumotlar turlari

## PHP ma'lumotlar turlari
O'zgaruvchilar har xil turdagi ma'lumotlarni saqlashi mumkin va har xil ma'lumotlar turlari har xil ishlarni bajarishi mumkin.

PHP quyidagi ma'lumotlar turlarini qo'llab-quvvatlaydi:

- String
- Butun son
- Float (suzuvchi nuqta raqamlari - ikki marta ham deyiladi)
- Mantiqiy
- Massiv
- Ob'ekt
- NULL
- Resource

## PHP String

Satr - bu "Salom dunyo!" kabi belgilar ketma-ketligi.

Satr tirnoq ichidagi har qanday matn bo'lishi mumkin. Siz bitta yoki ikkita tirnoqdan foydalanishingiz mumkin:

```php
<?php
$x = "Hello world!";
$y = 'Hello world!';

echo $x;
echo "<br>";
echo $y;
?>
```

## PHP butun soni
Butun sonli ma'lumotlar turi -2,147,483,648 va 2,147,483,647 oralig'idagi o'nlik bo'lmagan sondir.

Butun sonlar uchun qoidalar:

Butun sonda kamida bitta raqam bo'lishi kerak
Butun sonda kasr boʻlmasligi kerak
Butun son ijobiy yoki salbiy bo'lishi mumkin
Butun sonlarni oʻnlik (asos 10), oʻn oltilik (asos 16), sakkizlik (asos 8) yoki ikkilik (baza 2) yozuvlarida koʻrsatish mumkin.
Quyidagi misolda $x butun sondir. PHP var_dump() funksiyasi maʼlumotlar turi va qiymatini qaytaradi:

```php
<?php
$x = 5985;
var_dump($x);
?>
```

## PHP Float
Float (suzuvchi nuqtali raqam) - kasrli nuqta yoki eksponensial shakldagi raqam.

Quyidagi misolda $x floatdir. PHP var_dump() funksiyasi maʼlumotlar turi va qiymatini qaytaradi:

```php
<?php
$x = 10.365;
var_dump($x);
?>
```

PHP mantiqiy
Mantiqiy ikki mumkin bo'lgan holatni ifodalaydi: TRUE yoki FALSE.

```php
$x = true;
$y = false;
```

Mantiqiy ko'pincha shartli testlarda qo'llaniladi. Shartli test haqida ko'proq ma'lumotni ushbu qo'llanmaning keyingi bobida bilib olasiz.

## PHP massivi

Massiv bitta o'zgaruvchida bir nechta qiymatlarni saqlaydi.

Quyidagi misolda $cars massivdir. PHP var_dump() funksiyasi maʼlumotlar turi va qiymatini qaytaradi:

```php
<?php
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
?>
```

Massivlar haqida ko'p narsalarni ushbu qo'llanmaning keyingi boblarida bilib olasiz.

## PHP ob'ekti

Sinflar va ob'ektlar ob'ektga yo'naltirilgan dasturlashning ikkita asosiy jihati hisoblanadi.

Sinf ob'ektlar uchun shablon, ob'ekt esa sinfning namunasidir.

Alohida ob'ektlar yaratilganda, ular sinfdan barcha xususiyatlar va xatti-harakatlarni meros qilib oladi, lekin har bir ob'ekt xususiyatlar uchun turli qiymatlarga ega bo'ladi.

Faraz qilaylik, bizda Car nomli sinf bor. Avtomobil model, rang va boshqalar kabi xususiyatlarga ega bo'lishi mumkin. Biz ushbu xususiyatlar qiymatlarini saqlash uchun $model, $color va hokazo kabi o'zgaruvchilarni belgilashimiz mumkin.

Alohida ob'ektlar (Volvo, BMW, Toyota va boshqalar) yaratilganda, ular sinfdan barcha xususiyatlar va xatti-harakatlarni meros qilib oladi, lekin har bir ob'ekt xususiyatlar uchun turli qiymatlarga ega bo'ladi.

Agar siz __construct() funksiyasini yaratsangiz, sinfdan obyekt yaratganingizda PHP avtomatik ravishda bu funksiyani chaqiradi.

```php
<?php
class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("black", "Volvo");
echo $myCar -> message();
echo "<br>";
$myCar = new Car("red", "Toyota");
echo $myCar -> message();
?>
```

## PHP NULL qiymati

Null - bu faqat bitta qiymatga ega bo'lishi mumkin bo'lgan maxsus ma'lumotlar turi: NULL.

NULL tipidagi ma'lumotlar o'zgaruvchisi unga hech qanday qiymat tayinlanmagan o'zgaruvchidir.

Maslahat: Agar o'zgaruvchi qiymatsiz yaratilgan bo'lsa, unga avtomatik ravishda NULL qiymati tayinlanadi.

O'zgaruvchilar qiymatni NULL ga o'rnatish orqali ham bo'shatilishi mumkin:

```php
<?php
$x = "Hello world!";
$x = null;
var_dump($x);
?>
```

## PHP manbasi

Maxsus resurs turi haqiqiy ma'lumotlar turi emas. Bu PHP dan tashqari funksiyalar va resurslarga havolalarni saqlashdir.

Resurs ma'lumotlari turidan foydalanishning umumiy misoli ma'lumotlar bazasi chaqiruvidir.

Biz bu yerda resurs turi haqida gapirmaymiz, chunki bu ilg'or mavzu.

















