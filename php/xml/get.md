# 📔 PHP SimpleXML - Get Node/Attribute Values

## PHP SimpleXML - Get Node/Attribute Values (SimpleXML - tugun/atribut qiymatlarini oling)

SimpleXML bu PHP kengaytmasi bo'lib, u bizga XML ma'lumotlarini osongina boshqarish va olish imkonini beradi.

PHP SimpleXML - tugun qiymatlarini oling
" not.xml " faylidan tugun qiymatlarini oling :


```php
<?php
$xml=simplexml_load_file("note.xml") or die("Error: Cannot create object");
echo $xml->to . "<br>";
echo $xml->from . "<br>";
echo $xml->heading . "<br>";
echo $xml->body;
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```php
Tove
Jani
Reminder
Don't forget me this weekend!
```

Boshqa XML fayli


Faraz qilaylik, bizda " books.xml " nomli XML fayli bor , u quyidagicha ko'rinadi: 

```xml
<?xml version="1.0" encoding="utf-8"?>
<bookstore>
  <book category="COOKING">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="CHILDREN">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book category="WEB">
    <title lang="en-us">XQuery Kick Start</title>
    <author>James McGovern</author>
    <year>2003</year>
    <price>49.99</price>
  </book>
  <book category="WEB">
    <title lang="en-us">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>
```


PHP SimpleXML - Muayyan elementlarning tugun qiymatlarini oling

Quyidagi misol "books.xml" faylidagi birinchi va ikkinchi `<book>` elementlaridagi `<title>` elementining tugun qiymatini oladi: 

```php
<?php
$xml=simplexml_load_file("books.xml") or die("Error: Cannot create object");
echo $xml->book[0]->title . "<br>";
echo $xml->book[1]->title;
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```php
Everyday Italian
Harry Potter
```

PHP SimpleXML - Tugun qiymatlarini olish - Loop

Quyidagi misol "books.xml" faylidagi barcha `<book>` elementlarini aylanib chiqadi va `<title>, <author>, <year> va <price>` elementlarining tugun qiymatlarini oladi:

```php
<?php
$xml=simplexml_load_file("books.xml") or die("Error: Cannot create object");
foreach($xml->children() as $books) {
  echo $books->title . ", ";
  echo $books->author . ", ";
  echo $books->year . ", ";
  echo $books->price . "<br>";
}
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```php
Everyday Italian, Giada De Laurentiis, 2005, 30.00
Harry Potter, J K. Rowling, 2005, 29.99
XQuery Kick Start, James McGovern, 2003, 49.99
Learning XML, Erik T. Ray, 2003, 39.95
```

PHP SimpleXML - Atribut qiymatlarini oling

Quyidagi misol birinchi `<book>` elementining "toifa" atributining atribut qiymatini va ikkinchi `<book>` elementidagi `<title>` elementining "lang" atributining atribut qiymatini oladi:

```php
<?php
$xml=simplexml_load_file("books.xml") or die("Error: Cannot create object");
echo $xml->book[0]['category'] . "<br>";
echo $xml->book[1]->title['lang'];
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```php
COOKING
en
```

PHP SimpleXML - Atribut qiymatlarini olish - Loop
Quyidagi misol "books.xml" faylidagi` <title> `elementlarining atribut qiymatlarini oladi:


```php
<?php
$xml=simplexml_load_file("books.xml") or die("Error: Cannot create object");
foreach($xml->children() as $books) {
  echo $books->title['lang'];
  echo "<br>";
}
?>
```

Yuqoridagi kodning chiqishi quyidagicha bo'ladi:

```php
en
en
en-us
en-us
```














