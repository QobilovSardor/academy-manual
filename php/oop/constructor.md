# 📔 PHP OOP - Constructor

## PHP OOP - Constructor 

PHP - __qurilish 

Konstruktor ob'ektni yaratishda ob'ekt xususiyatlarini ishga tushirishga imkon beradi.

Agar siz __construct()funktsiya yaratsangiz, sinfdan ob'ekt yaratganingizda PHP avtomatik ravishda ushbu funktsiyani chaqiradi.

E'tibor bering, konstruksiya funktsiyasi ikkita pastki chiziq (__) bilan boshlanadi!

Quyidagi misolda biz konstruktordan foydalanish bizni kod miqdorini kamaytiradigan set_name() usulini chaqirishdan qutqarishini ko'ramiz:

```php
<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}

$apple = new Fruit("Apple");
echo $apple->get_name();
?>
```

Yana bir misol:

```php
<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  function get_name() {
    return $this->name;
  }
  function get_color() {
    return $this->color;
  }
}

$apple = new Fruit("Apple", "red");
echo $apple->get_name();
echo "<br>";
echo $apple->get_color();
?>
```













