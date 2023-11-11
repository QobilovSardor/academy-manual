# 📔 PHP Functions

PHP ning haqiqiy kuchi uning funksiyalaridan kelib chiqadi.

PHP-da 1000 dan ortiq o'rnatilgan funksiyalar mavjud va qo'shimcha ravishda siz o'zingizning shaxsiy funksiyalaringizni yaratishingiz mumkin.

## PHP o'rnatilgan funktsiyalari
PHP-da 1000 dan ortiq o'rnatilgan funksiyalar mavjud bo'lib, ularni to'g'ridan-to'g'ri skript ichidan ma'lum bir vazifani bajarish uchun chaqirish mumkin.

## PHP foydalanuvchi tomonidan belgilangan funksiyalar

O'rnatilgan PHP funktsiyalaridan tashqari, o'zingizning funksiyalaringizni yaratishingiz mumkin.

- Funktsiya - bu dasturda qayta-qayta ishlatilishi mumkin bo'lgan bayonotlar blokidir.
- Sahifa yuklanganda funksiya avtomatik ravishda bajarilmaydi.
- Funktsiya funksiyaga chaqiruv orqali bajariladi.

## PHP da foydalanuvchi tomonidan belgilangan funksiya yarating

Foydalanuvchi tomonidan belgilangan funktsiya deklaratsiyasi quyidagi so'z bilan boshlanadi function:

Sintaksis

```php
function functionName() {
  code to be executed;
}
```

Maslahat: Funksiya nima qilayotganini aks ettiruvchi nom bering!

Quyidagi misolda biz "writeMsg()" nomli funksiya yaratamiz. Ochilgan jingalak qavs ( { ) funksiya kodining boshlanishini, yopilish jingalak qavs ( } ) esa funksiyaning tugashini bildiradi. Funktsiya "Salom dunyo!"ni chiqaradi. Funksiyani chaqirish uchun uning nomini keyin qavs () qo'yib yozing.

```php
<?php
function writeMsg() {
  echo "Hello world!";
}

writeMsg(); // call the function
?>
```
## PHP funksiya argumentlari

Ma'lumot argumentlar orqali funktsiyalarga uzatilishi mumkin. Argument xuddi o'zgaruvchiga o'xshaydi.

Argumentlar funksiya nomidan keyin qavslar ichida ko'rsatiladi. Siz xohlagancha argumentlar qo'shishingiz mumkin, ularni vergul bilan ajratib qo'ying.

Quyidagi misolda bitta argumentli funksiya mavjud ($fname). familyName() funksiyasi chaqirilganda, biz ham nomni (masalan, Jani) o'tkazamiz va bu nom funksiya ichida ishlatiladi, bu bir nechta turli ismlarni chiqaradi, lekin teng familiya:

```php
<?php
function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");
familyName("Kai Jim");
familyName("Borge");
?>
```

Quyidagi misolda ikkita argumentli funksiya mavjud ($fname va $year):

```php
<?php
function familyName($fname, $year) {
  echo "$fname Refsnes. Born in $year <br>";
}

familyName("Hege", "1975");
familyName("Stale", "1978");
familyName("Kai Jim", "1983");
?>
```

## PHP - bu erkin yozilgan til

Yuqoridagi misolda e'tibor bering, biz PHP ga o'zgaruvchining qaysi ma'lumotlar turi ekanligini aytishimiz shart emas edi.

PHP avtomatik ravishda ma'lumotlar turini o'zgaruvchiga uning qiymatiga qarab bog'laydi. Ma'lumotlar turlari qat'iy ma'noda o'rnatilmaganligi sababli, siz xatoga yo'l qo'ymasdan butun songa satr qo'shish kabi narsalarni qilishingiz mumkin.

PHP 7 da turdagi deklaratsiyalar qo'shildi. Bu bizga funktsiyani e'lon qilishda kutilayotgan ma'lumotlar turini ko'rsatish imkoniyatini beradi va deklaratsiyani qo'shish orqali strict ma'lumotlar turi mos kelmasa, "O'limga olib keladigan xato" chiqaradi.

Quyidagi misolda biz funksiyaga raqam va satrni ishlatmasdan yuborishga harakat qilamiz strict:

```php
<?php
function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, "5 days");
// since strict is NOT enabled "5 days" is changed to int(5), and it will return 10
?>
```

Belgilash uchun strictbiz sozlashimiz kerak declare(strict_types=1);. Bu PHP faylining birinchi qatorida bo'lishi kerak.

Quyidagi misolda biz funktsiyaga raqam va satr yuborishga harakat qilamiz, ammo bu erda biz deklaratsiyani qo'shdik strict :

```php
<?php declare(strict_types=1); // strict requirement

function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, "5 days");
// since strict is enabled and "5 days" is not an integer, an error will be thrown
?>
```

## PHP standart argument qiymati

Quyidagi misol standart parametrdan qanday foydalanishni ko'rsatadi. Agar biz setHeight() funksiyasini argumentlarsiz chaqirsak, u standart qiymatni argument sifatida oladi:

```php
<?php declare(strict_types=1); // strict requirement
function setHeight(int $minheight = 50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight(); // will use the default value of 50
setHeight(135);
setHeight(80);
?>
```

## PHP funktsiyalari - qiymatlarni qaytarish

Funktsiyaga qiymat qaytarishiga ruxsat berish uchun quyidagi returnbayonotdan foydalaning:

```php
<?php declare(strict_types=1); // strict requirement
function sum(int $x, int $y) {
  $z = $x + $y;
  return $z;
}

echo "5 + 10 = " . sum(5, 10) . "<br>";
echo "7 + 13 = " . sum(7, 13) . "<br>";
echo "2 + 4 = " . sum(2, 4);
?>
```

## PHP Qaytish turi deklaratsiyasi

PHP 7 shuningdek, bayonot uchun turdagi deklaratsiyalarni qo'llab-quvvatlaydi return . Funktsiya argumentlari uchun turdagi deklaratsiyada bo'lgani kabi, qat'iy talabni yoqish orqali u turdagi nomuvofiqlikda "O'limga olib keladigan xato" chiqaradi.

Qaytish funksiyasi turini e'lon qilish uchun funktsiyani e'lon :qilishda ochiladigan jingalak ( {) qavs oldiga ikki nuqta ( ) va turni qo'shing.

Quyidagi misolda biz funksiya uchun qaytish turini belgilaymiz:

```php
<?php declare(strict_types=1); // strict requirement
function addNumbers(float $a, float $b) : float {
  return $a + $b;
}
echo addNumbers(1.2, 5.2);
?>
```

Argument turlaridan farqli qaytish turini belgilashingiz mumkin, lekin qaytarish toʻgʻri turi ekanligiga ishonch hosil qiling:

```php
<?php declare(strict_types=1); // strict requirement
function addNumbers(float $a, float $b) : int {
  return (int)($a + $b);
}
echo addNumbers(1.2, 5.2);
?>
```

## Argumentlarni havola bo'yicha uzatish

PHP da argumentlar odatda qiymat boʻyicha uzatiladi, yaʼni funksiyada qiymatning nusxasi ishlatiladi va funksiyaga oʻtkazilgan oʻzgaruvchini oʻzgartirib boʻlmaydi.

Funksiya argumenti havola orqali uzatilsa, argumentga kiritilgan oʻzgartirishlar kiritilgan oʻzgaruvchini ham oʻzgartiradi. Funksiya argumentini havolaga aylantirish uchun operator & ishlatiladi:

```php
<?php
function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num;
?>
```





