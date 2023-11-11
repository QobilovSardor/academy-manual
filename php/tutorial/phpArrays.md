# 📔 PHP Arrays ( Massiv )

## PHP Arrays ( Massiv )

Massiv bitta o'zgaruvchida bir nechta qiymatlarni saqlaydi:

```php
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>
```

Massiv nima?

Massiv - bu bir vaqtning o'zida bir nechta qiymatlarni ushlab turishi mumkin bo'lgan maxsus o'zgaruvchi.

Agar sizda elementlar ro'yxati (masalan, avtomobil nomlari ro'yxati) bo'lsa, mashinalarni bitta o'zgaruvchida saqlash quyidagicha ko'rinishi mumkin:

```php
$cars1 = "Volvo";
$cars2 = "BMW";
$cars3 = "Toyota";
```

Biroq, agar siz mashinalar orasidan aylanib, ma'lum birini topmoqchi bo'lsangiz nima bo'ladi? Va agar sizda 3 ta emas, balki 300 ta mashina bo'lsa-chi?

Yechim massiv yaratishdir!

Massiv bitta nom ostida ko'p qiymatlarni saqlashi mumkin va siz indeks raqamiga murojaat qilish orqali qiymatlarga kirishingiz mumkin.

PHP da massiv yarating

PHP da array()funksiya massiv yaratish uchun ishlatiladi:

```php
array();
```

PHP da massivlarning uch turi mavjud:

Indekslangan massivlar - sonli indeksli massivlar
Assotsiativ massivlar - nomidagi kalitlarga ega massivlar
Ko'p o'lchovli massivlar - bir yoki bir nechta massivni o'z ichiga olgan massivlar

Massiv uzunligini oling - count() funktsiyasi

Funktsiya count()massiv uzunligini (elementlar sonini) qaytarish uchun ishlatiladi:

```php
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);
?>
```

## PHP Indexed Arrays (PHP indekslangan massivlar)

PHP indekslangan massivlar

Indekslangan massivlarni yaratishning ikki yo'li mavjud:

Indeks avtomatik ravishda tayinlanishi mumkin (indeks har doim 0 dan boshlanadi), masalan:

```php
$cars = array("Volvo", "BMW", "Toyota");
```

yoki indeks qo'lda tayinlanishi mumkin

```php
$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";
```

Quyidagi misol $cars nomli indekslangan massivni yaratadi, unga uchta elementni tayinlaydi va keyin massiv qiymatlarini o'z ichiga olgan matnni chop etadi:

```php
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>
```

Indekslangan massiv orqali aylanish

Indekslangan massivning barcha qiymatlarini aylantirish va chop etish uchun siz forquyidagi kabi tsikldan foydalanishingiz mumkin:

```php
<?php
$cars = array("Volvo", "BMW", "Toyota");
$arrlength = count($cars);

for($x = 0; $x < $arrlength; $x++) {
  echo $cars[$x];
  echo "<br>";
}
?>
```

## PHP Associative Arrays (PHP assotsiativ massivlari)

PHP assotsiativ massivlari
Assotsiativ massivlar - siz ularga tayinlagan nomli kalitlardan foydalanadigan massivlar.

Assotsiativ massivni yaratishning ikki yo'li mavjud: 

```php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
```

yoki:

```php
$age['Peter'] = "35";
$age['Ben'] = "37";
$age['Joe'] = "43";
```

Nomlangan kalitlardan keyin skriptda foydalanish mumkin:

```php
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
?>
```

Assotsiativ massiv orqali aylanish

Assotsiativ massivning barcha qiymatlarini aylantirish va chop etish uchun siz foreachquyidagi kabi tsikldan foydalanishingiz mumkin:

```php
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>
```

## PHP Multidimensional Arrays

PHP - Ko'p o'lchovli massivlar

Ko'p o'lchovli massiv bir yoki bir nechta massivni o'z ichiga olgan massivdir.

PHP ikki, uch, to'rt, besh yoki undan ortiq darajadagi chuqurlikdagi ko'p o'lchovli massivlarni qo'llab-quvvatlaydi. Biroq, ko'pchilik uchun uch darajadan ortiq chuqurlikdagi massivlarni boshqarish qiyin.

:::warning Eslatma
Massivning o'lchami elementni tanlash uchun kerak bo'lgan indekslar sonini ko'rsatadi.

Ikki o'lchovli massiv uchun elementni tanlash uchun ikkita indeks kerak
Uch o'lchovli massiv uchun elementni tanlash uchun uchta indeks kerak
:::

PHP - Ikki o'lchovli massivlar
Ikki o'lchovli massiv - massivlar massivi (uch o'lchovli massiv - massivlar massivi).

Birinchidan, quyidagi jadvalni ko'rib chiqing:

<img src='/image_js/php9.png'>

Yuqoridagi jadvaldagi ma'lumotlarni ikki o'lchovli massivda saqlashimiz mumkin, masalan:

```php
$cars = array (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
);
```

Endi ikki o'lchovli $cars massivi to'rtta massivni o'z ichiga oladi va u ikkita indeksga ega: qator va ustun.

$cars massivining elementlariga kirish uchun biz ikkita indeksni (satr va ustun) ko'rsatishimiz kerak:

```php
<?php
echo $cars[0][0].": In stock: ".$cars[0][1].", sold: ".$cars[0][2].".<br>";
echo $cars[1][0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2].".<br>";
echo $cars[2][0].": In stock: ".$cars[2][1].", sold: ".$cars[2][2].".<br>";
echo $cars[3][0].": In stock: ".$cars[3][1].", sold: ".$cars[3][2].".<br>";
?>
```

forShuningdek, $cars massivining elementlarini olish uchun boshqa sikl ichiga halqa qo'yishimiz mumkin for(biz hali ham ikkita indeksni ko'rsatishimiz kerak):

```php
<?php
for ($row = 0; $row < 4; $row++) {
  echo "<p><b>Row number $row</b></p>";
  echo "<ul>";
  for ($col = 0; $col < 3; $col++) {
    echo "<li>".$cars[$row][$col]."</li>";
  }
  echo "</ul>";
}
?>
```

## PHP Sorting Arrays (PHP saralash massivlari)

Massivdagi elementlarni alifbo yoki son tartibida, kamayish yoki o'sish bo'yicha tartiblash mumkin.

PHP - massivlar uchun tartiblash funktsiyalari
Ushbu bobda biz quyidagi PHP massivlarini saralash funksiyalarini ko'rib chiqamiz:

- sort()- massivlarni o'sish tartibida tartiblash
- rsort()- massivlarni kamayish tartibida tartiblash
- asort()- assotsiativ massivlarni qiymati bo'yicha o'sish tartibida tartiblash
- ksort()- assotsiativ massivlarni kalitga ko'ra, o'sish tartibida tartiblash
- arsort()- assotsiativ massivlarni qiymatiga qarab kamayish tartibida tartiblash
- krsort()- assotsiativ massivlarni kalitga ko'ra, kamayish tartibida tartiblash

Massivni o'sish tartibida tartiblash - sort()

Quyidagi misol $cars massivining elementlarini alifbo tartibida o'sish tartibida tartiblaydi:

```php
<?php
$cars = array("Volvo", "BMW", "Toyota");
sort($cars);
?>
```

Quyidagi misol $numbers massivining elementlarini o'sish tartibida tartiblaydi:

```php
<?php
$numbers = array(4, 6, 2, 22, 11);
sort($numbers);
?>
```

Massivni kamayish tartibida tartiblash - rsort()

Quyidagi misol $cars massivining elementlarini alifbo tartibida kamayishiga qarab tartiblaydi:

```php
<?php
$cars = array("Volvo", "BMW", "Toyota");
rsort($cars);
?>
```

Quyidagi misolda $numbers massivining elementlari kamayishiga qarab tartiblangan:

```php
<?php
$numbers = array(4, 6, 2, 22, 11);
rsort($numbers);
?>
```

Massivni saralash (o'sish tartibi), qiymat bo'yicha - asort()

Quyidagi misol assotsiativ massivni qiymat bo'yicha o'sish tartibida tartiblaydi:

```php
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
asort($age);
?>
```

Massivni saralash (o'sish tartibi), kalit bo'yicha - ksort()
Quyidagi misol assotsiativ massivni kalitga ko'ra o'sish tartibida tartiblaydi:

```php
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
ksort($age);
?>
```

Massivni saralash (kamayish tartibida), qiymat bo'yicha - arsort()

Quyidagi misol assotsiativ massivni qiymatga qarab kamayish tartibida tartiblaydi:

```php
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
arsort($age);
?>
```

Massivni tartiblash (kamayish tartibi), kalit bo'yicha - krsort()

Quyidagi misol assotsiativ massivni kalitga qarab kamayish tartibida tartiblaydi:

```php
<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
krsort($age);
?>
```

































