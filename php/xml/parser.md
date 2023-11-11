# 📔 PHP SimpleXML Parser

## PHP SimpleXML Parser 

SimpleXML bu PHP kengaytmasi bo'lib, u bizga XML ma'lumotlarini osongina boshqarish va olish imkonini beradi.

SimpleXML parser
SimpleXML - bu daraxtga asoslangan tahlil qiluvchi.

SimpleXML element nomini, atributlarini va matn mazmunini olishning oson yo'lini taqdim etadi, agar siz XML hujjatining tuzilishi yoki tartibini bilsangiz.

SimpleXML XML hujjatini massivlar va ob'ektlar to'plami kabi takrorlash mumkin bo'lgan ma'lumotlar strukturasiga aylantiradi.

DOM yoki Expat parser bilan solishtirganda, SimpleXML elementdan matn ma'lumotlarini o'qish uchun kamroq kod qatorlarini oladi.

O'rnatish
PHP 5 dan SimpleXML funksiyalari PHP yadrosining bir qismidir. Ushbu funktsiyalardan foydalanish uchun o'rnatish talab qilinmaydi.

PHP SimpleXML - Stringdan o'qish
PHP simplexml_load_string()funksiyasi satrdan XML ma'lumotlarini o'qish uchun ishlatiladi.

Bizda XML ma'lumotlarini o'z ichiga olgan o'zgaruvchi bor deb faraz qilaylik, masalan:

```php
$myXMLData =
"<?xml version='1.0' encoding='UTF-8'?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>";
```

Quyidagi misol simplexml_load_string()XML ma'lumotlarini satrdan o'qish uchun funktsiyadan qanday foydalanishni ko'rsatadi:

```php
<?php
$myXMLData =
"<?xml version='1.0' encoding='UTF-8'?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>";

$xml=simplexml_load_string($myXMLData) or die("Error: Cannot create object");
print_r($xml);
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```php
SimpleXMLElement Object ( [to] => Tove [from] => Jani [heading] => Reminder [body] => Don't forget me this weekend! )
```

Xatolar boʻyicha maslahat: Hujjatni yuklashda barcha XML xatolarini olish uchun libxml funksiyasidan foydalaning va keyin xatolarni takrorlang. Quyidagi misol buzilgan XML qatorini yuklashga harakat qiladi:

```php
<?php
libxml_use_internal_errors(true);
$myXMLData =
"<?xml version='1.0' encoding='UTF-8'?>
<document>
<user>John Doe</wronguser>
<email>john@example.com</wrongemail>
</document>";

$xml = simplexml_load_string($myXMLData);
if ($xml === false) {
  echo "Failed loading XML: ";
  foreach(libxml_get_errors() as $error) {
    echo "<br>", $error->message;
  }
} else {
  print_r($xml);
}
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```php
Failed loading XML:
Opening and ending tag mismatch: user line 3 and wronguser
Opening and ending tag mismatch: email line 4 and wrongemail
```

PHP SimpleXML - Fayldan o'qish
PHP simplexml_load_file()funktsiyasi fayldan XML ma'lumotlarini o'qish uchun ishlatiladi.

Bizda " not.xml " nomli XML fayli bor , u quyidagicha ko'rinadi:

```php
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```


Quyidagi misolda simplexml_load_file()fayldan XML ma'lumotlarini o'qish funksiyasidan qanday foydalanish ko'rsatilgan:

```php
<?php
$xml=simplexml_load_file("note.xml") or die("Error: Cannot create object");
print_r($xml);
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```php
SimpleXMLElement Object ( [to] => Tove [from] => Jani [heading] => Reminder [body] => Don't forget me this weekend! )
```

Maslahat: Keyingi bob SimpleXML yordamida XML faylidan tugun qiymatlarini qanday olish/qayta olish mumkinligini ko'rsatadi!

















