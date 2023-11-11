# 📔 PHP OOP - Static Methods

## PHP OOP - Static Methods (OOP - Statik usullar)

PHP - Statik usullar

Statik usullarni to'g'ridan-to'g'ri chaqirish mumkin - avval sinfning namunasini yaratmasdan.

Statik usullar quyidagi kalit so'z bilan e'lon qilinadi static :

```php
<?php
class ClassName {
  public static function staticMethod() {
    echo "Hello World!";
  }
}
?>
```

Statik usulga kirish uchun sinf nomi, ikki nuqta (::) va usul nomidan foydalaning:

Sintaksis

```php
ClassName::staticMethod();
```

Keling, bir misolni ko'rib chiqaylik:

```php
<?php
class greeting {
  public static function welcome() {
    echo "Hello World!";
  }
}

// Call static method
greeting::welcome();
?>
```

Misol tushuntirildi

Bu erda biz statik usulni e'lon qilamiz: Welcome(). Keyin sinf nomi, ikki nuqta (::) va usul nomidan (avval sinf misolini yaratmasdan) foydalanib, statik usulni chaqiramiz.

PHP - Statik usullar haqida ko'proq ma'lumot
Sinf statik va statik bo'lmagan usullarga ega bo'lishi mumkin. self Statik usulga kalit so'z va ikki nuqta (::) yordamida bitta sinfdagi usuldan kirish mumkin :

```php
<?php
class greeting {
  public static function welcome() {
    echo "Hello World!";
  }

  public function __construct() {
    self::welcome();
  }
}

new greeting();
?>
```

Statik usullarni boshqa sinflardagi usullardan ham chaqirish mumkin. Buning uchun statik usul bo'lishi kerak public:

```php
<?php
class A {
  public static function welcome() {
    echo "Hello World!";
  }
}

class B {
  public function message() {
    A::welcome();
  }
}

$obj = new B();
echo $obj -> message();
?>
```

Bolalar sinfidan statik usulni chaqirish uchun parent bolalar sinfidagi kalit so'zdan foydalaning. Bu erda statik usul public yoki bo'lishi mumkin protected.

```php
<?php
class domain {
  protected static function getWebsiteName() {
    return "W3Schools.com";
  }
}

class domainW3 extends domain {
  public $websiteName;
  public function __construct() {
    $this->websiteName = parent::getWebsiteName();
  }
}

$domainW3 = new domainW3;
echo $domainW3 -> websiteName;
?>
```














