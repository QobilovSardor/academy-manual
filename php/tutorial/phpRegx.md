# 📔 PHP Regular Expressions 
## PHP Regular Expressions (PHP muntazam ifodalari)

Muntazam ifoda nima?

Muntazam ibora qidiruv sxemasini tashkil etuvchi belgilar ketma-ketligidir. Matndagi ma'lumotlarni qidirganingizda, siz qidirayotgan narsani tasvirlash uchun ushbu qidiruv namunasidan foydalanishingiz mumkin.

Muntazam ifoda bitta belgi yoki murakkabroq naqsh bo'lishi mumkin.

Oddiy iboralar matnni qidirish va matnni almashtirish operatsiyalarining barcha turlarini bajarish uchun ishlatilishi mumkin.

Sintaksis

PHPda muntazam ifodalar chegaralovchilar, naqsh va ixtiyoriy modifikatorlardan tashkil topgan qatorlardir.

```php
$exp = "/w3schools/i";
```

Yuqoridagi misolda /ajratuvchi , w3schools izlanayotgan naqsh va qidiruvni katta-kichik harflarga sezgir qilmaydigan modifikatordir .i

Ajratuvchi harf, raqam, teskari chiziq yoki bo'sh joy bo'lmagan har qanday belgi bo'lishi mumkin. Eng keng tarqalgan ajratuvchi toʻgʻridan-toʻgʻri chiziq (/) boʻladi, lekin naqshingizda toʻgʻridan-toʻgʻri chiziqchalar mavjud boʻlsa, # yoki ~ kabi boshqa cheklovchilarni tanlash qulay.

Muntazam ifoda funktsiyalari

PHP muntazam ifodalardan foydalanish imkonini beruvchi turli funksiyalarni taqdim etadi. preg_match(), preg_match_all()va funktsiyalari preg_replace()eng ko'p ishlatiladiganlardan ba'zilari:

## preg_match() dan foydalanish

Funktsiya preg_match()sizga satrda naqsh mosliklari mavjudligini bildiradi.

```php
<?php
$str = "Visit W3Schools";
$pattern = "/w3schools/i";
echo preg_match($pattern, $str); // Outputs 1
?>
```

## preg_match_all() dan foydalanish

Funktsiya preg_match_all()sizga satrdagi naqsh uchun nechta moslik topilganligini aytib beradi.

```php
<?php
$str = "The rain in SPAIN falls mainly on the plains.";
$pattern = "/ain/i";
echo preg_match_all($pattern, $str); // Outputs 4
?>
```

## preg_replace() dan foydalanish

Funktsiya preg_replace()satrdagi naqshning barcha mosliklarini boshqa satr bilan almashtiradi.

```php
<?php
$str = "Visit Microsoft!";
$pattern = "/microsoft/i";
echo preg_replace($pattern, "W3Schools", $str); // Outputs "Visit W3Schools!"
?>
```

Muntazam ifoda modifikatorlari

Modifikatorlar qidiruv qanday bajarilishini o'zgartirishi mumkin.

<img src='/image_js/php10.png'>

Muntazam ifoda naqshlari

Qavslar bir qator belgilarni topish uchun ishlatiladi:

<img src='/image_js/php11.png'>

Meta belgilar

Metabelgilar - bu alohida ma'noga ega bo'lgan belgilar:

<img src='/image_js/php12.png'>

Miqdor ko'rsatkichlari

Miqdorlar miqdorlarni belgilaydi:

<img src='/image_js/php13.png'>

:::warning Eslatma
Eslatma: Agar sizning ifodangiz maxsus belgilardan birini qidirishi kerak bo'lsa, ulardan qochish uchun teskari chiziqdan ( \ ) foydalanishingiz mumkin. Masalan, bir yoki bir nechta savol belgilarini qidirish uchun quyidagi ifodadan foydalanishingiz mumkin: $pattern = '/\?+/';
:::

Guruhlash

( )Qavslar yordamida butun naqshlarga kvantlar qo'llashingiz mumkin . Ular, shuningdek, mos keladigan naqsh qismlarini tanlash uchun ishlatilishi mumkin.

```php
<?php
$str = "Apples and bananas.";
$pattern = "/ba(na){2}/i";
echo preg_match($pattern, $str); // Outputs 1
?>
```












