# 📔 PHP OOP - Destructor

## PHP OOP - Destructor 

PHP - __destruct funktsiyasi

Ob'ekt yo'q qilinganda yoki skript to'xtatilganda yoki undan chiqqanda destruktor chaqiriladi.

Agar siz __destruct()funktsiya yaratsangiz, PHP avtomatik ravishda skript oxirida ushbu funktsiyani chaqiradi.

E'tibor bering, yo'q qilish funktsiyasi ikkita pastki chiziq (__) bilan boshlanadi!

Quyidagi misolda sinfdan ob'ekt yaratganingizda avtomatik ravishda chaqiriladigan __construct() funksiyasi va skript oxirida avtomatik ravishda chaqiriladigan __destruct() funksiyasi mavjud:

```php
<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name) {
    $this->name = $name;
  }
  function __destruct() {
    echo "The fruit is {$this->name}.";
  }
}

$apple = new Fruit("Apple");
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
  function __destruct() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

$apple = new Fruit("Apple", "red");
?>
```

:::warning Eslama
Maslahat: Konstruktorlar va destruktorlar kod miqdorini kamaytirishga yordam bergani uchun ular juda foydali!
:::

















