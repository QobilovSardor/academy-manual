# 📔 PHP if...else...elseif Statements

Shartli gaplar turli shartlarga asoslangan turli harakatlarni bajarish uchun ishlatiladi.

## PHP shartli bayonotlar

Ko'pincha kod yozganingizda, siz turli xil shartlar uchun turli xil amallarni bajarishni xohlaysiz. Buni amalga oshirish uchun kodingizda shartli iboralardan foydalanishingiz mumkin.

PHP da bizda quyidagi shartli iboralar mavjud:

- if - agar bitta shart to'g'ri bo'lsa, ba'zi kodlarni bajaradi
- if ... else - agar shart to'g'ri bo'lsa, ba'zi kodni va bu shart noto'g'ri bo'lsa, boshqa kodni bajaradi
- if ... elseif ... else - ikkitadan ortiq shartlar uchun turli xil kodlarni bajaradi
- switch - bajariladigan kodning ko'p bloklaridan birini tanlaydi

## PHP - if bayonoti

ifAgar bitta shart to'g'ri bo'lsa, bayonot ba'zi kodlarni bajaradi .

### Sintaksis

```php
if (condition) {
  code to be executed if condition is true;
}
```

```php
<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
}
?>
```

## PHP - if...else

if...elseAgar shart to'g'ri bo'lsa, bayonot ba'zi kodni va agar bu shart noto'g'ri bo'lsa, boshqa kodni bajaradi .

```php
if (condition) {
  code to be executed if condition is true;
} else {
  code to be executed if condition is false;
}
```

```php
<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>
```

## PHP - if...elseif...else

Bayonot if...elseif...elseikkitadan ortiq shartlar uchun turli xil kodlarni bajaradi.

### Sintaksis

```php
if (condition) {
  code to be executed if this condition is true;
} elseif (condition) {
  code to be executed if first condition is false and this condition is true;
} else {
  code to be executed if all conditions are false;
}
```

```php
<?php
$t = date("H");

if ($t < "10") {
  echo "Have a good morning!";
} elseif ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>
```





