# 📔 PHP o'zgaruvchilari

O'zgaruvchilar ma'lumotni saqlash uchun "konteynerlar" dir.

## PHP o'zgaruvchilari

### PHP o'zgaruvchilarni yaratish (e'lon qilish).

PHP da oʻzgaruvchi $belgisi bilan boshlanadi, keyin esa oʻzgaruvchining nomi keladi:

```php
<?php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
?>
```

Yuqoridagi bayonotlar bajarilgandan so'ng, o'zgaruvchi $txtqiymatni ushlab turadi Hello world!, o'zgaruvchi $xqiymatni 5va o'zgaruvchi $yqiymatni ushlab turadi 10.5.

Eslatma: O'zgaruvchiga matn qiymatini tayinlaganingizda, qiymat atrofida tirnoq qo'ying.

Eslatma: Boshqa dasturlash tillaridan farqli o'laroq, PHP da o'zgaruvchini e'lon qilish buyrug'i yo'q. U birinchi marta unga qiymat bergan paytda yaratiladi.

### PHP o'zgaruvchilari

O'zgaruvchining qisqa nomi (x va y kabi) yoki ko'proq tavsiflovchi nom (yosh, carname, jami_volume) bo'lishi mumkin.

PHP o'zgaruvchilari uchun qoidalar:

- O'zgaruvchi belgidan boshlanadi $, keyin o'zgaruvchining nomi
- O'zgaruvchi nomi harf yoki pastki chiziq belgisi bilan boshlanishi kerak
- O'zgaruvchi nomi raqam bilan boshlanmaydi
- Oʻzgaruvchi nomi faqat alfa-raqamli belgilar va pastki chiziqdan iborat boʻlishi mumkin (Az, 0-9 va _ )
- O'zgaruvchilar nomlari katta-kichik harflarga sezgir ( $ageva $AGEikki xil o'zgaruvchidir)


::: warning Eslatma
Esda tutingki, PHP o'zgaruvchilar nomlari katta-kichik harflarga sezgir!
:::

### Chiqish o'zgaruvchilari

PHP echobayonoti ko'pincha ma'lumotlarni ekranga chiqarish uchun ishlatiladi.

Quyidagi misol matn va o'zgaruvchini qanday chiqarishni ko'rsatadi:

```php
<?php
$txt = "sardor.com";
echo "I love $txt!";
?>
```

Quyidagi misol yuqoridagi misol bilan bir xil natija beradi:

```php
<?php
$txt = "W3Schools.com";
echo "I love " . $txt . "!";
?>
```

Quyidagi misol ikkita o'zgaruvchining yig'indisini chiqaradi:

```php
<?php
$x = 5;
$y = 4;
echo $x + $y;
?>
```

### PHP - bu erkin yozilgan til

Yuqoridagi misolda e'tibor bering, biz PHP ga o'zgaruvchining qaysi ma'lumotlar turi ekanligini aytishimiz shart emas edi.

PHP avtomatik ravishda ma'lumotlar turini o'zgaruvchiga uning qiymatiga qarab bog'laydi. Ma'lumotlar turlari qat'iy ma'noda o'rnatilmaganligi sababli, siz xatoga yo'l qo'ymasdan butun songa satr qo'shish kabi narsalarni qilishingiz mumkin.

PHP 7 da turdagi deklaratsiyalar qo'shildi. Bu funktsiyani e'lon qilishda kutilayotgan ma'lumotlar turini ko'rsatish imkoniyatini beradi va qat'iy talabni yoqish orqali u turdagi nomuvofiqlikda "Muhim xato" chiqaradi.

## PHP o'zgaruvchilar doirasi

PHP da o'zgaruvchilar skriptning istalgan joyida e'lon qilinishi mumkin.

O'zgaruvchining qamrovi - bu o'zgaruvchiga havola qilish/ishlatish mumkin bo'lgan skript qismi.

PHP uch xil o'zgaruvchan doiraga ega:

- mahalliy
- global
- statik

### Global va mahalliy qamrov
Funktsiyadan tashqarida e'lon qilingan o'zgaruvchi GLOBAL SCOPEga ega va unga faqat funksiyadan tashqarida kirish mumkin:

```php
<?php
$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";
?>
```

Funktsiya ichida e'lon qilingan o'zgaruvchiga LOCAL SCOPE ega va unga faqat shu funksiya doirasida kirish mumkin:

Mahalliy qamrovli o'zgaruvchi:

```php
<?php
function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";
?>
```

Siz turli funktsiyalarda bir xil nomli mahalliy o'zgaruvchilarga ega bo'lishingiz mumkin, chunki mahalliy o'zgaruvchilar faqat ular e'lon qilingan funktsiya tomonidan tan olinadi.

### PHP global kalit so'z

Kalit globalso'z global o'zgaruvchiga funktsiya ichidan kirish uchun ishlatiladi.

Buning uchun globalo'zgaruvchilardan oldin kalit so'zdan foydalaning (funktsiya ichida):

```php
<?php
$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();
echo $y; // outputs 15
?>
```

PHP ham barcha global o'zgaruvchilarni deb nomlangan massivda saqlaydi . O'zgaruvchining nomini saqlaydi . Ushbu massivga funksiyalar ichidan ham kirish mumkin va global o'zgaruvchilarni to'g'ridan-to'g'ri yangilash uchun ishlatilishi mumkin.$GLOBALS[index]index

Yuqoridagi misolni quyidagicha qayta yozish mumkin:

```php
<?php
$x = 5;
$y = 10;

function myTest() {
  $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}

myTest();
echo $y; // outputs 15
?>
```

### PHP Statik kalit so'z

Odatda, funktsiya tugallanganda/bajarilganda, uning barcha o'zgaruvchilari o'chiriladi. Biroq, ba'zida biz mahalliy o'zgaruvchining o'chirilishini xohlaymiz. Bu bizga keyingi ish uchun kerak.

Buning uchun statico'zgaruvchini birinchi marta e'lon qilganingizda kalit so'zdan foydalaning:

```php
<?php
function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();
myTest();
myTest();
?>
```

Keyin, har safar funktsiya chaqirilganda, bu o'zgaruvchida funksiya oxirgi chaqirilgan paytdan boshlab mavjud bo'lgan ma'lumotlar saqlanib qoladi.





