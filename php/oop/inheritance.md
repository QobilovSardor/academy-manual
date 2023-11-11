# 📔 PHP OOP - Inheritance

## PHP OOP - Inheritance (OOP - Meros)

PHP - Meros nima?

OOPda meros = Sinf boshqa sinfdan kelib chiqqanda.

Bolalar sinfi barcha umumiy va himoyalangan xususiyatlar va usullarni ota-sinfdan meros qilib oladi. Bundan tashqari, u o'z xususiyatlari va usullariga ega bo'lishi mumkin.

Meroslangan sinf kalit so'z yordamida aniqlanadi extends .

Keling, bir misolni ko'rib chiqaylik:

```php
<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

// Strawberry is inherited from Fruit
class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
  }
}
$strawberry = new Strawberry("Strawberry", "red");
$strawberry->message();
$strawberry->intro();
?>
```

Misol tushuntirildi
Qulupnay sinfi Fruit sinfidan meros bo'lib qolgan.

Demak, Qulupnay klassi meros tufayli umumiy $name va $color xususiyatlaridan hamda Fruit sinfidagi umumiy __construct() va intro() usullaridan foydalanishi mumkin.

Qulupnay sinfining ham o'z usuli bor: message().

PHP - Meros va himoyalangan kirish modifikatori
Oldingi bobda biz protectedxususiyatlar yoki usullarga sinf ichida va shu sinfdan olingan sinflar orqali kirish mumkinligini bilib oldik. U nimani anglatadi?

Keling, bir misolni ko'rib chiqaylik:

```php
<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  protected function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
  }
}

// Try to call all three methods from outside class
$strawberry = new Strawberry("Strawberry", "red");  // OK. __construct() is public
$strawberry->message(); // OK. message() is public
$strawberry->intro(); // ERROR. intro() is protected
?>
```

protected Yuqoridagi misolda biz sinfdan tashqarida usulni (intro()) chaqirmoqchi bo'lsak, xatoga yo'l qo'yishini ko'ramiz . public usullar yaxshi ishlaydi!

Keling, yana bir misolni ko'rib chiqaylik:


```php
<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  protected function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
    // Call protected method from within derived class - OK
    $this -> intro();
  }
}

$strawberry = new Strawberry("Strawberry", "red"); // OK. __construct() is public
$strawberry->message(); // OK. message() is public and it calls intro() (which is protected) from within the derived class
?>
```

Yuqoridagi misolda biz hamma narsa yaxshi ishlayotganini ko'ramiz! Buning sababi, biz protected metodni (intro()) olingan sinf ichidan chaqiramiz.

PHP - Meroslangan usullarni bekor qilish
Bolalar sinfidagi usullarni (xuddi shu nomdan foydalaning) qayta belgilash orqali meros qilib olingan usullarni bekor qilish mumkin.

Quyidagi misolga qarang. Bolalar sinfidagi (Strawberry) __construct() va intro() usullari ota-sinfdagi (Fruit) __construct() va intro() usullarini bekor qiladi:

```php
<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

class Strawberry extends Fruit {
  public $weight;
  public function __construct($name, $color, $weight) {
    $this->name = $name;
    $this->color = $color;
    $this->weight = $weight;
  }
  public function intro() {
    echo "The fruit is {$this->name}, the color is {$this->color}, and the weight is {$this->weight} gram.";
  }
}

$strawberry = new Strawberry("Strawberry", "red", 50);
$strawberry->intro();
?>
```

PHP - yakuniy kalit so'z

Kalit final so'z sinf merosini oldini olish yoki usulni bekor qilishni oldini olish uchun ishlatilishi mumkin.

Quyidagi misol sinf merosini qanday qilib oldini olishni ko'rsatadi:

```php
<?php
final class Fruit {
  // some code
}

// will result in error
class Strawberry extends Fruit {
  // some code
}
?>
```

Quyidagi misol usulni bekor qilishni oldini olishni ko'rsatadi:

```php
<?php
class Fruit {
  final public function intro() {
    // some code
  }
}

class Strawberry extends Fruit {
  // will result in error
  public function intro() {
    // some code
  }
}
?>
```

















