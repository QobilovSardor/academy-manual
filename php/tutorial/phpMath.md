# 📔 PHP matematika

## PHP pi() funktsiyasi

Funktsiya pi()PI qiymatini qaytaradi:

```php
<?php
echo(pi()); // returns 3.1415926535898
?>
```

## PHP min() va max() funksiyalari

Argumentlar roʻyxatidagi eng past yoki eng yuqori qiymatni topish uchun min()va funksiyalaridan foydalanish mumkin:max()

```php
<?php
echo(min(0, 150, 30, 20, -8, -200));  // returns -200
echo(max(0, 150, 30, 20, -8, -200));  // returns 150
?>
```

## PHP abs() funktsiyasi

Funktsiya abs()raqamning mutlaq (musbat) qiymatini qaytaradi:

```php 
<?php
echo(abs(-6.7));  // returns 6.7
?>
```

## PHP sqrt() funktsiyasi

Funktsiya sqrt()raqamning kvadrat ildizini qaytaradi:

```php
<?php
echo(sqrt(64));  // returns 8
?>
```

## PHP round() funktsiyasi

Funktsiya round()suzuvchi nuqtali sonni eng yaqin butun songa yaxlitlaydi:

```php
<?php
echo(round(0.60));  // returns 1
echo(round(0.49));  // returns 0
?>
```

## Tasodifiy raqamlar

Funktsiya rand()tasodifiy sonni hosil qiladi:

```php
<?php
echo(rand());
?>
```

Tasodifiy sonni ko'proq nazorat qilish uchun siz qaytariladigan eng kichik tamsayı va eng yuqori butun sonni belgilash uchun ixtiyoriy min va maksimal parametrlarni qo'shishingiz mumkin.

Masalan, agar siz 10 dan 100 gacha (shu jumladan) tasodifiy butun sonni olishni istasangiz, dan foydalaning rand(10, 100):

```php
<?php
echo(rand(10, 100));
?>
```


