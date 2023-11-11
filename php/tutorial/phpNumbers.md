# 📔 PHP Numbers

Ushbu bobda biz butun sonlar, floatlar va sonlar qatorlarini chuqur ko'rib chiqamiz.

## PHP raqamlari

PHP haqida diqqat qilish kerak bo'lgan narsa shundaki, u ma'lumotlar turini avtomatik ravishda o'zgartirishni ta'minlaydi.

Shunday qilib, agar siz o'zgaruvchiga butun son qiymatini belgilasangiz, bu o'zgaruvchining turi avtomatik ravishda butun son bo'ladi. Keyin, agar siz bir xil o'zgaruvchiga satr tayinlasangiz, tur satrga o'zgaradi.

Ushbu avtomatik konvertatsiya ba'zan kodingizni buzishi mumkin.

## PHP butun sonlari

2, 256, -256, 10358, -179567 butun sonlardir.

Butun son o'nlik qismi bo'lmagan sondir.

Butun sonli ma'lumotlar turi 32 bitli tizimlarda -2147483648 va 2147483647, 64 bitli tizimlarda -9223372036854775808 va 9223372036854775807 oralig'idagi o'nlik bo'lmagan sondir. Bundan kattaroq (yoki pastroq) qiymat float sifatida saqlanadi, chunki u butun son chegarasidan oshib ketadi.

Eslatma: Bilish kerak bo'lgan yana bir muhim narsa shundaki, 4 * 2,5 10 bo'lsa ham, natija float sifatida saqlanadi, chunki operandlardan biri float (2,5).

Mana butun sonlar uchun ba'zi qoidalar:

- Butun sonda kamida bitta raqam bo'lishi kerak
- Butun sonda oʻnli kasr boʻlmasligi kerak
- Butun son ijobiy yoki salbiy bo'lishi mumkin
- Butun sonlar uchta formatda ko'rsatilishi mumkin: o'nlik (10-asosli), o'n oltilik (16-asosli - 0x bilan prefiks) yoki sakkizlik (8-asosli - 0 bilan prefiks)

PHP da butun sonlar uchun quyidagi oldindan belgilangan konstantalar mavjud:

- PHP_INT_MAX - Qo'llab-quvvatlanadigan eng katta butun son
- PHP_INT_MIN - qo'llab-quvvatlanadigan eng kichik butun son
- PHP_INT_SIZE - Butun sonning baytdagi o'lchami

PHP o'zgaruvchining turi butun son ekanligini tekshirish uchun quyidagi funksiyalarga ega:

- is_int()
- is_integer() - is_int() taxallusi
- is_long() - is_int() taxalluslari

```php
<?php
$x = 5985;
var_dump(is_int($x));

$x = 59.85;
var_dump(is_int($x));
?>
```

## PHP Floats

Float - bu kasrli nuqta yoki eksponensial shakldagi raqam.

2.0, 256.4, 10.358, 7.64E+5, 5.56E-5 barcha floats hisoblanadi.

Float ma'lumotlar turi odatda 1,7976931348623E+308 (platformaga bog'liq)gacha bo'lgan qiymatni saqlashi mumkin va maksimal aniqlik 14 ta raqamga ega.

PHP da float uchun quyidagi oldindan belgilangan konstantalar mavjud (PHP 7.2 dan):

- PHP_FLOAT_MAX - eng katta ifodalanadigan suzuvchi nuqta raqami
- PHP_FLOAT_MIN - ifodalanadigan eng kichik musbat suzuvchi nuqta raqami
- PHP_FLOAT_DIG - aniqlikni yo'qotmasdan suzuvchi va orqaga yaxlitlanishi mumkin bo'lgan o'nlik raqamlar soni
- PHP_FLOAT_EPSILON - X + 1.0 != 1.0 bo'lishi uchun ifodalanadigan eng kichik musbat son x

PHP o'zgaruvchining turi float ekanligini tekshirish uchun quyidagi funksiyalarga ega:

- is_float()
- is_double() - is_float() taxallus

```php
<?php
$x = 10.365;
var_dump(is_float($x));
?>
```

## PHP Infinity

PHP_FLOAT_MAX dan kattaroq sonli qiymat cheksiz hisoblanadi.

PHPda raqamli qiymatning chekli yoki cheksiz ekanligini tekshirish uchun quyidagi funksiyalar mavjud:

- is_finite()
- is_infinite()

Biroq, PHP var_dump() funktsiyasi ma'lumotlar turi va qiymatini qaytaradi:

```php
<?php
$x = 1.9e411;
var_dump($x);
?>
```

## PHP NaNs

NaN qisqartmasi raqam emas.

NaN imkonsiz matematik amallar uchun ishlatiladi.

PHPda qiymat raqam emasligini tekshirish uchun quyidagi funksiyalar mavjud:

- is_in()

Biroq, PHP var_dump() funktsiyasi ma'lumotlar turi va qiymatini qaytaradi:

```php
<?php
$x = acos(8);
var_dump($x);
?>
```

## PHP raqamli satrlari

PHP is_numeric() funktsiyasi o'zgaruvchining raqamli ekanligini aniqlash uchun ishlatilishi mumkin. Funktsiya, agar o'zgaruvchi raqam yoki raqamli qator bo'lsa, true qiymatini qaytaradi, aks holda noto'g'ri.

```php
<?php
$x = 5985;
var_dump(is_numeric($x));

$x = "5985";
var_dump(is_numeric($x));

$x = "59.85" + 100;
var_dump(is_numeric($x));

$x = "Hello";
var_dump(is_numeric($x));
?>
```

:::warning Eslatma
PHP 7.0 dan: is_numeric() funksiyasi o‘n oltilik ko‘rinishdagi (masalan, 0xf4c3b00c) raqamli satrlar uchun FALSE qiymatini qaytaradi, chunki ular endi raqamli qatorlar sifatida hisoblanmaydi.
:::

## PHP to'qimalarining satrlari va butun sonlarga suzadi

Ba'zan siz raqamli qiymatni boshqa ma'lumotlar turiga o'tkazishingiz kerak bo'ladi.

Qiymatni butun songa aylantirish uchun odatda (int), (integer) yoki intval() funksiyalaridan foydalaniladi.

```php
<?php
// Cast float to int
$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast;

echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast;
?>
```







