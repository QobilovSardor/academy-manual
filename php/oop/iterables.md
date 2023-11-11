# 📔 PHP Iterables

## PHP Iterables

PHP - Iterable nima?

Iterable - bu foreach()tsikl orqali o'tish mumkin bo'lgan har qanday qiymat.

Pseudo iterable-turi PHP 7.1 da joriy qilingan va u funktsiya argumentlari va funktsiyani qaytarish qiymatlari uchun ma'lumotlar turi sifatida ishlatilishi mumkin.

PHP - Iterablelardan foydalanish
Kalit iterableso'z funktsiya argumentining ma'lumotlar turi yoki funktsiyaning qaytish turi sifatida ishlatilishi mumkin:

```php
<?php
function printIterable(iterable $myIterable) {
  foreach($myIterable as $item) {
    echo $item;
  }
}

$arr = ["a", "b", "c"];
printIterable($arr);
?>
```

```php
<?php
function getIterable():iterable {
  return ["a", "b", "c"];
}

$myIterable = getIterable();
foreach($myIterable as $item) {
  echo $item;
}
?>
```

PHP - Iterables yaratish

Massivlar

Barcha massivlar takrorlanuvchidir, shuning uchun har qanday massiv iteratsiyani talab qiladigan funksiyaning argumenti sifatida ishlatilishi mumkin.

Iteratorlar

Interfeysni amalga oshiradigan har qanday ob'ekt Iteratoriteratsiyani talab qiladigan funktsiyaning argumenti sifatida ishlatilishi mumkin.

Iterator elementlar ro'yxatini o'z ichiga oladi va ular orqali aylanish usullarini taqdim etadi. U ro'yxatdagi elementlardan biriga ko'rsatgichni saqlaydi. Ro'yxatdagi har bir elementda elementni topish uchun ishlatilishi mumkin bo'lgan kalit bo'lishi kerak.

Iterator quyidagi usullarga ega bo'lishi kerak:

- current()- Ko'rsatkich hozirda ko'rsatayotgan elementni qaytaradi. Bu har qanday ma'lumot turi bo'lishi mumkin
- key()Roʻyxatdagi joriy element bilan bogʻlangan kalitni qaytaradi. Bu faqat butun son, float, mantiqiy yoki satr bo'lishi mumkin
- next()Ko'rsatkichni ro'yxatdagi keyingi elementga o'tkazadi
- rewind()Ko'rsatkichni ro'yxatdagi birinchi elementga olib boradi
- valid()Agar ichki ko'rsatkich biron bir elementga ishora qilmasa (masalan, ro'yxat oxirida next() chaqirilgan bo'lsa), bu noto'g'ri qiymatini qaytarishi kerak. Boshqa har qanday holatda u haqiqatni qaytaradi

```php
<?php
// Create an Iterator
class MyIterator implements Iterator {
  private $items = [];
  private $pointer = 0;

  public function __construct($items) {
    // array_values() makes sure that the keys are numbers
    $this->items = array_values($items);
  }

  public function current() {
    return $this->items[$this->pointer];
  }

  public function key() {
    return $this->pointer;
  }

  public function next() {
    $this->pointer++;
  }

  public function rewind() {
    $this->pointer = 0;
  }

  public function valid() {
    // count() indicates how many items are in the list
    return $this->pointer < count($this->items);
  }
}

// A function that uses iterables
function printIterable(iterable $myIterable) {
  foreach($myIterable as $item) {
    echo $item;
  }
}

// Use the iterator as an iterable
$iterator = new MyIterator(["a", "b", "c"]);
printIterable($iterator);
?>
```















