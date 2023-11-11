# 📔 PHP OOP - Classes and Objects

## PHP OOP - Classes and Objects (PHP OOP - Sinflar va ob'ektlar)

Sinf ob'ektlar uchun shablon, ob'ekt esa sinfning namunasidir.

OOP ishi

Faraz qilaylik, bizda Fruit nomli sinf bor. Meva nomi, rangi, vazni va boshqalar kabi xususiyatlarga ega bo'lishi mumkin. Ushbu xususiyatlar qiymatlarini saqlash uchun $name, $color va $weight kabi o'zgaruvchilarni belgilashimiz mumkin.

Alohida ob'ektlar (olma, banan va boshqalar) yaratilganda, ular sinfdan barcha xususiyatlar va xatti-harakatlarni meros qilib oladi, lekin har bir ob'ekt xususiyatlar uchun turli qiymatlarga ega bo'ladi.

Sinfni aniqlang

class Sinf kalit so'z, undan keyin sinf nomi va bir juft jingalak qavs ({}) yordamida aniqlanadi . Uning barcha xossalari va usullari qavs ichiga kiradi:

SintaksisO'zingizning PHP serveringizni oling

```php
<?php
class Fruit {
  // code goes here...
}
?>
```

Quyida biz ikkita xususiyatdan ($name va $color) va $name xossasini oʻrnatish va olish uchun set_name() va get_name() ikkita usuldan iborat Fruit nomli sinfni eʼlon qilamiz:

```php
<?php
class Fruit {
  // Properties
  public $name;
  public $color;

  // Methods
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}
?>
```

:::warning Eslatma 
Eslatma: Sinfda o'zgaruvchilar xossalar, funksiyalar esa metodlar deb ataladi!
:::


Ob'ektlarni aniqlang

Ob'ektlarsiz sinflar hech narsa emas! Biz bir sinfdan bir nechta ob'ektlarni yaratishimiz mumkin. Har bir ob'ekt sinfda belgilangan barcha xossa va usullarga ega, lekin ular har xil xususiyat qiymatlariga ega bo'ladi.

Sinf ob'ektlari newkalit so'z yordamida yaratiladi.

Quyidagi misolda $apple va $banana Fruit sinfining misollaridir:

```php
<?php
class Fruit {
  // Properties
  public $name;
  public $color;

  // Methods
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}

$apple = new Fruit();
$banana = new Fruit();
$apple->set_name('Apple');
$banana->set_name('Banana');

echo $apple->get_name();
echo "<br>";
echo $banana->get_name();
?>
```

Quyidagi misolda biz $color xususiyatini sozlash va olish uchun Fruit sinfiga yana ikkita usul qo'shamiz:

```php
<?php
class Fruit {
  // Properties
  public $name;
  public $color;

  // Methods
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
  function set_color($color) {
    $this->color = $color;
  }
  function get_color() {
    return $this->color;
  }
}

$apple = new Fruit();
$apple->set_name('Apple');
$apple->set_color('Red');
echo "Name: " . $apple->get_name();
echo "<br>";
echo "Color: " . $apple->get_color();
?>
```

PHP - $this kalit so'zi

$this kalit so'zi joriy ob'ektga ishora qiladi va faqat usullar ichida mavjud.

Quyidagi misolga qarang:

```php
<?php
class Fruit {
  public $name;
}
$apple = new Fruit();
?>
```

Xo'sh, $name xususiyati qiymatini qayerda o'zgartirishimiz mumkin? Ikkita yo'l bor:

1. Sinf ichida (set_name() usulini qo'shib, $this dan foydalaning):

```php
<?php
class Fruit {
  public $name;
  function set_name($name) {
    $this->name = $name;
  }
}
$apple = new Fruit();
$apple->set_name("Apple");

echo $apple->name;
?>
```

2. Sinfdan tashqari (xususiyat qiymatini bevosita o'zgartirish orqali):

```php
<?php
class Fruit {
  public $name;
}
$apple = new Fruit();
$apple->name = "Apple";

echo $apple->name;
?>
```

PHP - instanceof
instanceofOb'ektning ma'lum bir sinfga tegishli ekanligini tekshirish uchun kalit so'zdan foydalanishingiz mumkin :

```php
<?php
$apple = new Fruit();
var_dump($apple instanceof Fruit);
?>
```













