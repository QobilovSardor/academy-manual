# 📔 PHP Date and Time

## PHP Date and Time (PHP sana va vaqt)

PHP date()funksiyasi sana va/yoki vaqtni formatlash uchun ishlatiladi.


PHP Date() funksiyasi

PHP date()funktsiyasi vaqt tamg'asini yanada o'qilishi mumkin bo'lgan sana va vaqtga formatlaydi.

Sintaksis

```php
date(format,timestamp)
```
<hr>

format - Required. Specifies the format of the timestamp

timestamp - Optional. Specifies a timestamp. Default is the current date and time
<hr>

Vaqt tamg'asi - bu ma'lum bir voqea sodir bo'lgan sana va/yoki vaqtni bildiruvchi belgilar ketma-ketligi.

Sana oling

date() funksiyasining kerakli format parametri sanani (yoki vaqtni) qanday formatlashni belgilaydi.

Bu erda sanalar uchun odatda ishlatiladigan ba'zi belgilar:

- d - oy kunini bildiradi (01 dan 31 gacha)
- m - oyni ifodalaydi (01 dan 12 gacha)
- Y - yilni ifodalaydi (to'rtta raqamda)
- l (kichik 'L') - haftaning kunini bildiradi

Qo'shimcha formatlash uchun "/", "." yoki "-" kabi boshqa belgilar ham belgilar orasiga kiritilishi mumkin.

Quyidagi misol bugungi sanani uch xil usulda formatlaydi:

```php
<?php
echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");
?>
```

PHP Maslahat - Avtomatik mualliflik huquqi yili

date()Veb-saytingizdagi mualliflik huquqi yilini avtomatik yangilash uchun funksiyadan foydalaning :

```php
&copy; 2010-<?php echo date("Y");?>
```

Vaqt oling

Ko'pincha vaqtlarda ishlatiladigan ba'zi belgilar:

- H - soatning 24 soatlik formati (00 dan 23 gacha)
- h - bosh nol bilan soatning 12 soatlik formati (01 dan 12 gacha)
- i - bosh nol bilan daqiqalar (00 dan 59 gacha)
- s - bosh nol bilan soniyalar (00 dan 59 gacha)
- a - Kichik harflar Ante meridiem va Post meridiem (am yoki pm)

Quyidagi misol joriy vaqtni belgilangan formatda chiqaradi:

```php
<?php
echo "The time is " . date("h:i:sa");
?>
```

:::warning Eslatma
Esda tutingki, PHP date() funksiyasi serverning joriy sana/vaqtini qaytaradi!
:::

Vaqt mintaqangizni oling

Agar koddan qaytgan vaqtingiz noto'g'ri bo'lsa, ehtimol bu sizning serveringiz boshqa mamlakatda yoki boshqa vaqt mintaqasi uchun sozlangan bo'lishi mumkin.

Shunday qilib, ma'lum bir joyga ko'ra to'g'ri bo'lishi uchun vaqt kerak bo'lsa, siz foydalanmoqchi bo'lgan vaqt mintaqasini o'rnatishingiz mumkin.

Quyidagi misol vaqt mintaqasini "Amerika/Nyu_York" ga o'rnatadi, so'ngra joriy vaqtni belgilangan formatda chiqaradi:

```php
<?php
date_default_timezone_set("America/New_York");
echo "The time is " . date("h:i:sa");
?>
```

mktime() yordamida sana yarating
date() funksiyasidagi ixtiyoriy vaqt tamg'asi parametri vaqt tamg'asini belgilaydi. Agar o'tkazib yuborilsa, joriy sana va vaqt ishlatiladi (yuqoridagi misollarda bo'lgani kabi).

PHP mktime()funktsiyasi sana uchun Unix vaqt tamg'asini qaytaradi. Unix vaqt tamg'asi Unix Epoch (1970 yil 1 yanvar 00:00:00 GMT) va belgilangan vaqt o'rtasidagi soniyalar sonini o'z ichiga oladi.

Sintaksis

```php
mktime(hour, minute, second, month, day, year)
```

Quyidagi misol date()funksiyadagi bir qator parametrlardan funksiya bilan sana va vaqtni yaratadi mktime():

```php
<?php
$d=mktime(11, 14, 54, 8, 12, 2014);
echo "Created date is " . date("Y-m-d h:i:sa", $d);
?>
```

Strtotime() yordamida satrdan sana yarating
PHP strtotime()funktsiyasi inson tomonidan o'qilishi mumkin bo'lgan sana qatorini Unix vaqt tamg'asiga aylantirish uchun ishlatiladi (1970 yil 1 yanvardan boshlab soniyalar soni 00:00:00 GMT).

Sintaksis

```php
strtotime(time, now)
```

Quyidagi misol funksiyadan sana va vaqtni yaratadi strtotime():

```php
<?php
$d=strtotime("10:30pm April 15 2014");
echo "Created date is " . date("Y-m-d h:i:sa", $d);
?>
```

PHP qatorni sanaga aylantirishda juda aqlli, shuning uchun siz turli qiymatlarni qo'yishingiz mumkin:

```php
<?php
$d=strtotime("tomorrow");
echo date("Y-m-d h:i:sa", $d) . "<br>";

$d=strtotime("next Saturday");
echo date("Y-m-d h:i:sa", $d) . "<br>";

$d=strtotime("+3 Months");
echo date("Y-m-d h:i:sa", $d) . "<br>";
?>
```

Biroq, strtotime()bu mukammal emas, shuning uchun u erga qo'ygan satrlarni tekshirishni unutmang.

Ko'proq sana misollar

Quyidagi misol keyingi olti shanba kunlarini ko'rsatadi:

```php
<?php
$startdate = strtotime("Saturday");
$enddate = strtotime("+6 weeks", $startdate);

while ($startdate < $enddate) {
  echo date("M d", $startdate) . "<br>";
  $startdate = strtotime("+1 week", $startdate);
}
?>
```

Quyidagi misol 4 iyulgacha bo'lgan kunlar sonini ko'rsatadi:

```php
<?php
$d1=strtotime("July 04");
$d2=ceil(($d1-time())/60/60/24);
echo "There are " . $d2 ." days until 4th of July.";
?>
```






























