# 📔 PHP Constants

Konstantalar o'zgaruvchilarga o'xshaydi, faqat ular aniqlangandan keyin ularni o'zgartirib bo'lmaydi yoki aniqlanmaydi.

## PHP konstantalari

Doimiy oddiy qiymat uchun identifikator (nom). Skript davomida qiymatni o'zgartirib bo'lmaydi.

Yaroqli doimiy nom harf yoki pastki chiziq bilan boshlanadi (doimiy nomdan oldin $ belgisi yo'q).

Eslatma: O'zgaruvchilardan farqli o'laroq, konstantalar avtomatik ravishda butun skript bo'ylab global bo'ladi.

## PHP konstantasini yarating

Konstanta yaratish uchun define()funksiyadan foydalaning.

### Sintaksis

```php
define(name, value, caseInsensitive)
```

Parametrlar:

- name : Konstanta nomini bildiradi
- value : doimiy qiymatni belgilaydi
- caseInsensitive : doimiy nom katta-kichik harflarga sezgir bo'lmasligi kerakligini belgilaydi. Standart noto‘g‘ri

```php
<?php
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;
?>
```

## PHP doimiy massivlari

PHP7 da funksiya yordamida Massiv konstantasini yaratishingiz mumkin define().

```php
<?php
define("cars", [
  "Alfa Romeo",
  "BMW",
  "Toyota"
]);
echo cars[0];
?>
```

## Konstantalar globaldir

Konstantalar avtomatik ravishda global bo'lib, butun skriptda ishlatilishi mumkin.

```php
<?php
define("GREETING", "Welcome to W3Schools.com!");

function myTest() {
  echo GREETING;
}
 
myTest();
?>
```














