# 📔 PHP XML DOM Parser

## PHP XML DOM Parser (XML DOM tahlilchisi)

O'rnatilgan DOM tahlilchisi PHP da XML hujjatlarini qayta ishlash imkonini beradi.

XML DOM parser
DOM parser - bu daraxtga asoslangan tahlil qiluvchi.

Quyidagi XML hujjat qismiga qarang:

```php
<?xml version="1.0" encoding="UTF-8"?>
<from>Jani</from>
```

DOM yuqoridagi XML ni daraxt tuzilishi sifatida ko'radi:

- 1-daraja: XML hujjati
- 2-daraja: Ildiz element: `<dan>`
- 3-daraja: Matn elementi: “Jani”

O'rnatish
DOM parser funksiyalari PHP yadrosining bir qismidir. Ushbu funktsiyalardan foydalanish uchun o'rnatish kerak emas.

XML fayli
Quyidagi XML fayli ("note.xml") bizning misolimizda ishlatiladi:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

XMLni yuklash va chiqarish
Biz XML tahlilchisini ishga tushirmoqchimiz, xml ni yuklaymiz va uni chiqarmoqchimiz:

```php
<?php
$xmlDoc = new DOMDocument();
$xmlDoc->load("note.xml");

print $xmlDoc->saveXML();
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```xml
Tove Jani Reminder Don't forget me this weekend!
```

Brauzer oynasida "Manbani ko'rish" ni tanlasangiz, quyidagi HTMLni ko'rasiz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
```

Yuqoridagi misol DOMDocument-Object-ni yaratadi va unga "note.xml" dan XML-ni yuklaydi.

Keyin saveXML() funksiyasi ichki XML hujjatini satrga joylashtiradi, shuning uchun biz uni chiqarishimiz mumkin.

XML orqali aylanish

Biz XML tahlilchisini ishga tushirmoqchimiz, XML-ni yuklaymiz va `<note>` elementining barcha elementlarini aylantirmoqchimiz:

```php
<?php
$xmlDoc = new DOMDocument();
$xmlDoc->load("note.xml");

$x = $xmlDoc->documentElement;
foreach ($x->childNodes AS $item) {
  print $item->nodeName . " = " . $item->nodeValue . "<br>";
}
?>
```


Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```xml
#text =
to = Tove
#text =
from = Jani
#text =
heading = Reminder
#text =
body = Don't forget me this weekend!
#text =
```

Yuqoridagi misolda har bir element orasida bo'sh matn tugunlari mavjudligini ko'rasiz.

XML yaratilganda, u ko'pincha tugunlar orasidagi bo'shliqlarni o'z ichiga oladi. XML DOM tahlilchisi ularni oddiy elementlar sifatida ko'radi va agar siz ulardan bexabar bo'lsangiz, ular ba'zan muammolarga olib keladi.















