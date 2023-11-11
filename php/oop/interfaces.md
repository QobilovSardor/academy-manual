# 📔 PHP OOP - Interfaces

## PHP OOP - Interfaces (OOP - Interfeyslar)

PHP - Interfeyslar nima?

Interfeyslar sinf qanday usullarni amalga oshirishi kerakligini belgilash imkonini beradi.

Interfeyslar turli xil sinflardan bir xil tarzda foydalanishni osonlashtiradi. Bir yoki bir nechta sinflar bir xil interfeysdan foydalansa, u "polimorfizm" deb ataladi.

Interfeyslar quyidagi kalit so'z bilan e'lon qilinadi interface:

SintaksisO'zingizning PHP serveringizni oling

```php
<?php
interface InterfaceName {
  public function someMethod1();
  public function someMethod2($name, $color);
  public function someMethod3() : string;
}
?>
```

PHP - Interfeyslar va abstrakt sinflar

Interfeys mavhum sinflarga o'xshaydi. Interfeyslar va mavhum sinflar o'rtasidagi farq:

- Interfeyslar xossalarga ega bo'lolmaydi, mavhum sinflar esa
- Barcha interfeys usullari ommaviy bo'lishi kerak, mavhum sinf usullari esa ochiq yoki himoyalangan
- Interfeysdagi barcha usullar mavhum, shuning uchun ularni kodda amalga oshirib bo'lmaydi va mavhum kalit so'z kerak emas.
- Sinflar bir vaqtning o'zida boshqa sinfdan meros qilib olingan holda interfeysni amalga oshirishi mumkin

PHP - Interfeyslardan foydalanish

Interfeysni amalga oshirish uchun sinf implementskalit so'zdan foydalanishi kerak.

Interfeysni amalga oshiradigan sinf interfeysning barcha usullarini amalga oshirishi kerak.

```php
<?php
interface Animal {
  public function makeSound();
}

class Cat implements Animal {
  public function makeSound() {
    echo "Meow";
  }
}

$animal = new Cat();
$animal->makeSound();
?>
```

Yuqoridagi misoldan, aytaylik, biz hayvonlar guruhini boshqaradigan dasturiy ta'minotni yozmoqchimiz. Hamma hayvonlar qila oladigan harakatlar bor, lekin har bir hayvon buni o'ziga xos tarzda qiladi.

Interfeyslardan foydalanib, har bir hayvon boshqacha harakat qilsa ham, barcha hayvonlar uchun ishlashi mumkin bo'lgan ba'zi kodlarni yozishimiz mumkin:

```php
<?php
// Interface definition
interface Animal {
  public function makeSound();
}

// Class definitions
class Cat implements Animal {
  public function makeSound() {
    echo " Meow ";
  }
}

class Dog implements Animal {
  public function makeSound() {
    echo " Bark ";
  }
}

class Mouse implements Animal {
  public function makeSound() {
    echo " Squeak ";
  }
}

// Create a list of animals
$cat = new Cat();
$dog = new Dog();
$mouse = new Mouse();
$animals = array($cat, $dog, $mouse);

// Tell the animals to make a sound
foreach($animals as $animal) {
  $animal->makeSound();
}
?>
```

Misol tushuntirildi

Mushuk, it va sichqonchaning barchasi Hayvon interfeysini amalga oshiradigan sinflardir, ya'ni ularning barchasi ushbu usul yordamida ovoz chiqarishga qodir makeSound(). Shu sababli, biz barcha hayvonlarni aylanib o'tishimiz va ularning har biri qanday hayvon ekanligini bilmasak ham, ularga ovoz chiqarishni aytishimiz mumkin.

Interfeys sinflarga usulni qanday amalga oshirish kerakligini aytmaganligi sababli, har bir hayvon o'ziga xos tarzda ovoz chiqarishi mumkin.














