# 📔 PHP and JSON

## PHP and JSON 

JSON nima?

JSON JavaScript Object Notation degan ma'noni anglatadi va ma'lumotlarni saqlash va almashish uchun sintaksisdir.

JSON formati matnga asoslangan format bo'lgani uchun uni serverga va serverdan osongina yuborish va istalgan dasturlash tili tomonidan ma'lumotlar formati sifatida foydalanish mumkin.

PHP va JSON

PHP da JSON bilan ishlash uchun baʼzi oʻrnatilgan funksiyalar mavjud.

Birinchidan, biz quyidagi ikkita funktsiyani ko'rib chiqamiz:

- json_encode()
- json_decode()

PHP - json_encode()
JSON_encode () funksiyasi qiymatni JSON formatiga kodlash uchun ishlatiladi.

```php
<?php
$age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);

echo json_encode($age);
?>
```

```php
<?php
$cars = array("Volvo", "BMW", "Toyota");

echo json_encode($cars);
?>
```

PHP - json_decode()

JSON_decode () funksiyasi JSON obyektini PHP obyektiga yoki assotsiativ massivga dekodlash uchun ishlatiladi.

```php
<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

var_dump(json_decode($jsonobj));
?>
```

json_decode () funktsiyasi sukut bo'yicha ob'ektni qaytaradi. json_decode () funksiyasi ikkinchi parametrga ega va "true"ga o'rnatilganda, JSON ob'ektlari assotsiativ massivlarga dekodlanadi.

```php
<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

var_dump(json_decode($jsonobj, true));
?>
```

PHP - dekodlangan qiymatlarga kirish

Ob'ektdan va assotsiativ massivdan dekodlangan qiymatlarga kirishning ikkita misoli:

Misol
Ushbu misol PHP ob'ektidagi qiymatlarga qanday kirishni ko'rsatadi:

```php
<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$obj = json_decode($jsonobj);

echo $obj->Peter;
echo $obj->Ben;
echo $obj->Joe;
?>
```

Misol
Ushbu misol PHP assotsiativ massividagi qiymatlarga qanday kirishni ko'rsatadi:

```php
<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$arr = json_decode($jsonobj, true);

echo $arr["Peter"];
echo $arr["Ben"];
echo $arr["Joe"];
?>
```

PHP - qiymatlar bo'ylab aylanish
Bundan tashqari, qiymatlarni foreach() tsikli bilan aylantirishingiz mumkin :

Misol
Ushbu misol PHP ob'ektining qiymatlari orasida aylanishni ko'rsatadi:

```php
<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$obj = json_decode($jsonobj);

foreach($obj as $key => $value) {
  echo $key . " => " . $value . "<br>";
}
?>
```

Misol
Ushbu misol PHP assotsiativ massivining qiymatlari bo'ylab aylanishni ko'rsatadi:

```php
<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$arr = json_decode($jsonobj, true);

foreach($arr as $key => $value) {
  echo $key . " => " . $value . "<br>";
}
?>
```
























