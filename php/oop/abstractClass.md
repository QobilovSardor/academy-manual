# 📔 PHP OOP - Abstract Classes

## PHP OOP - Abstract Classes (OOP - Abstrakt sinflar)

PHP - Abstrakt sinflar va usullar nima?

Mavhum sinflar va usullar ota-sinfda nomlangan usul bo'lsa, lekin vazifalarni to'ldirish uchun uning pastki sinf(lar)i kerak bo'lganda.

Abstrakt sinf - bu kamida bitta mavhum usulni o'z ichiga olgan sinf. Mavhum usul - e'lon qilingan, lekin kodda amalga oshirilmagan usul.

Mavhum sinf yoki usul quyidagi kalit so'z bilan aniqlanadi abstract :

```php
<?php
abstract class ParentClass {
  abstract public function someMethod1();
  abstract public function someMethod2($name, $color);
  abstract public function someMethod3() : string;
}
?>
```

Mavhum sinfdan meros bo'lganda, bolalar sinf usuli bir xil nom va bir xil yoki kamroq cheklangan kirish modifikatori bilan aniqlanishi kerak. Shunday qilib, agar mavhum usul himoyalangan deb ta'riflangan bo'lsa, bolalar klassi usuli himoyalangan yoki umumiy sifatida belgilanishi kerak, lekin shaxsiy emas. Bundan tashqari, talab qilinadigan argumentlarning turi va soni bir xil bo'lishi kerak. Biroq, bolalar sinflarida qo'shimcha ravishda ixtiyoriy dalillar bo'lishi mumkin.

Shunday qilib, agar bolalar sinfi mavhum sinfdan meros bo'lib o'tgan bo'lsa, bizda quyidagi qoidalar mavjud:

- Child sinf usuli bir xil nom bilan aniqlanishi kerak va u ota-mavhum usulni qayta e'lon qiladi
- Bolalar sinfi usuli bir xil yoki kamroq cheklangan kirish modifikatori bilan aniqlanishi kerak
- Kerakli argumentlar soni bir xil bo'lishi kerak. Biroq, bolalar sinfida qo'shimcha ravishda ixtiyoriy dalillar bo'lishi mumkin

Keling, bir misolni ko'rib chiqaylik:

```php
<?php
// Parent class
abstract class Car {
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  abstract public function intro() : string;
}

// Child classes
class Audi extends Car {
  public function intro() : string {
    return "Choose German quality! I'm an $this->name!";
  }
}

class Volvo extends Car {
  public function intro() : string {
    return "Proud to be Swedish! I'm a $this->name!";
  }
}

class Citroen extends Car {
  public function intro() : string {
    return "French extravagance! I'm a $this->name!";
  }
}

// Create objects from the child classes
$audi = new audi("Audi");
echo $audi->intro();
echo "<br>";

$volvo = new volvo("Volvo");
echo $volvo->intro();
echo "<br>";

$citroen = new citroen("Citroen");
echo $citroen->intro();
?>
```

Misol tushuntirildi

Audi, Volvo va Citroen sinflari Car sinfidan meros bo'lib qolgan. Bu Audi, Volvo va Citroen sinflari meros tufayli umumiy $name xususiyatidan hamda Car sinfidagi public __construct() usulidan foydalanishi mumkinligini anglatadi.

Biroq, intro() barcha bolalar sinflarida aniqlanishi kerak bo'lgan mavhum usul bo'lib, ular satrni qaytarishi kerak.

PHP - Ko'proq mavhum sinf misollari
Keling, mavhum usulda argumentga ega bo'lgan boshqa misolni ko'rib chiqaylik:

```php
<?php
abstract class ParentClass {
  // Abstract method with an argument
  abstract protected function prefixName($name);
}

class ChildClass extends ParentClass {
  public function prefixName($name) {
    if ($name == "John Doe") {
      $prefix = "Mr.";
    } elseif ($name == "Jane Doe") {
      $prefix = "Mrs.";
    } else {
      $prefix = "";
    }
    return "{$prefix} {$name}";
  }
}

$class = new ChildClass;
echo $class->prefixName("John Doe");
echo "<br>";
echo $class->prefixName("Jane Doe");
?>
```

Keling, mavhum usulda argumentga ega bo'lgan boshqa misolni ko'rib chiqaylik va bolalar sinfida ota-onaning abstrakt usulida aniqlanmagan ikkita ixtiyoriy argument mavjud:

```php
<?php
abstract class ParentClass {
  // Abstract method with an argument
  abstract protected function prefixName($name);
}

class ChildClass extends ParentClass {
  // The child class may define optional arguments that are not in the parent's abstract method
  public function prefixName($name, $separator = ".", $greet = "Dear") {
    if ($name == "John Doe") {
      $prefix = "Mr";
    } elseif ($name == "Jane Doe") {
      $prefix = "Mrs";
    } else {
      $prefix = "";
    }
    return "{$greet} {$prefix}{$separator} {$name}";
  }
}

$class = new ChildClass;
echo $class->prefixName("John Doe");
echo "<br>";
echo $class->prefixName("Jane Doe");
?>
```














