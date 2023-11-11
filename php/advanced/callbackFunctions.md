# 📔 PHP Callback Functions

## PHP Callback Functions (PHP qayta qo'ng'iroq qilish funktsiyalari)

Qayta qo'ng'iroq qilish funktsiyalari

Qayta qo'ng'iroq qilish funktsiyasi (ko'pincha "qayta qo'ng'iroq" deb ataladi) boshqa funktsiyaga argument sifatida uzatiladigan funktsiyadir.

Har qanday mavjud funktsiya qayta qo'ng'iroq qilish funktsiyasi sifatida ishlatilishi mumkin. Funktsiyani qayta qo'ng'iroq qilish funktsiyasi sifatida ishlatish uchun boshqa funktsiyaning argumenti sifatida funktsiya nomini o'z ichiga olgan qatorni o'tkazing:

```php
<?php
function my_callback($item) {
  return strlen($item);
}

$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map("my_callback", $strings);
print_r($lengths);
?>
```

7-versiyadan boshlab, PHP anonim funktsiyalarni qayta qo'ng'iroq qilish funktsiyalari sifatida o'tkazishi mumkin:

```php
<?php
$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map( function($item) { return strlen($item); } , $strings);
print_r($lengths);
?>
```

Foydalanuvchi tomonidan belgilangan funktsiyalarda qayta qo'ng'iroqlar

Foydalanuvchi tomonidan belgilangan funksiyalar va usullar qayta qo'ng'iroq qilish funksiyalarini argument sifatida ham olishi mumkin. Qayta qo'ng'iroq qilish funksiyalarini foydalanuvchi tomonidan belgilangan funksiya yoki usulda ishlatish uchun o'zgaruvchiga qavslar qo'shish orqali chaqiring va oddiy funktsiyalardagi kabi argumentlarni o'tkazing:

```php
<?php
function exclaim($str) {
  return $str . "! ";
}

function ask($str) {
  return $str . "? ";
}

function printFormatted($str, $format) {
  // Calling the $format callback function
  echo $format($str);
}

// Pass "exclaim" and "ask" as callback functions to printFormatted()
printFormatted("Hello world", "exclaim");
printFormatted("Hello world", "ask");
?>
```


























