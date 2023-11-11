# 📔 PHP sikllari

Ko'pincha kod yozganingizda, siz bir xil kod blokining ma'lum bir necha marta qayta-qayta ishlashini xohlaysiz. Shunday qilib, skriptga bir nechta deyarli teng kod qatorlarini qo'shish o'rniga, biz tsikllardan foydalanishimiz mumkin.

Ma'lum bir shart to'g'ri bo'lsa, bir xil kod blokini qayta-qayta bajarish uchun tsikllardan foydalaniladi.

PHP da bizda quyidagi sikl turlari mavjud:

- while- belgilangan shart to'g'ri bo'lsa, kod bloki bo'ylab aylanish
- do...while- kod blokini bir marta aylantiradi, so'ngra belgilangan shart rost bo'lsa, tsiklni takrorlaydi
- for- kod blokini ma'lum bir necha marta aylantiradi
- foreach- massivdagi har bir element uchun kod bloki bo'ylab aylanish

Keyingi boblarda har bir halqa turiga misollar keltiriladi va tushuntiriladi.

## PHP while Loop

Loop while- Belgilangan shart to'g'ri bo'lsa, kod bloki bo'ylab aylanadi.

Belgilangan shart rost bo'lsa, tsikl whilekod blokini bajaradi.

```php
while (condition is true) {
  code to be executed;
}
```

Misollar

Quyidagi misol 1 dan 5 gacha raqamlarni ko'rsatadi:

```php
<?php
$x = 1;

while($x <= 5) {
  echo "The number is: $x <br>";
  $x++;
}
?>
```

Misol tushuntirildi

- $x = 1; - Loop hisoblagichini ($x) ishga tushiring va boshlang'ich qiymatini 1 ga o'rnating
- $x <= 5 - $x 5 dan kichik yoki teng bo'lsa, tsiklni davom ettiring
- $x++; - Har bir iteratsiya uchun sikl hisoblagich qiymatini 1 ga oshiring

Ushbu misol 100 ga o'nlab sanaladi:

```php
<?php
$x = 0;

while($x <= 100) {
  echo "The number is: $x <br>";
  $x+=10;
}
?>
```

Misol tushuntirildi

- $x = 0; - Loop hisoblagichini ($x) ishga tushiring va boshlang'ich qiymatini 0 ga qo'ying
- $x <= 100 - $x 100 dan kichik yoki teng bo'lsa, tsiklni davom ettiring
- $x+=10; - Har bir iteratsiya uchun sikl hisoblagich qiymatini 10 ga oshiring

PHP do... while Loop

Loop do...whilehar doim kod blokini bir marta bajaradi, keyin shartni tekshiradi va belgilangan shart rost bo'lganda tsiklni takrorlaydi.

```php
do {
  code to be executed;
} while (condition is true);
```

Misollar

Quyidagi misol birinchi navbatda $x o'zgaruvchisini 1 ga o'rnatadi ($x = 1). Keyin, do while sikli biroz chiqishni yozadi va keyin $x oʻzgaruvchisini 1 bilan oshiradi. Keyin shart tekshiriladi ($x dan kichikmi yoki 5 ga tengmi?) va sikl ishlashda davom etadi. $x 5 dan kichik yoki teng:

```php
<?php
$x = 1;

do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
?>
```

Ushbu misol $x o'zgaruvchisini 6 ga o'rnatadi, keyin u tsiklni ishga tushiradi va keyin shart tekshiriladi :

```php
<?php
$x = 6;

do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
?>
```

## PHP For

Loop for- kod blokini ma'lum bir necha marta aylantiradi.

Loop forskript necha marta ishlashini oldindan bilganingizda ishlatiladi.

Sintaksis

```php
for (init counter; test counter; increment counter) {
  code to be executed for each iteration;
}
```

Parametrlar:

- init counter : Loop hisoblagich qiymatini ishga tushiring
- test hisoblagichi : Har bir halqa iteratsiyasi uchun baholanadi. Agar u TRUE deb baholansa, tsikl davom etadi. Agar u FALSE deb baholansa, tsikl tugaydi.
- o'sish hisoblagichi : sikl hisoblagich qiymatini oshiradi

Misollar

Quyidagi misol 0 dan 10 gacha raqamlarni ko'rsatadi:

```php
<?php
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
?>
```

Misol tushuntirildi

- $x = 0; - Loop hisoblagichini ($x) ishga tushiring va boshlang'ich qiymatini 0 ga qo'ying
- $x <= 10; - $x 10 dan kichik yoki teng bo'lguncha tsiklni davom ettiring
- $x++ - har bir iteratsiya uchun sikl hisoblagich qiymatini 1 ga oshiring

Ushbu misol 100 ga o'nlab sanaladi:

```php
<?php
for ($x = 0; $x <= 100; $x+=10) {
  echo "The number is: $x <br>";
}
?>
```

Misol tushuntirildi

- $x = 0; - Loop hisoblagichini ($x) ishga tushiring va boshlang'ich qiymatini 0 ga qo'ying
- $x <= 100; - $x 100 dan kichik yoki teng bo'lguncha tsiklni davom ettiring
- $x+=10 - Har bir iteratsiya uchun sikl hisoblagich qiymatini 10 ga oshiring


## PHP foreach Loop

Loop foreach- massivdagi har bir element uchun kod bloki bo'ylab aylanish.

Loop foreachfaqat massivlarda ishlaydi va massivdagi har bir kalit/qiymat juftligi orqali aylanish uchun ishlatiladi.

Sintaksis

```php
foreach ($array as $value) {
  code to be executed;
}
```

Har bir sikl iteratsiyasi uchun joriy massiv elementining qiymati $value ga tayinlanadi va massiv ko‘rsatkichi massivning oxirgi elementiga yetguncha bittaga siljiydi.

Misollar

Quyidagi misol berilgan massivning qiymatlarini chiqaradi ($colors):

```php
<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
?>
```

Quyidagi misol berilgan massivning kalitlari va qiymatlarini ($age) chiqaradi:

```php
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $val) {
  echo "$x = $val<br>";
}
?>
```

## PHP break, continue

breakSiz ushbu qo'llanmaning oldingi bobida ishlatilgan bayonotni allaqachon ko'rgansiz . Bu bayonotdan "sakrash" uchun ishlatilgan switch.

Bayonot breakaylanadan sakrash uchun ham ishlatilishi mumkin.

Bu misol x 4 ga teng bo'lganda tsikldan sakrab chiqadi :

```php
<?php
for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    break;
  }
  echo "The number is: $x <br>";
}
?>
```

PHP Davom etish

Agar belgilangan shart yuzaga kelsa, bayonot continuebitta iteratsiyani (siklda) buzadi va tsikldagi keyingi iteratsiya bilan davom etadi.

Ushbu misol 4 qiymatini o'tkazib yuboradi :

```php
<?php
for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    continue;
  }
  echo "The number is: $x <br>";
}
?>
```

To'xtating va while tsiklida davom eting

breakShuningdek, siz va continuelooplardan foydalanishingiz mumkin while:


```php
<?php
$x = 0;

while($x < 10) {
  if ($x == 4) {
    $x++;
    continue;
  }
  echo "The number is: $x <br>";
  $x++;
}
?>
```

















