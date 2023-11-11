# 📔 PHP OOP - Static Properties

## PHP OOP - Static Properties (OOP - Statik xususiyatlar)

PHP - Statik xususiyatlar

Statik xususiyatlar to'g'ridan-to'g'ri chaqirilishi mumkin - sinfning namunasini yaratmasdan.

Statik xususiyatlar kalit so'z bilan e'lon qilinadi static :

```php
<?php
class ClassName {
  public static $staticProp = "W3Schools";
}
?>
```

Statik xususiyatga kirish uchun sinf nomi, ikki nuqta (::) va xususiyat nomidan foydalaning:

Sintaksis

```php
ClassName::$staticProp;
```

Keling, bir misolni ko'rib chiqaylik:

```php
<?php
class pi {
  public static $value = 3.14159;
}

// Get static property
echo pi::$value;
?>
```

Misol tushuntirildi

Bu erda biz statik xususiyatni e'lon qilamiz: $value. Keyin, sinf nomi, ikki nuqta (::) va xususiyat nomidan (avval sinf yaratmasdan) foydalanib, statik xususiyatning qiymatini aks ettiramiz.

PHP - Statik xususiyatlar haqida ko'proq ma'lumot

Sinf statik va statik bo'lmagan xususiyatlarga ega bo'lishi mumkin. self Statik xususiyatga kalit so'z va ikki nuqta (::) yordamida bitta sinfdagi usuldan kirish mumkin :

```php
<?php
class pi {
  public static $value=3.14159;
  public function staticValue() {
    return self::$value;
  }
}

$pi = new pi();
echo $pi->staticValue();
?>
```

Bolalar sinfidan statik xususiyatni chaqirish uchun parent bolalar sinfidagi kalit so'zdan foydalaning:

```php
<?php
class pi {
  public static $value=3.14159;
}

class x extends pi {
  public function xStatic() {
    return parent::$value;
  }
}

// Get value of static property directly via child class
echo x::$value;

// or get value of static property via xStatic() method
$x = new x();
echo $x->xStatic();
?>
```
    















