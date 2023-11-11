# 📔 PHP echo va chop etish

PHP bilan chiqishning ikkita asosiy usuli mavjud: echova print.

Ushbu qo'llanmada biz echo yoki printdeyarli har bir misolda foydalanamiz. Shunday qilib, ushbu bobda ushbu ikkita chiqish bayonoti haqida biroz ko'proq ma'lumot mavjud.

## PHP echo va chop etish

echova printko'proq yoki kamroq bir xil. Ularning ikkalasi ham ma'lumotlarni ekranga chiqarish uchun ishlatiladi.

Farqlar kichik: echoqaytarish qiymati yo'q, printqaytarish qiymati esa 1 ga teng, shuning uchun uni ifodalarda ishlatish mumkin. echobir nechta parametrlarni qabul qilishi mumkin (garchi bunday foydalanish kamdan-kam hollarda bo'lsa ham), printbitta argumentni olishi mumkin. echoga nisbatan marjinal tezroq print.

## PHP echo bayonoti

Bayonot echoqavs bilan yoki qavssiz ishlatilishi mumkin: echoyoki echo().

Matnni ko'rsatish

Quyidagi misol echo buyruq yordamida matnni qanday chiqarishni ko'rsatadi (matnda HTML belgilari bo'lishi mumkinligiga e'tibor bering):

```php
<?php
echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
?>
```

O'zgaruvchilarni ko'rsatish

Quyidagi misol matn va o'zgaruvchilarni echo bayonot bilan qanday chiqarishni ko'rsatadi:

```php
<?php
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";
$x = 5;
$y = 4;

echo "<h2>" . $txt1 . "</h2>";
echo "Study PHP at " . $txt2 . "<br>";
echo $x + $y;
?>
```

## PHP chop etish

Bayonot printqavs bilan yoki qavssiz ishlatilishi mumkin: printyoki print().

Matnni ko'rsatish

Quyidagi misol print buyruq yordamida matnni qanday chiqarishni ko'rsatadi (matnda HTML belgilari bo'lishi mumkinligiga e'tibor bering):

```php
<?php
print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";
?>
```

O'zgaruvchilarni ko'rsatish

Quyidagi misol matn va o'zgaruvchilarni printbayonot bilan qanday chiqarishni ko'rsatadi:

```php
<?php
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";
$x = 5;
$y = 4;

print "<h2>" . $txt1 . "</h2>";
print "Study PHP at " . $txt2 . "<br>";
print $x + $y;
?>
```














